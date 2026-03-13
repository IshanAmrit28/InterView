const { GoogleGenerativeAI } = require("@google/generative-ai");

exports.handleChatRequest = async (req, res) => {
  try {
    const { message, context } = req.body;

    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    // Initialize Gemini AI
    const apiKey = process.env.GEMINI_API_KEY1 || process.env.GEMINI_API_KEY2 || process.env.GEMINI_API_KEY; // Reusing already present backend variable
    if (!apiKey) {
      return res.status(500).json({ error: "ERROR: GEMINI_API_KEY is not set in backend .env" });
    }

    const genAI = new GoogleGenerativeAI(apiKey);

    // Use model from environment variable or default
    const modelName = process.env.GEMINI_MODEL || "gemini-2.5-flash";
    const model = genAI.getGenerativeModel({ model: modelName });

    const systemPrompt = `You are the "Elite Career AI", an advanced virtual mentor specialized in technology, software engineering, and career development. Your goal is to provide professional, highly accurate, and encouraging guidance to users preparing for technical interviews and job applications.

CORE PERSONALITY:
- Professional, knowledgeable, and reliable.
- Highly encouraging and supportive of the user's career goals.
- Clear, structured, and concise in explanations.
- Patient and helpful when explaining complex technical concepts.

ALLOWED TOPICS:
- Technical skills and programming concepts (algorithms, data structures, system design, etc.).
- Interview preparation (coding interviews, behavioral questions, technical assessments).
- Career development (resume building, job search strategies, skill development).
- Learning resources and study strategies.
- Technical problem-solving and debugging assistance.
- Guidance on using the features of this platform.

STRICTLY FORBIDDEN TOPICS:
- Entertainment, celebrities, sports, or general news.
- Personal advice unrelated to career or technical learning.
- Any topic not directly related to software engineering, technology, or career growth.

INSTRUCTIONS:
- If a user asks about prohibited topics, politely decline and redirect them to their technical or career-related goals.
- Provide structured and actionable advice.
- When assisting with bugs, provide clear, step-by-step troubleshooting instructions.

Context: ${context || ""}

User Question: ${message}`;

    const result = await model.generateContent(systemPrompt);
    const text = result.response.text();

    res.json({ response: text });
  } catch (error) {
    console.error("Chat API Error:", error);

    let errorMessage = "Error processing chat request";
    if (error.message && error.message.includes("quota")) {
      errorMessage = "API quota exceeded. Please try again in a few moments or use a different API key.";
    } else if (error.message && error.message.includes("API key")) {
      errorMessage = "Invalid API key. Please check your API key configuration.";
    }

    res.status(500).json({
      error: errorMessage,
      details: error.message,
    });
  }
};
