// components/Model.jsx
const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

export const generateContent = async (prompt) => {
	const result = await model.generateContent(prompt);
	console.log(result.response.text());
	return result.response.text; 
};
