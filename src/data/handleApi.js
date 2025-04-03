import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = import.meta.env.VITE_APP_GEMINI_API_KEY?.trim();
console.log("API Key length:", apiKey?.length); // Debug log

if (!apiKey) {
	throw new Error(
		"VITE_APP_GEMINI_API_KEY is not defined in environment variables"
	);
}

const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

export const generateContentFromGemini = async (prompt) => {
	try {
		if (!prompt?.trim()) {
			throw new Error("Empty prompt provided");
		}

		const result = await model.generateContent(prompt);
		const response = await result.response;
		return response.text();
	} catch (error) {
		console.error("Detailed error:", {
			message: error.message,
			status: error.status,
			details: error.details,
		});
		throw error;
	}
};
