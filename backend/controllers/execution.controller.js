const CodingProblem = require("../models/codingProblem");
const Submission = require("../models/submission");
const Contest = require("../models/contest.model");
const ContestRanking = require("../models/contestRanking.model");
const { executeBatch, getStatusMessage, LANGUAGE_MAP } = require("../utils/judge0");
const { canUserAccessProblem } = require("../utils/visibilityHelper");

/**
 * Common logic to process results from Judge0
 */
const processResults = (results, testCases) => {
    return results.map((result, index) => {
        const tc = testCases[index];
        
        // Defensive check: if result or result.status is missing, handle gracefully
        if (!result || !result.status) {
            return {
                testCaseId: tc._id,
                status: "Internal Error",
                stdout: null,
                stderr: "Execution failed to return a valid status from Judge0.",
                compile_output: null,
                time: 0,
                memory: 0,
                isHidden: tc.isHidden
            };
        }

        const normalizedOutput = result.stdout?.trim().replace(/\r\n/g, "\n") || "";
        const expectedOutput = tc.expectedOutput.trim().replace(/\r\n/g, "\n");
        
        let status = getStatusMessage(result.status.id);
        if (status === "Accepted" && normalizedOutput !== expectedOutput) {
            status = "Wrong Answer";
        }

        return {
            testCaseId: tc._id,
            status,
            stdout: tc.isHidden ? null : result.stdout,
            stderr: tc.isHidden ? null : result.stderr,
            compile_output: tc.isHidden ? null : result.compile_output,
            time: result.time,
            memory: result.memory,
            isHidden: tc.isHidden
        };
    });
};

/**
 * Run code against sample test cases
 */
const runCode = async (req, res) => {
    try {
        const { problemId, language, code, customInput } = req.body;
        
        const problem = await CodingProblem.findById(problemId);
        if (!problem) {
            return res.status(404).json({ success: false, message: "Problem not found" });
        }

        // Check visibility access
        const hasAccess = await canUserAccessProblem(problem, req.user);
        if (!hasAccess) {
            return res.status(403).json({ 
                success: false, 
                message: "Access denied. You do not have permission to run code for this problem." 
            });
        }

        // Prepare submissions
        let submissionsToRun = [];
        let testCasesReference = [];

        if (customInput !== undefined && customInput !== null) {
            submissionsToRun = [{
                source_code: code,
                language_id: LANGUAGE_MAP[language],
                stdin: customInput,
                time_limit: problem.timeLimit,
                memory_limit: problem.memoryLimit
            }];
            testCasesReference = [{ input: customInput, expectedOutput: "", isHidden: false, _id: "custom" }];
        } else {
            const publicTestCases = problem.testCases.filter(tc => !tc.isHidden);
            submissionsToRun = publicTestCases.map(tc => ({
                source_code: code,
                language_id: LANGUAGE_MAP[language],
                stdin: tc.input,
                expected_output: tc.expectedOutput,
                time_limit: problem.timeLimit,
                memory_limit: problem.memoryLimit
            }));
            testCasesReference = publicTestCases;
        }

        if (submissionsToRun.length === 0) {
            return res.status(200).json({ success: true, results: [] });
        }

        const rawResults = await executeBatch(submissionsToRun);
        const processedResults = processResults(rawResults, testCasesReference);

        // Special handling for the isCustom flag in the response
        if (customInput !== undefined && customInput !== null) {
            processedResults[0].isCustom = true;
        }

        res.status(200).json({ success: true, results: processedResults });
    } catch (error) {
        if (error.code === 'ECONNREFUSED' || error.code === 'ETIMEDOUT' || error.message.includes('ECONNREFUSED') || error.message.includes('timeout') || error.message.includes('timed out')) {
            return res.status(503).json({ 
                success: false, 
                message: "Coding execution service (Judge0) is currently unreachable or timed out. Please ensure it is running." 
            });
        }
        res.status(500).json({ success: false, message: error.message || "Internal Server Error during execution." });
    }
};

/**
 * Submit code against all test cases and save submission
 */
const submitCode = async (req, res) => {
    try {
        const { problemId, language, code } = req.body;
        
        const problem = await CodingProblem.findById(problemId);
        if (!problem) {
            return res.status(404).json({ success: false, message: "Problem not found" });
        }

        // Check visibility access
        const hasAccess = await canUserAccessProblem(problem, req.user);
        if (!hasAccess) {
            return res.status(403).json({ 
                success: false, 
                message: "Access denied. You do not have permission to submit code for this problem." 
            });
        }

        const submissionsToRun = problem.testCases.map(tc => ({
            source_code: code,
            language_id: LANGUAGE_MAP[language],
            stdin: tc.input,
            expected_output: tc.expectedOutput,
            time_limit: problem.timeLimit,
            memory_limit: problem.memoryLimit
        }));

        const rawResults = await executeBatch(submissionsToRun);
        const results = processResults(rawResults, problem.testCases);

        let totalTime = 0;
        let totalMemory = 0;
        let finalStatus = "Accepted";

        results.forEach(res => {
            if (res.status !== "Accepted" && finalStatus === "Accepted") {
                finalStatus = res.status;
            }
            totalTime = Math.max(totalTime, parseFloat(res.time) || 0);
            totalMemory = Math.max(totalMemory, parseInt(res.memory) || 0);
        });

        // ✅ Conditional Code Preservation
        // Only save full code for private (company assessment) problems.
        // For public and contest problems, replace code with a placeholder to save storage.
        let codeToSave = code;
        if (problem.visibilityStatus !== 'private') {
            codeToSave = `// Source code redacted for ${problem.visibilityStatus} problems. Contact admin for details if needed.`;
        }

        const submission = await Submission.create({
            problem: problemId,
            user: req.user._id,
            language,
            code: codeToSave,
            status: finalStatus,
            results: results.map(r => ({ ...r, stdout: r.isHidden ? null : r.stdout })),
            totalTime,
            totalMemory,
            contest: req.body.contestId || null
        });

        // Update contest rankings if applicable
        if (req.body.contestId && finalStatus === "Accepted") {
            try {
                const contest = await Contest.findById(req.body.contestId);
                if (contest) {
                    const now = new Date();
                    const penalty = Math.floor((now - new Date(contest.startTime)) / 1000);
                    
                    let ranking = await ContestRanking.findOne({ contest: contest._id, user: req.user._id });
                    if (!ranking) {
                        ranking = new ContestRanking({
                            contest: contest._id,
                            user: req.user._id,
                            solvedProblems: [],
                            totalPoints: 0,
                            totalTime: 0
                        });
                    }

                    // Check if problem already solved to avoid double counting
                    const alreadySolved = ranking.solvedProblems.find(p => p.problem.toString() === problemId);
                    if (!alreadySolved) {
                        const problemPoints = problem.points || (problem.difficulty === 'Easy' ? 10 : problem.difficulty === 'Medium' ? 30 : 50);
                        
                        ranking.solvedProblems.push({
                            problem: problemId,
                            points: problemPoints,
                            submittedAt: now,
                            penalty: penalty
                        });
                        
                        ranking.totalPoints += problemPoints;
                        ranking.totalTime = Math.max(ranking.totalTime, penalty);
                        await ranking.save();
                    }
                }
            } catch (err) {
                console.error("CONTEST_RANKING_UPDATE_ERROR:", err);
            }
        }

        res.status(201).json({
            success: true,
            message: "Submission processed",
            submission
        });
    } catch (error) {
        if (error.code === 'ECONNREFUSED' || error.code === 'ETIMEDOUT' || error.message.includes('ECONNREFUSED') || error.message.includes('timeout') || error.message.includes('timed out')) {
            return res.status(503).json({ 
                success: false, 
                message: "Coding execution service (Judge0) is currently unreachable or timed out. Please ensure it is running." 
            });
        }
        res.status(500).json({ success: false, message: error.message || "Internal Server Error during submission." });
    }
};

module.exports = {
    runCode,
    submitCode
};
