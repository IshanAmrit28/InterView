import { useState, useRef } from 'react'
import { Mic, Volume2, CheckCircle2, XCircle, Lightbulb, Target, Briefcase } from 'lucide-react'
import ReactMarkdown from 'react-markdown'
import PageHeader from '../components/PageHeader'
import Button from '../components/Button'
import AnimatedBackground from '../components/AnimatedBackground'
import './Interview.css'

// Predefined Interview Questions by Role
const interviewQuestions = {
    'Frontend Developer': [
        {
            id: 'fe-1',
            question: "Explain the Virtual DOM in React and how it improves performance.",
            difficulty: "Medium",
            category: "Technical",
            hints: ["Mention diffing algorithm", "Compare with real DOM", "Explain reconciliation"]
        },
        {
            id: 'fe-2',
            question: "What is the difference between useEffect and useLayoutEffect?",
            difficulty: "Medium",
            category: "Technical",
            hints: ["Timing of execution", "When to use each", "Visual changes"]
        },
        {
            id: 'fe-3',
            question: "Describe a challenging UI problem you solved and your approach.",
            difficulty: "Medium",
            category: "Behavioral",
            hints: ["Use STAR method", "Mention specific technologies", "Explain impact"]
        },
        {
            id: 'fe-4',
            question: "How would you optimize a React application with performance issues?",
            difficulty: "Hard",
            category: "Technical",
            hints: ["React.memo", "Code splitting", "Lazy loading", "useMemo/useCallback"]
        },
        {
            id: 'fe-5',
            question: "Explain CSS specificity and how to manage it in large applications.",
            difficulty: "Easy",
            category: "Technical",
            hints: ["Specificity hierarchy", "BEM methodology", "CSS-in-JS solutions"]
        }
    ],
    'Backend Developer': [
        {
            id: 'be-1',
            question: "Explain the difference between SQL and NoSQL databases. When would you use each?",
            difficulty: "Medium",
            category: "Technical",
            hints: ["Data structure", "Scalability", "ACID vs BASE", "Use cases"]
        },
        {
            id: 'be-2',
            question: "What is the N+1 query problem and how do you solve it?",
            difficulty: "Hard",
            category: "Technical",
            hints: ["Database queries", "Eager loading", "JOIN operations", "ORM optimization"]
        },
        {
            id: 'be-3',
            question: "Describe your experience with API design and RESTful principles.",
            difficulty: "Medium",
            category: "Technical",
            hints: ["HTTP methods", "Status codes", "Resource naming", "Versioning"]
        },
        {
            id: 'be-4',
            question: "How would you handle a production database outage?",
            difficulty: "Hard",
            category: "Behavioral",
            hints: ["Incident response", "Communication", "Recovery plan", "Post-mortem"]
        },
        {
            id: 'be-5',
            question: "Explain authentication vs authorization. Implement JWT-based auth.",
            difficulty: "Medium",
            category: "Technical",
            hints: ["Auth vs Authz", "Token structure", "Refresh tokens", "Security"]
        }
    ],
    'Full Stack Developer': [
        {
            id: 'fs-1',
            question: "Walk me through building a scalable web application from scratch.",
            difficulty: "Hard",
            category: "Technical",
            hints: ["Architecture", "Tech stack", "Database design", "Deployment"]
        },
        {
            id: 'fs-2',
            question: "Explain how you would implement real-time features in a web app.",
            difficulty: "Medium",
            category: "Technical",
            hints: ["WebSockets", "Server-Sent Events", "Polling", "Trade-offs"]
        },
        {
            id: 'fs-3',
            question: "Describe a time you had to debug a complex full-stack issue.",
            difficulty: "Medium",
            category: "Behavioral",
            hints: ["Debugging process", "Tools used", "Root cause", "Prevention"]
        },
        {
            id: 'fs-4',
            question: "How do you ensure API security in a production application?",
            difficulty: "Hard",
            category: "Technical",
            hints: ["Authentication", "Rate limiting", "CORS", "Input validation", "HTTPS"]
        },
        {
            id: 'fs-5',
            question: "Explain your approach to state management in modern web apps.",
            difficulty: "Medium",
            category: "Technical",
            hints: ["Redux vs Context", "Server state", "Local state", "Trade-offs"]
        }
    ],
    'Data Analyst': [
        {
            id: 'da-1',
            question: "Explain the difference between WHERE and HAVING clauses in SQL.",
            difficulty: "Easy",
            category: "Technical",
            hints: ["Filtering rows vs groups", "Execution order", "Aggregate functions"]
        },
        {
            id: 'da-2',
            question: "How would you analyze user churn for a subscription service?",
            difficulty: "Medium",
            category: "Technical",
            hints: ["Metrics", "Cohort analysis", "Visualization", "Recommendations"]
        },
        {
            id: 'da-3',
            question: "Describe your experience with data visualization tools.",
            difficulty: "Easy",
            category: "Behavioral",
            hints: ["Tools used", "Dashboard design", "Stakeholder communication"]
        },
        {
            id: 'da-4',
            question: "What is A/B testing and how do you measure its success?",
            difficulty: "Medium",
            category: "Technical",
            hints: ["Hypothesis", "Sample size", "Statistical significance", "Metrics"]
        },
        {
            id: 'da-5',
            question: "How do you handle missing or inconsistent data in analysis?",
            difficulty: "Medium",
            category: "Technical",
            hints: ["Data cleaning", "Imputation methods", "Impact assessment", "Documentation"]
        }
    ],
    'DevOps Engineer': [
        {
            id: 'do-1',
            question: "Explain CI/CD and describe a pipeline you've implemented.",
            difficulty: "Medium",
            category: "Technical",
            hints: ["Build", "Test", "Deploy stages", "Tools", "Automation"]
        },
        {
            id: 'do-2',
            question: "What is containerization and how does Docker work?",
            difficulty: "Easy",
            category: "Technical",
            hints: ["Containers vs VMs", "Images", "Dockerfile", "Benefits"]
        },
        {
            id: 'do-3',
            question: "Describe how you would handle a production incident.",
            difficulty: "Hard",
            category: "Behavioral",
            hints: ["Detection", "Mitigation", "Communication", "Post-mortem"]
        },
        {
            id: 'do-4',
            question: "Explain Infrastructure as Code and your experience with it.",
            difficulty: "Medium",
            category: "Technical",
            hints: ["Terraform/CloudFormation", "Version control", "Benefits", "Best practices"]
        },
        {
            id: 'do-5',
            question: "How do you monitor and ensure application reliability?",
            difficulty: "Hard",
            category: "Technical",
            hints: ["Monitoring tools", "Metrics", "Alerting", "SLAs/SLOs"]
        }
    ]
}

function Interview() {
    const [selectedRole, setSelectedRole] = useState(null)
    const [currentQuestion, setCurrentQuestion] = useState(null)
    const [userAnswer, setUserAnswer] = useState('')
    const [feedback, setFeedback] = useState(null)
    const [isAnalyzing, setIsAnalyzing] = useState(false)
    const [completedQuestions, setCompletedQuestions] = useState([])
    const textareaRef = useRef(null)

    // Backend API URL - Smart default: Localhost in dev, relative in prod
    const API_URL = import.meta.env.VITE_API_URL || (import.meta.env.DEV ? 'http://localhost:3001' : '')

    const selectQuestion = (question) => {
        setCurrentQuestion(question)
        setUserAnswer('')
        setFeedback(null)
    }

    const analyzeAnswer = async () => {
        if (!userAnswer.trim()) return

        setIsAnalyzing(true)
        try {
            // Call backend API instead of Gemini directly
            const response = await fetch(`${API_URL}/api/interview/analyze`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    question: currentQuestion.question,
                    answer: userAnswer,
                    difficulty: currentQuestion.difficulty,
                    category: currentQuestion.category
                })
            })

            if (!response.ok) {
                throw new Error(`Backend error: ${response.status}`)
            }

            const data = await response.json()
            setFeedback(data.feedback)

            // Mark question as completed
            if (!completedQuestions.includes(currentQuestion.id)) {
                setCompletedQuestions(prev => [...prev, currentQuestion.id])
            }
        } catch (error) {
            console.error('Analysis error:', error)
            setFeedback('Error analyzing answer. Please make sure the backend server is running.')
        } finally {
            setIsAnalyzing(false)
        }
    }

    const resetPractice = () => {
        setSelectedRole(null)
        setCurrentQuestion(null)
        setUserAnswer('')
        setFeedback(null)
        setCompletedQuestions([])
    }

    const getDifficultyColor = (difficulty) => {
        switch (difficulty) {
            case 'Easy': return '#10b981'
            case 'Medium': return '#f59e0b'
            case 'Hard': return '#ef4444'
            default: return '#6b7280'
        }
    }

    return (
        <div className="interview-page">
            <AnimatedBackground />
            <PageHeader
                title="Interview Practice"
                description="Practice interview questions by role and get AI-powered feedback"
                icon={<Briefcase size={40} />}
            />

            <div className="interview-container">
                {!selectedRole ? (
                    // Role Selection Screen
                    <div className="role-selection">
                        <h2>Select Your Interview Role</h2>
                        <div className="roles-grid">
                            {Object.keys(interviewQuestions).map((role) => (
                                <div
                                    key={role}
                                    className="role-card"
                                    onClick={() => setSelectedRole(role)}
                                >
                                    <div className="role-icon">
                                        <Target size={32} />
                                    </div>
                                    <h3>{role}</h3>
                                    <p>{interviewQuestions[role].length} questions</p>
                                    <div className="role-progress">
                                        {completedQuestions.filter(id =>
                                            interviewQuestions[role].some(q => q.id === id)
                                        ).length} / {interviewQuestions[role].length} completed
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ) : !currentQuestion ? (
                    // Question Selection Screen
                    <div className="question-selection">
                        <div className="selection-header">
                            <button className="btn-back" onClick={() => setSelectedRole(null)}>
                                ← Back to Roles
                            </button>
                            <h2>{selectedRole}</h2>
                            <p>Select a question to practice</p>
                        </div>

                        <div className="questions-list">
                            {interviewQuestions[selectedRole].map((question) => (
                                <div
                                    key={question.id}
                                    className={`question-item ${completedQuestions.includes(question.id) ? 'completed' : ''}`}
                                    onClick={() => selectQuestion(question)}
                                >
                                    <div className="question-header">
                                        <span
                                            className="difficulty-badge"
                                            style={{ backgroundColor: getDifficultyColor(question.difficulty) }}
                                        >
                                            {question.difficulty}
                                        </span>
                                        <span className="category-tag">{question.category}</span>
                                        {completedQuestions.includes(question.id) && (
                                            <CheckCircle2 size={20} className="completed-icon" />
                                        )}
                                    </div>
                                    <p className="question-text">{question.question}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    // Question Practice Screen
                    <div className="question-practice">
                        <div className="practice-header">
                            <button className="btn-back" onClick={() => setCurrentQuestion(null)}>
                                ← Back to Questions
                            </button>
                            <div className="practice-meta">
                                <span
                                    className="difficulty-badge"
                                    style={{ backgroundColor: getDifficultyColor(currentQuestion.difficulty) }}
                                >
                                    {currentQuestion.difficulty}
                                </span>
                                <span className="category-tag">{currentQuestion.category}</span>
                            </div>
                        </div>

                        <div className="question-content">
                            <h3>{currentQuestion.question}</h3>

                            {/* Hints Section */}
                            <details className="hints-section">
                                <summary>
                                    <Lightbulb size={18} />
                                    View Hints ({currentQuestion.hints.length})
                                </summary>
                                <ul>
                                    {currentQuestion.hints.map((hint, index) => (
                                        <li key={index}>{hint}</li>
                                    ))}
                                </ul>
                            </details>

                            {/* Answer Input */}
                            <div className="answer-section">
                                <label>Your Answer:</label>
                                <textarea
                                    ref={textareaRef}
                                    value={userAnswer}
                                    onChange={(e) => setUserAnswer(e.target.value)}
                                    placeholder="Type your detailed answer here... Be as thorough as possible."
                                    rows={12}
                                    disabled={isAnalyzing}
                                />
                                <div className="answer-meta">
                                    <span className="char-count">
                                        {userAnswer.length} characters
                                    </span>
                                    <button
                                        className="btn-primary"
                                        onClick={analyzeAnswer}
                                        disabled={!userAnswer.trim() || isAnalyzing}
                                    >
                                        {isAnalyzing ? (
                                            <>Analyzing...</>
                                        ) : (
                                            <>
                                                <Target size={18} />
                                                Get AI Feedback
                                            </>
                                        )}
                                    </button>
                                </div>
                            </div>

                            {/* Feedback Section */}
                            {feedback && (
                                <div className="feedback-section">
                                    <h4>
                                        <CheckCircle2 size={20} />
                                        AI Feedback
                                    </h4>
                                    <div className="feedback-content">
                                        <ReactMarkdown>{feedback}</ReactMarkdown>
                                    </div>
                                    <div className="feedback-actions">
                                        <button
                                            className="btn-secondary"
                                            onClick={() => {
                                                setCurrentQuestion(null)
                                                setUserAnswer('')
                                                setFeedback(null)
                                            }}
                                        >
                                            Next Question
                                        </button>
                                        <button
                                            className="btn-secondary"
                                            onClick={() => {
                                                setUserAnswer('')
                                                setFeedback(null)
                                            }}
                                        >
                                            Try Again
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {/* Reset Button */}
                {selectedRole && (
                    <button className="btn-reset" onClick={resetPractice}>
                        Start Over
                    </button>
                )}
            </div>
        </div>
    )
}

export default Interview
