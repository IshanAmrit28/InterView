// frontend/src/pages/InterviewRoom.jsx
import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition"; // NEW IMPORT
import {
  Mic,
  MicOff,
  PhoneOff,
  Play,
  Volume2,
  Video,
  VideoOff,
  Loader2,
  FileText,
} from "lucide-react";
import { endInterview } from "../services/interviewService";

// HARDCODED CANDIDATE ID (FOR DEMO ONLY)
const CANDIDATE_ID = "6912c711cabf1fe8c3bd941c";
const CANDIDATE_NAME = "Candidate Demo";

// --- Components (Inline for single-file mandate context) ---

const ControlButton = ({ onClick, className, children, disabled = false }) => (
  <button
    onClick={onClick}
    className={`p-3 rounded-full text-white transition-all duration-200 shadow-xl ${className} ${
      disabled ? "bg-gray-500 cursor-not-allowed opacity-70" : ""
    }`}
    disabled={disabled}
  >
    {children}
  </button>
);

const ParticipantTile = ({
  name,
  isMuted,
  isCameraOff,
  isSpeaking,
  avatarUrl,
}) => (
  <div className="relative w-full h-full bg-gray-900 rounded-xl flex items-center justify-center overflow-hidden border-2 border-gray-700">
    {isSpeaking && (
      <div className="absolute inset-0 border-4 border-blue-500 rounded-xl ring-4 ring-blue-500 ring-opacity-50 animate-pulse transition-all duration-100" />
    )}
    <div className="flex flex-col items-center justify-center">
      {isCameraOff ? (
        <div className="w-32 h-32 bg-gray-700 rounded-full flex items-center justify-center">
          <span className="text-5xl font-bold text-white">
            {name.charAt(0)}
          </span>
        </div>
      ) : (
        <img
          src={avatarUrl}
          alt={`${name} avatar`}
          className="w-48 h-48 object-cover rounded-full shadow-lg border-4 border-gray-600"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://placehold.co/192x192/4b5563/ffffff?text=AI";
          }}
        />
      )}
      {isSpeaking && (
        <Volume2 className="w-8 h-8 text-blue-400 mt-6 animate-pulse" />
      )}
    </div>
    <div className="absolute bottom-5 left-6 p-2 px-4 bg-black bg-opacity-70 rounded-lg shadow-md">
      <span className="text-lg font-medium text-white">{name}</span>
      {/* MicOff icon is displayed if isMuted is true */}
      {isMuted && <MicOff className="w-5 h-5 text-red-500 ml-2 inline-block" />}
    </div>
  </div>
);

// --- Main Interview Component ---

const InterviewRoom = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Initial data passed from PracticeSetup
  const initialReportData = location.state?.reportStructure || {
    DBMS: [],
    OS: [],
    CN: [],
    OOP: [],
    "Resume based question": [],
    // Included to ensure robust object structure check
    ALGORITHM: [],
  };
  const initialReportId = location.state?.reportId;

  // --- Speech Recognition Hook Setup (Replaced native API) ---
  const {
    transcript, // Live/Final captured text from speech
    resetTranscript,
    browserSupportsSpeechRecognition,
    listening, // boolean: true if the microphone is actively listening
  } = useSpeechRecognition();

  // --- State Management ---
  const [reportData, setReportData] = useState(initialReportData);
  const [reportId, setReportId] = useState(initialReportId);
  const [isMicOn, setIsMicOn] = useState(false); // Controls button visual state
  const [isInterviewerSpeaking, setIsInterviewerSpeaking] = useState(false);
  // Removed isListening, transcript states
  const [interviewStatus, setInterviewStatus] = useState("idle"); // idle, running, submitting, finished
  const [questionIndex, setQuestionIndex] = useState(-1);
  const [statusMessage, setStatusMessage] = useState("Click Start to begin.");
  const [error, setError] = useState(null);
  const [elapsedTime, setElapsedTime] = useState(0);
  // STATE for Text Area answer (for ALGORITHMS)
  const [textAreaAnswer, setTextAreaAnswer] = useState("");

  // --- Refs ---
  // Removed recognitionRef and transcriptRef
  const voicesRef = useRef([]);
  const questionIndexRef = useRef(questionIndex);
  const timerRef = useRef(null);

  const questionKeys = Object.keys(reportData).filter((key) =>
    Array.isArray(reportData[key]),
  );
  const allQuestions = questionKeys.flatMap((key) =>
    reportData[key].map((q) => ({ ...q, category: key })),
  );
  const totalQuestions = allQuestions.length;
  const currentQuestion = allQuestions[questionIndex];

  // CONSTANT: Check if the current question requires a text box answer
  const isAlgoQuestion = currentQuestion?.category === "ALGORITHM";

  // Sync Refs
  useEffect(() => {
    questionIndexRef.current = questionIndex;
  }, [questionIndex]);

  // Timer Logic
  useEffect(() => {
    if (interviewStatus === "running") {
      timerRef.current = setInterval(() => {
        setElapsedTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(timerRef.current);
    }
    return () => clearInterval(timerRef.current);
  }, [interviewStatus]);

  // Format time (MM:SS)
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes < 10 ? "0" : ""}${minutes}:${
      remainingSeconds < 10 ? "0" : ""
    }${remainingSeconds}`;
  };

  // --- Speech Helper Functions ---
  const speakQuestion = (text) => {
    return new Promise((resolve) => {
      if (!window.speechSynthesis) {
        console.warn("TTS not supported.");
        resolve();
        return;
      }
      window.speechSynthesis.cancel();
      const utter = new SpeechSynthesisUtterance(text);

      const loadVoices = () => {
        voicesRef.current = window.speechSynthesis.getVoices();
      };
      loadVoices();
      const voices = voicesRef.current;

      const chosenVoice =
        voices.find(
          (v) => v.lang.includes("en-US") && v.name.includes("Google"),
        ) || voices.find((v) => v.lang.includes("en-US"));

      if (chosenVoice) utter.voice = chosenVoice;
      utter.rate = 0.95;

      utter.onstart = () => setIsInterviewerSpeaking(true);
      utter.onend = () => {
        setIsInterviewerSpeaking(false);
        resolve();
      };
      utter.onerror = (e) => {
        console.error("TTS Error:", e);
        setIsInterviewerSpeaking(false);
        resolve();
      };
      window.speechSynthesis.speak(utter);
    });
  };

  // NEW startListening function using hook methods
  const startListening = () => {
    // Disabled if it's an ALGORITHMS question
    if (isAlgoQuestion || listening) return;
    try {
      SpeechRecognition.startListening({ continuous: true, language: "en-US" });
      resetTranscript(); // Clear any previous transcript
      setIsMicOn(true);
      setStatusMessage("Listening... Speak now.");
      setError(null);
    } catch (e) {
      console.error("Error starting recognition:", e);
      setError(`Failed to start mic: ${e.message}`);
    }
  };

  // NEW stopListening function using hook methods
  const stopListening = () => {
    SpeechRecognition.stopListening();
    setIsMicOn(false);
    setStatusMessage("Recording stopped.");
  };

  // --- Cleanup useEffect (Removed recognition setup) ---
  useEffect(() => {
    if (!browserSupportsSpeechRecognition) {
      setError("Web Speech API not supported. Voice features unavailable.");
    }

    // Only cleanup TTS
    return () => {
      if (window.speechSynthesis) window.speechSynthesis.cancel();
      SpeechRecognition.abortListening(); // Use library's abort method on unmount
    };
  }, [browserSupportsSpeechRecognition]);

  // --- Answer Submission & Next Question Logic ---

  const updateReportWithAnswer = (answerText) => {
    if (!currentQuestion) return;
    const { category, questionId } = currentQuestion;

    setReportData((prevData) => {
      const newReportData = { ...prevData };
      const categoryArray = newReportData[category];

      const qIndex = categoryArray.findIndex(
        (q) => q.questionId === questionId,
      );

      if (qIndex !== -1) {
        categoryArray[qIndex] = {
          ...categoryArray[qIndex],
          answer: answerText,
        };
      }
      return newReportData;
    });
  };

  const handleAnswerSubmit = (finalAnswer) => {
    stopListening(); // Ensure mic is off

    const answerText = finalAnswer.trim() || "(No response recorded)";
    updateReportWithAnswer(answerText);

    setStatusMessage(`Answer recorded: ${answerText.substring(0, 50)}...`);
    resetTranscript(); // Clear hook's internal transcript
    setTextAreaAnswer(""); // Clear text area after submission

    setTimeout(askNextQuestion, 2000);
  };

  // HANDLER for submitting text area answers
  const handleTextAnswerSubmit = () => {
    if (isAlgoQuestion && interviewStatus === "running") {
      handleAnswerSubmit(textAreaAnswer);
    }
  };

  const askNextQuestion = () => {
    if (questionIndexRef.current + 1 >= totalQuestions) {
      handleEndInterview(false);
      return;
    }

    const nextIndex = questionIndexRef.current + 1;
    const nextQuestion = allQuestions[nextIndex];
    const nextQuestionText = nextQuestion.question;
    const isNextAlgo = nextQuestion.category === "ALGORITHM";

    setStatusMessage("Interviewer is speaking...");

    speakQuestion(nextQuestionText)
      .then(() => {
        setQuestionIndex(nextIndex);

        if (isNextAlgo) {
          // Disable Mic, clear refs for text questions
          stopListening(); // Ensures mic is off
          setStatusMessage(
            "Ready for your code/answer. Type and click Submit.",
          );
        } else {
          // Enable Mic prompt for verbal questions
          setStatusMessage("Ready for your answer. Click the mic button.");
        }
      })
      .catch((err) => {
        setError("Failed to speak question.");
        console.error(err);
      });
  };

  // --- Control Handlers ---

  const handleStartInterview = async () => {
    if (interviewStatus === "running" || totalQuestions === 0) return;

    setInterviewStatus("running");
    setElapsedTime(0);
    setError(null);
    setQuestionIndex(-1);
    setTextAreaAnswer("");

    const greeting =
      "Hello, and welcome to the interview simulator. We will have a rapid fire round. for fundamental questions answer duration is 30 seconds maximum, for coding and project or resume based question there will be no time limit. So now as the rules are clear. lets start.";
    setStatusMessage("Interviewer is speaking...");

    await speakQuestion(greeting);

    askNextQuestion();
  };

  const handleMicToggle = () => {
    // Disabled if interview is not running, interviewer is speaking, OR if it's an Algo question
    if (
      interviewStatus !== "running" ||
      isInterviewerSpeaking ||
      isAlgoQuestion
    )
      return;

    // If Mic is currently ON, user is turning it OFF (End of answer)
    if (isMicOn) {
      // Stop listening and process the final captured transcript
      stopListening();
      handleAnswerSubmit(transcript);
    } else {
      // If Mic is currently OFF, user is turning it ON (Start of answer)
      startListening();
    }
  };

  // Final submission and redirect
  const handleEndInterview = async (isManualStop) => {
    setInterviewStatus("submitting");
    stopListening();
    window.speechSynthesis.cancel();

    setStatusMessage("Submitting answers for AI grading...");

    const finalReportPayload = {
      reportId: reportId,
      candidateId: CANDIDATE_ID,
      reportStructure: reportData,
    };

    try {
      await endInterview(finalReportPayload);

      navigate(`/report/${reportId}`, { replace: true });
    } catch (err) {
      setError(err.message || "Submission failed. Check network.");
      setInterviewStatus("idle");
      setStatusMessage("Submission failed. You can try submitting again.");
    }
  };

  // Initial check for required data
  if (!initialReportId || totalQuestions === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white min-w-[1280px]">
        <div className="text-center p-8 bg-gray-800 rounded-xl shadow-2xl border border-red-500/30">
          <h1 className="text-3xl font-bold text-red-400 mb-4">
            Interview Setup Error
          </h1>
          <p className="text-gray-300 mb-6">
            Missing vital interview data. Please start a session from the
            Practice page.
          </p>
          <button
            onClick={() => navigate("/practice")}
            className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold transition"
          >
            Go to Practice Setup
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen w-screen bg-gray-900 text-white font-sans min-w-[1280px]">
      <PageHeader
        title="Interview Practice"
        description="Practice interview questions by role and get AI-powered feedback"
        icon={<Briefcase size={40} />}
      />
      {/* Left Panel: Video Tiles */}
      <div className="w-2/3 h-full p-6 flex flex-col gap-6">
        <div className="h-1/2">
          <ParticipantTile
            name={CANDIDATE_NAME}
            // Mic is Muted when the toggle is OFF OR if it's an Algo Question (no mic needed)
            isMuted={!isMicOn || isAlgoQuestion}
            isCameraOff={true}
            // Candidate is Speaking/Active when recognition is ON (only for verbal Qs)
            isSpeaking={listening && !isAlgoQuestion} // Use 'listening' from hook
            avatarUrl="https://placehold.co/500x500/27272a/ffffff?text=CANDIDATE"
          />
        </div>
        <div className="h-1/2">
          <ParticipantTile
            name="AI Interviewer"
            isMuted={false}
            isCameraOff={true}
            isSpeaking={isInterviewerSpeaking}
            avatarUrl="https://placehold.co/500x500/27272a/ffffff?text=AI+INTERVIEWER"
          />
        </div>
      </div>

      {/* Right Panel: Controls and Transcript */}
      <div className="w-1/3 h-full bg-gray-800 border-l border-gray-700 p-6 flex flex-col justify-between">
        {/* Top Info */}
        <div className="flex justify-between items-center pb-6 border-b border-gray-700">
          <div className="text-2xl font-bold text-blue-400">
            {currentQuestion
              ? `Q ${questionIndex + 1} of ${totalQuestions}`
              : "Ready"}
          </div>
          <div className="flex flex-col items-end">
            <p className="text-lg text-gray-400">Time Elapsed</p>
            <span className="text-2xl font-mono font-bold text-white">
              {formatTime(elapsedTime)}
            </span>
          </div>
        </div>

        {/* Question & Answer Area */}
        <div className="flex-1 py-6 overflow-y-auto space-y-6">
          <div className="p-4 bg-gray-700/50 rounded-lg border border-gray-600">
            <h3 className="font-bold text-lg text-blue-300 mb-2">
              Interviewer:
            </h3>
            <p className="text-xl text-white">
              {currentQuestion?.question || statusMessage}
            </p>
          </div>

          {/* Conditional Text Box for ALGORITHMS questions (Half Page Height) */}
          {isAlgoQuestion && interviewStatus === "running" && (
            <div className="p-4 bg-gray-900/50 rounded-lg border border-blue-500">
              <h3 className="font-bold text-lg text-blue-300 mb-2">
                Your Code/Psudo Code/ Algorithm Answer:
              </h3>
              <textarea
                // Set height to roughly half the panel size (h-64 is 256px, h-full is too much)
                className="w-full h-190 p-3 bg-gray-800 text-green-300 border border-gray-700 rounded-lg font-mono focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                placeholder="Type your algorithm or detailed answer here..."
                value={textAreaAnswer}
                onChange={(e) => setTextAreaAnswer(e.target.value)}
              />
              <ControlButton
                onClick={handleTextAnswerSubmit}
                className="bg-blue-600 hover:bg-blue-500 w-full mt-3"
                disabled={!textAreaAnswer.trim()}
              >
                <FileText size={20} className="mr-2" /> Submit Answer
              </ControlButton>
            </div>
          )}

          {/* Live Transcript area (Visible only for verbal questions) */}
          {/* {!isAlgoQuestion && (
            <div className="p-4 bg-gray-900/50 rounded-lg border border-gray-700 max-h-[300px] overflow-y-auto font-mono text-sm">
              <h3 className="font-bold text-lg text-gray-300 mb-2">
                Live Transcript:
              </h3>
              <p
                className={`text-gray-200 ${
                  listening ? "animate-pulse text-green-400" : "text-gray-400"
                }`}
              >
                {transcript ||
                  (listening ? "Listening..." : "Speak by toggling the mic.")}
              </p>
            </div>
          )} */}

          {error && (
            <div className="p-3 bg-red-600/20 text-red-300 rounded-lg text-sm font-medium">
              {error}
            </div>
          )}
        </div>

        {/* Control Bar */}
        <div className="flex flex-col items-center pt-6 border-t border-gray-700">
          {interviewStatus === "idle" && (
            <ControlButton
              onClick={handleStartInterview}
              className="bg-green-600 hover:bg-green-500 w-full"
              disabled={
                totalQuestions === 0 || !browserSupportsSpeechRecognition
              }
            >
              <Play size={20} className="mr-2" /> Start Interview
            </ControlButton>
          )}

          {interviewStatus === "running" || interviewStatus === "submitting" ? (
            <>
              {/* Mic controls shown ONLY for non-algorithm questions */}
              {!isAlgoQuestion && (
                <div className="flex space-x-6 mb-4">
                  <ControlButton
                    onClick={handleMicToggle}
                    className={
                      isMicOn
                        ? "bg-red-600 hover:bg-red-500" // Mic is ON, press to stop (OFF)
                        : "bg-gray-600 hover:bg-gray-700" // Mic is OFF, press to start (ON)
                    }
                    disabled={
                      isInterviewerSpeaking ||
                      interviewStatus === "submitting" ||
                      !browserSupportsSpeechRecognition
                    }
                  >
                    {isMicOn ? <Mic size={24} /> : <MicOff size={24} />}
                  </ControlButton>

                  <ControlButton
                    className="bg-gray-600 hover:bg-gray-700"
                    disabled={true} // Camera always off for this phase
                  >
                    <VideoOff size={24} />
                  </ControlButton>
                </div>
              )}

              {/* Spacer ensures End Interview button remains at the bottom when mic buttons are hidden. */}
              {isAlgoQuestion && <div className="mb-4" />}

              <ControlButton
                onClick={() => handleEndInterview(true)}
                className="bg-red-600 hover:bg-red-500 w-full"
                disabled={interviewStatus === "submitting"}
              >
                {interviewStatus === "submitting" ? (
                  <>
                    <Loader2 className="animate-spin w-5 h-5 mr-2" /> Submitting
                    Report...
                  </>
                ) : (
                  <>
                    <PhoneOff size={20} className="mr-2" /> End Interview
                  </>
                )}
              </ControlButton>
            </>
          ) : null}

          {interviewStatus === "finished" && (
            <div className="text-center w-full">
              <p className="text-xl font-bold text-green-400 mb-4">
                Interview Ended.
              </p>
              <ControlButton
                onClick={() => navigate(`/report/${reportId}`)}
                className="bg-blue-600 hover:bg-blue-500 w-full"
              >
                <FileText size={20} className="mr-2" /> View Final Report
              </ControlButton>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InterviewRoom;

// // frontend/src/pages/InterviewRoom.jsx
// import React, { useState, useEffect, useRef } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import SpeechRecognition, {
//   useSpeechRecognition,
// } from "react-speech-recognition";
// import {
//   Mic,
//   MicOff,
//   PhoneOff,
//   Play,
//   Volume2,
//   Video,
//   VideoOff,
//   Loader2,
//   FileText,
// } from "lucide-react";
// // RESTORED: Importing real service function from your platform
// import { endInterview } from "../services/interviewService";

// // HARDCODED CANDIDATE ID (FOR DEMO ONLY)
// const CANDIDATE_ID = "6912c711cabf1fe8c3bd941c";
// const CANDIDATE_NAME = "Candidate Demo";

// // --- Components (Inline) ---
// const ControlButton = ({ onClick, className, children, disabled = false }) => (
//   <button
//     onClick={onClick}
//     className={`p-3 rounded-full text-white transition-all duration-200 shadow-xl ${className} ${
//       disabled ? "bg-gray-500 cursor-not-allowed opacity-70" : ""
//     }`}
//     disabled={disabled}
//   >
//     {children}
//   </button>
// );

// const ParticipantTile = ({
//   name,
//   isMuted,
//   isCameraOff,
//   isSpeaking,
//   avatarUrl,
// }) => (
//   <div className="relative w-full h-full bg-gray-900 rounded-xl flex items-center justify-center overflow-hidden border-2 border-gray-700">
//     {isSpeaking && (
//       <div className="absolute inset-0 border-4 border-blue-500 rounded-xl ring-4 ring-blue-500 ring-opacity-50 animate-pulse transition-all duration-100" />
//     )}
//     <div className="flex flex-col items-center justify-center">
//       {isCameraOff ? (
//         <div className="w-32 h-32 bg-gray-700 rounded-full flex items-center justify-center">
//           <span className="text-5xl font-bold text-white">
//             {name.charAt(0)}
//           </span>
//         </div>
//       ) : (
//         <img
//           src={avatarUrl}
//           alt={`${name} avatar`}
//           className="w-48 h-48 object-cover rounded-full shadow-lg border-4 border-gray-600"
//           onError={(e) => {
//             // FIX: Added image fallback handler
//             e.target.onerror = null;
//             e.target.src =
//               "https://placehold.co/192x192/4b5563/ffffff?text=AVATAR";
//           }}
//         />
//       )}
//       {isSpeaking && (
//         <Volume2 className="w-8 h-8 text-blue-400 mt-6 animate-pulse" />
//       )}
//     </div>
//     <div className="absolute bottom-5 left-6 p-2 px-4 bg-black bg-opacity-70 rounded-lg shadow-md">
//       <span className="text-lg font-medium text-white">{name}</span>
//       {isMuted && <MicOff className="w-5 h-5 text-red-500 ml-2 inline-block" />}
//     </div>
//   </div>
// );

// // --- Time Limit Helper ---
// const getCategoryTimeLimit = (category) => {
//   const rapidFire = ["DBMS", "OS", "CN", "OOP"];
//   // Time limit set to 45 seconds
//   return rapidFire.includes(category) ? 20 : 0;
// };

// // ================================
// // MAIN INTERVIEW COMPONENT
// // ================================
// const InterviewRoom = () => {
//   const location = useLocation();
//   const navigate = useNavigate();

//   const initialReportData = location.state?.reportStructure || {
//     DBMS: [],
//     OS: [],
//     CN: [],
//     OOP: [],
//     "Resume based question": [],
//     ALGORITHM: [],
//   };
//   const initialReportId = location.state?.reportId;

//   // Speech Recognition Hook
//   const {
//     transcript,
//     resetTranscript,
//     browserSupportsSpeechRecognition,
//     listening,
//   } = useSpeechRecognition();

//   // States
//   const [reportData, setReportData] = useState(initialReportData);
//   const [reportId, setReportId] = useState(initialReportId);
//   const [isMicOn, setIsMicOn] = useState(false);
//   const [isInterviewerSpeaking, setIsInterviewerSpeaking] = useState(false);
//   const [interviewStatus, setInterviewStatus] = useState("idle");
//   const [questionIndex, setQuestionIndex] = useState(-1);
//   const [statusMessage, setStatusMessage] = useState("Click Start to begin.");
//   const [error, setError] = useState(null);
//   const [elapsedTime, setElapsedTime] = useState(0);

//   // TIMER STATES
//   const [questionTimeLimit, setQuestionTimeLimit] = useState(0);
//   const [currentQuestionTime, setCurrentQuestionTime] = useState(0);

//   // FIX: State to force timer reset/restart when question changes
//   const [timerTrigger, setTimerTrigger] = useState(0);

//   const questionTimerRef = useRef(null);
//   const [textAreaAnswer, setTextAreaAnswer] = useState("");

//   const voicesRef = useRef([]);
//   const questionIndexRef = useRef(questionIndex);
//   const timerRef = useRef(null);

//   // Build question list
//   const questionKeys = Object.keys(reportData).filter((key) =>
//     Array.isArray(reportData[key])
//   );
//   const allQuestions = questionKeys.flatMap((key) =>
//     reportData[key].map((q) => ({ ...q, category: key }))
//   );
//   const totalQuestions = allQuestions.length;
//   const currentQuestion = allQuestions[questionIndex];

//   const isAlgoQuestion = currentQuestion?.category === "ALGORITHM";

//   useEffect(() => {
//     questionIndexRef.current = questionIndex;
//   }, [questionIndex]);

//   // Total Interview Timer
//   useEffect(() => {
//     if (interviewStatus === "running") {
//       timerRef.current = setInterval(() => setElapsedTime((t) => t + 1), 1000);
//     } else {
//       clearInterval(timerRef.current);
//     }
//     return () => clearInterval(timerRef.current);
//   }, [interviewStatus]);

//   // ================================
//   // CORE: QUESTION TIMER useEffect (Guarantees Reset via timerTrigger)
//   // ================================
//   useEffect(() => {
//     // 1. Always clear the old timer first (the reset mechanism)
//     clearInterval(questionTimerRef.current);

//     if (questionTimeLimit > 0 && interviewStatus === "running") {
//       setCurrentQuestionTime(questionTimeLimit);

//       // 2. Start recording immediately
//       startListening(true);

//       questionTimerRef.current = setInterval(() => {
//         setCurrentQuestionTime((prev) => {
//           if (prev <= 1) {
//             clearInterval(questionTimerRef.current);
//             // 3. Auto-submit and move to next question
//             setTimeout(() => handleTimeUpSubmit(), 600);
//             return 0;
//           }
//           return prev - 1;
//         });
//       }, 1000);
//     } else {
//       // 4. Ensure display shows 0 when there's no limit
//       setCurrentQuestionTime(0);
//     }

//     return () => clearInterval(questionTimerRef.current);
//   }, [timerTrigger, interviewStatus]); // DEPENDS ON timerTrigger

//   const formatTime = (s) =>
//     `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(
//       2,
//       "0"
//     )}`;

//   // ================================
//   // TTS Helpers
//   // ================================
//   const speakQuestion = (text) =>
//     new Promise((resolve) => {
//       if (!window.speechSynthesis) return resolve();

//       window.speechSynthesis.cancel();
//       const utter = new SpeechSynthesisUtterance(text);

//       voicesRef.current = window.speechSynthesis.getVoices();
//       utter.voice =
//         voicesRef.current.find(
//           (v) => v.lang.includes("en-US") && v.name.includes("Google")
//         ) || voicesRef.current.find((v) => v.lang.includes("en-US"));

//       utter.rate = 0.95;

//       utter.onstart = () => setIsInterviewerSpeaking(true);
//       utter.onend = () => {
//         setIsInterviewerSpeaking(false);
//         resolve();
//       };
//       utter.onerror = (e) => {
//         if (e.error !== "interrupted") console.error("TTS Error:", e);
//         setIsInterviewerSpeaking(false);
//         resolve();
//       };

//       window.speechSynthesis.speak(utter);
//     });

//   // ========== MIC FUNCTIONS ==========
//   const startListening = (auto = false) => {
//     if (isAlgoQuestion || listening) return;
//     if (!auto && questionTimeLimit > 0) return;

//     try {
//       SpeechRecognition.startListening({
//         continuous: true,
//         language: "en-US",
//       });
//       resetTranscript();
//       setIsMicOn(true);
//       setStatusMessage("Listening...");
//       setError(null);
//     } catch (err) {
//       setError("Microphone failed to start.");
//     }
//   };

//   const stopListening = () => {
//     if (listening) SpeechRecognition.stopListening();
//     setIsMicOn(false);
//     clearInterval(questionTimerRef.current);
//   };

//   // Cleanup
//   useEffect(() => {
//     return () => {
//       window.speechSynthesis.cancel();
//       SpeechRecognition.abortListening();
//       clearInterval(timerRef.current);
//       clearInterval(questionTimerRef.current);
//     };
//   }, []);

//   // ========== Answer Logic ==========

//   const updateReportWithAnswer = (text) => {
//     if (!currentQuestion) return;
//     const { category, questionId } = currentQuestion;

//     setReportData((prev) => {
//       const clone = { ...prev };
//       const arr = clone[category];
//       const idx = arr.findIndex((q) => q.questionId === questionId);
//       if (idx !== -1) arr[idx] = { ...arr[idx], answer: text };
//       return clone;
//     });
//   };

//   const handleAnswerSubmit = (finalAnswer) => {
//     stopListening();

//     const answerText = finalAnswer.trim() || "(No response)";
//     updateReportWithAnswer(answerText);

//     setStatusMessage("Answer recorded.");
//     resetTranscript();
//     setTextAreaAnswer("");

//     setTimeout(askNextQuestion, 2000);
//   };

//   const handleTimeUpSubmit = () => {
//     handleAnswerSubmit(transcript);
//     setStatusMessage("Time's up! Answer submitted.");
//   };

//   const handleTextAnswerSubmit = () => {
//     if (isAlgoQuestion) handleAnswerSubmit(textAreaAnswer);
//   };

//   // ========== Ask Next Question (Triggers Timer Reset) ==========
//   const askNextQuestion = () => {
//     if (questionIndexRef.current + 1 >= totalQuestions) {
//       handleEndInterview(false);
//       return;
//     }

//     const nextIndex = questionIndexRef.current + 1;
//     const nextQ = allQuestions[nextIndex];
//     const timeLimit = getCategoryTimeLimit(nextQ.category);

//     // 1. Force timer cleanup/restart by changing the trigger state
//     setTimerTrigger((t) => t + 1);
//     // 2. Set the new time limit (used by the timer useEffect)
//     setQuestionTimeLimit(timeLimit);

//     setStatusMessage("Interviewer is speaking...");

//     speakQuestion(nextQ.question).then(() => {
//       // 3. Update the question index AFTER speaking finishes
//       setQuestionIndex(nextIndex);

//       if (nextQ.category === "ALGORITHM") {
//         stopListening();
//         setStatusMessage("Type your algorithm answer.");
//       } else if (timeLimit > 0) {
//         // Timed: Timer/Mic started by the dedicated useEffect
//         setStatusMessage(
//           `You have ${timeLimit} seconds. Recording has started.`
//         );
//       } else {
//         // Untimed Verbal (Resume): Manual mic control
//         stopListening();
//         setStatusMessage("Click mic to answer.");
//       }
//     });
//   };

//   // ========== Start Interview ==========
//   const handleStartInterview = async () => {
//     if (interviewStatus === "running") return;

//     setInterviewStatus("running");
//     setElapsedTime(0);
//     setQuestionIndex(-1);
//     setQuestionTimeLimit(0); // Initial reset

//     const greeting =
//       "Welcome to the interview. Fundamental questions will have 45-second time limits. Coding questions require typed answers. Let's begin.";

//     setStatusMessage("Interviewer speaking...");
//     await speakQuestion(greeting);

//     askNextQuestion();
//   };

//   // ========== Mic Toggle (Only for Untimed Questions) ==========
//   const handleMicToggle = () => {
//     if (
//       interviewStatus !== "running" ||
//       isInterviewerSpeaking ||
//       isAlgoQuestion ||
//       questionTimeLimit > 0 // Disabled for timed questions
//     )
//       return;

//     if (isMicOn) {
//       stopListening();
//       handleAnswerSubmit(transcript);
//     } else {
//       startListening();
//     }
//   };

//   // ========== End Interview ==========
//   const handleEndInterview = async () => {
//     setInterviewStatus("submitting");
//     stopListening();
//     window.speechSynthesis.cancel();

//     const payload = {
//       reportId,
//       candidateId: CANDIDATE_ID,
//       reportStructure: reportData,
//     };

//     try {
//       // Use the actual endInterview function
//       await endInterview(payload);
//       console.log("Interview submitted successfully.", payload);
//       navigate(`/report/${reportId}`, { replace: true });
//     } catch (err) {
//       setError("Submission failed.");
//       setInterviewStatus("idle");
//     }
//   };

//   if (!initialReportId || totalQuestions === 0) {
//     return (
//       <div className="min-h-screen flex items-center justify-center text-white">
//         <p>Error: Missing interview data.</p>
//       </div>
//     );
//   }

//   // ===================================
//   // UI RENDER
//   // ===================================
//   return (
//     <div className="flex h-screen w-screen bg-gray-900 text-white font-sans min-w-[1280px]">
//       {/* Left Panel: Video Tiles */}
//       <div className="w-2/3 h-full p-6 flex flex-col gap-6">
//         <div className="h-1/2">
//           <ParticipantTile
//             name={CANDIDATE_NAME}
//             isMuted={!isMicOn || isAlgoQuestion}
//             isCameraOff={true}
//             isSpeaking={listening && !isAlgoQuestion}
//             avatarUrl="https://placehold.co/500x500/27272a/ffffff?text=CANDIDATE"
//           />
//         </div>
//         <div className="h-1/2">
//           <ParticipantTile
//             name="AI Interviewer"
//             isMuted={false}
//             isCameraOff={true}
//             isSpeaking={isInterviewerSpeaking}
//             avatarUrl="https://placehold.co/500x500/27272a/ffffff?text=AI+INTERVIEWER"
//           />
//         </div>
//       </div>

//       {/* Right Panel: Controls and Transcript */}
//       <div className="w-1/3 h-full bg-gray-800 border-l border-gray-700 p-6 flex flex-col justify-between">
//         {/* Top Info */}
//         <div className="flex justify-between items-center pb-6 border-b border-gray-700">
//           <div className="text-2xl font-bold text-blue-400">
//             {currentQuestion
//               ? `Q ${questionIndex + 1} of ${totalQuestions}`
//               : "Ready"}
//           </div>
//           {/* TIMER DISPLAY BLOCK */}
//           <div className="flex flex-col items-end">
//             <p className="text-lg text-gray-400">
//               {questionTimeLimit > 0 ? "Time Remaining" : "Total Time"}
//             </p>
//             <span
//               className={`text-2xl font-mono font-bold ${
//                 questionTimeLimit > 0 && currentQuestionTime <= 10
//                   ? "text-red-400 animate-pulse"
//                   : "text-white"
//               }`}
//             >
//               {questionTimeLimit > 0
//                 ? formatTime(currentQuestionTime) // Show remaining time
//                 : formatTime(elapsedTime)}
//             </span>
//           </div>
//         </div>

//         {/* Question & Answer Area */}
//         <div className="flex-1 py-6 overflow-y-auto space-y-6">
//           <div className="p-4 bg-gray-700/50 rounded-lg border border-gray-600">
//             <h3 className="font-bold text-lg text-blue-300 mb-2">
//               Interviewer:
//             </h3>
//             <p className="text-xl text-white">
//               {currentQuestion?.question || statusMessage}
//             </p>
//           </div>

//           {/* Conditional Text Box for ALGORITHMS questions */}
//           {isAlgoQuestion && interviewStatus === "running" && (
//             <div className="p-4 bg-gray-900/50 rounded-lg border border-blue-500">
//               <h3 className="font-bold text-lg text-blue-300 mb-2">
//                 Your Code/Psudo Code/ Algorithm Answer:
//               </h3>
//               <textarea
//                 className="w-full h-190 p-3 bg-gray-800 text-green-300 border border-gray-700 rounded-lg font-mono focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
//                 placeholder="Type your algorithm or detailed answer here..."
//                 value={textAreaAnswer}
//                 onChange={(e) => setTextAreaAnswer(e.target.value)}
//               />
//               <ControlButton
//                 onClick={handleTextAnswerSubmit}
//                 className="bg-blue-600 hover:bg-blue-500 w-full mt-3"
//                 disabled={!textAreaAnswer.trim()}
//               >
//                 <FileText size={20} className="mr-2" /> Submit Answer
//               </ControlButton>
//             </div>
//           )}

//           {/* Live Transcript area (Visible only for verbal questions) */}
//           {!isAlgoQuestion && (
//             <div className="p-4 bg-gray-900/50 rounded-lg border border-gray-700 max-h-[300px] overflow-y-auto font-mono text-sm">
//               <h3 className="font-bold text-lg text-gray-300 mb-2">
//                 Live Transcript:
//               </h3>
//               <p
//                 className={`text-gray-200 ${
//                   listening ? "animate-pulse text-green-400" : "text-gray-400"
//                 }`}
//               >
//                 {transcript ||
//                   (listening ? "Listening..." : "Speak by toggling the mic.")}
//               </p>
//             </div>
//           )}

//           {error && (
//             <div className="p-3 bg-red-600/20 text-red-300 rounded-lg text-sm font-medium">
//               {error}
//             </div>
//           )}
//         </div>

//         {/* Control Bar */}
//         <div className="flex flex-col items-center pt-6 border-t border-gray-700">
//           {interviewStatus === "idle" && (
//             <ControlButton
//               onClick={handleStartInterview}
//               className="bg-green-600 hover:bg-green-500 w-full"
//               disabled={
//                 totalQuestions === 0 || !browserSupportsSpeechRecognition
//               }
//             >
//               <Play size={20} className="mr-2" /> Start Interview
//             </ControlButton>
//           )}

//           {interviewStatus === "running" || interviewStatus === "submitting" ? (
//             <>
//               {/* Mic controls shown ONLY for non-algorithm questions */}
//               {!isAlgoQuestion && (
//                 <div className="flex space-x-6 mb-4">
//                   <ControlButton
//                     onClick={handleMicToggle}
//                     className={
//                       isMicOn
//                         ? "bg-red-600 hover:bg-red-500"
//                         : "bg-gray-600 hover:bg-gray-700"
//                     }
//                     disabled={
//                       isInterviewerSpeaking ||
//                       interviewStatus === "submitting" ||
//                       !browserSupportsSpeechRecognition ||
//                       questionTimeLimit > 0 // Disabled for timed questions
//                     }
//                   >
//                     {isMicOn ? <Mic size={24} /> : <MicOff size={24} />}
//                   </ControlButton>

//                   <ControlButton
//                     className="bg-gray-600 hover:bg-gray-700"
//                     disabled={true}
//                   >
//                     <VideoOff size={24} />
//                   </ControlButton>
//                 </div>
//               )}

//               {isAlgoQuestion && <div className="mb-4" />}

//               <ControlButton
//                 onClick={() => handleEndInterview()}
//                 className="bg-red-600 hover:bg-red-500 w-full"
//                 disabled={interviewStatus === "submitting"}
//               >
//                 {interviewStatus === "submitting" ? (
//                   <>
//                     <Loader2 className="animate-spin w-5 h-5 mr-2" /> Submitting
//                     Report...
//                   </>
//                 ) : (
//                   <>
//                     <PhoneOff size={20} className="mr-2" /> End Interview
//                   </>
//                 )}
//               </ControlButton>
//             </>
//           ) : null}

//           {interviewStatus === "finished" && (
//             <div className="text-center w-full">
//               <p className="text-xl font-bold text-green-400 mb-4">
//                 Interview Ended.
//               </p>
//               <ControlButton
//                 onClick={() => navigate(`/report/${reportId}`)}
//                 className="bg-blue-600 hover:bg-blue-500 w-full"
//               >
//                 <FileText size={20} className="mr-2" /> View Final Report
//               </ControlButton>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default InterviewRoom;
