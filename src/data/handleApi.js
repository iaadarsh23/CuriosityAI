const apiKey = import.meta.env.VITE_APP_GEMINI_API_KEY?.trim();

console.log("API Key length:", apiKey?.length);

if (!apiKey) {
	console.error("Environment variables:", import.meta.env);
	throw new Error(
		"VITE_APP_GEMINI_API_KEY is not defined in environment variables"
	);
}

export const generateContentFromGemini = async (prompt) => {
	try {
		if (!prompt?.trim()) {
			throw new Error("Empty prompt provided");
		}

		const enhancedPrompt = `${prompt}

When providing explanations or documentation, please format them in a clean, modern style:

1. Use clean section headers with a newline after each header
2. For code blocks, use proper markdown with language identifiers:
\`\`\`cpp
// Code here
\`\`\`
3. For explanations, use clear paragraphs with proper spacing
4. Use bullet points with "•" instead of stars or asterisks
5. Highlight important terms using bold (**term**) or italics (_term_)
6. If providing a list of features/improvements, format them as:

### Key Features
• Feature 1: Description
• Feature 2: Description

### Technical Details
• Detail 1: Explanation
• Detail 2: Explanation`;

		const response = await fetch(
			`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					contents: [
						{
							parts: [
								{
									text: enhancedPrompt,
								},
							],
						},
					],
				}),
			}
		);

		if (!response.ok) {
			const errorData = await response.json();
			console.error("API Error:", errorData);
			throw new Error(errorData.error?.message || "Failed to generate content");
		}

		const data = await response.json();
		return data.candidates[0].content.parts[0].text;
	} catch (error) {
		console.error("Detailed error:", {
			message: error.message,
			status: error.status,
			details: error.details,
		});
		throw error;
	}
};
