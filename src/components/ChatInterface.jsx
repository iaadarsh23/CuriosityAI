import React, { useState, useRef, useEffect } from "react";
import { motion as Motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { IoArrowBack } from "react-icons/io5";
import { useNavigate, useLocation } from "react-router-dom";
import { PlaceholdersAndVanishInput } from "./ui/placeholders-and-vanish-input";
import { WavyBackground } from "./ui/wavy-background";
import { generateContentFromGemini } from "../data/handleApi";
import { Loader } from "./ui/loading-screen";

const formatMessage = (text) => {
	// Split into code blocks and regular text
	const codeBlockRegex = /^(```[\w-]*\n[\s\S]*?\n```|```.+?```)/gm;
	const parts = text.split(codeBlockRegex);

	const formattedParts = parts.map((part, index) => {
		if (part.startsWith("```")) {
			// Extract code
			const lines = part.split("\n");
			const code = lines.slice(1, -1).join("\n");

			return (
				<pre
					key={index}
					className="w-full rounded-md bg-[#1a1a1a] p-4 my-2 overflow-x-auto"
				>
					<code className="text-sm font-mono text-white/90">{code}</code>
				</pre>
			);
		}

		// Format headers, bullet points, and other markdown
		const formattedText = part
			// Format headers
			.replace(
				/### (.*?)\n/g,
				(_, header) =>
					`<h3 class="text-xl font-semibold text-white/95 mt-6 mb-3">${header}</h3>\n`
			)
			// Format bullet points
			.replace(
				/• (.*?)(?:\n|$)/g,
				(_, content) =>
					`<div class="flex items-start space-x-2 my-1.5">
					<span class="text-white/80 mt-1">•</span>
					<span class="text-white/90">${content}</span>
				</div>\n`
			)
			// Format bold text
			.replace(
				/\*\*(.*?)\*\*/g,
				'<strong class="text-white font-semibold">$1</strong>'
			)
			// Format italic text
			.replace(/_(.*?)_/g, '<em class="text-white/90 italic">$1</em>');

		return (
			<div
				key={index}
				className="space-y-2 text-white/85"
				dangerouslySetInnerHTML={{ __html: formattedText }}
			/>
		);
	});

	return <>{formattedParts}</>;
};

const ChatMessage = ({ message, sender }) => {
	const isUser = sender === "user";
	return (
		<Motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.3, ease: "easeOut" }}
			className={cn("flex w-full", isUser ? "justify-end" : "justify-start")}
		>
			<div
				className={cn(
					"max-w-[80%] rounded-2xl px-6 py-4 mb-3",
					isUser
						? "bg-gradient-to-r from-[#2a2a2a]/90 to-[#1a1a1a]/90 text-white/95 shadow-[0_8px_16px_rgba(0,0,0,0.5)] backdrop-blur-md border border-white/20"
						: "bg-gradient-to-r from-[#000000]/80 via-[#1a1a1a]/80 to-[#000000]/80 text-white/95 shadow-[0_8px_16px_rgba(0,0,0,0.5)] backdrop-blur-md border border-white/10"
				)}
				style={{
					textShadow: "0 1px 2px rgba(0,0,0,0.3)",
				}}
			>
				{formatMessage(message.text)}
			</div>
		</Motion.div>
	);
};

const ChatInterface = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const initialMessage = location.state?.initialMessage;
	const [messages, setMessages] = useState(
		initialMessage ? [{ text: initialMessage, sender: "user" }] : []
	);
	const [isLoading, setIsLoading] = useState(false);
	const messagesEndRef = useRef(null);
	const [inputValue, setInputValue] = useState("");

	const scrollToBottom = () => {
		messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
	};

	useEffect(() => {
		scrollToBottom();
	}, [messages]);

	useEffect(() => {
		// If there's an initial message, generate a response automatically
		if (initialMessage && messages.length === 1) {
			handleBotResponse(initialMessage);
		}
	}, []);

	const handleBotResponse = async (message) => {
		setIsLoading(true);
		try {
			const response = await generateContentFromGemini(message);
			const botMessage = { text: response, sender: "bot" };
			setMessages((prev) => [...prev, botMessage]);
		} catch (error) {
			console.error("Error:", error);
			const errorMessage = {
				text: "Sorry, I encountered an error. Please try again.",
				sender: "bot",
			};
			setMessages((prev) => [...prev, errorMessage]);
		} finally {
			setIsLoading(false);
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!inputValue.trim()) return;

		const userMessage = { text: inputValue, sender: "user" };
		setMessages((prev) => [...prev, userMessage]);
		setInputValue("");

		handleBotResponse(inputValue);
	};

	return (
		<WavyBackground
			className="w-full h-full"
			containerClassName="w-full h-full"
			colors={["#38bdf8", "#818cf8", "#c084fc", "#e879f9", "#22d3ee"]}
			blur={6}
			speed="slow"
			waveWidth={120}
			backgroundFill="black"
			waveOpacity={0.6}
		>
			{/* Back Button with improved hover effect */}
			<Motion.button
				onClick={() => navigate(-1)}
				initial={{ opacity: 0, x: 20 }}
				animate={{ opacity: 1, x: 0 }}
				whileHover={{ scale: 1.05, x: -5 }}
				transition={{ duration: 0.2 }}
				className="fixed top-6 right-6 z-[9999] flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl border border-white/10 text-white/90 hover:text-white hover:from-white/15 hover:to-white/10 hover:border-white/20 transition-all shadow-[0_0_15px_rgba(255,255,255,0.1)]"
			>
				<span className="text-sm font-medium">Return</span>
				<IoArrowBack className="w-4 h-4" />
			</Motion.button>

			{/* Logo */}
			<Motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, delay: 0.3 }}
				className="absolute top-6 left-8 z-[9999]"
			>
				<style jsx global>{`
					@import url("https://fonts.googleapis.com/css2?family=Cinzel:wght@600&display=swap");

					.premium-gradient {
						background: linear-gradient(
							to right,
							#ffffff 0%,
							#e0e0e0 20%,
							#ffffff 40%,
							#c0c0c0 60%,
							#ffffff 80%,
							#e0e0e0 100%
						);
						background-size: 200% auto;
						-webkit-background-clip: text;
						background-clip: text;
						animation: shine 8s linear infinite;
						text-shadow: 0 0 10px rgba(255, 255, 255, 0.1),
							0 0 20px rgba(255, 255, 255, 0.1);
					}

					@keyframes shine {
						to {
							background-position: 200% center;
						}
					}

					@keyframes rgbPulse {
						0% {
							background: #ff0000;
							box-shadow: 0 0 8px #ff0000;
						}
						16.666% {
							background: #ff00ff;
							box-shadow: 0 0 8px #ff00ff;
						}
						33.333% {
							background: #0000ff;
							box-shadow: 0 0 8px #0000ff;
						}
						50% {
							background: #00ffff;
							box-shadow: 0 0 8px #00ffff;
						}
						66.666% {
							background: #00ff00;
							box-shadow: 0 0 8px #00ff00;
						}
						83.333% {
							background: #ffff00;
							box-shadow: 0 0 8px #ffff00;
						}
						100% {
							background: #ff0000;
							box-shadow: 0 0 8px #ff0000;
						}
					}

					.rgb-dot {
						animation: rgbPulse 6s linear infinite;
						opacity: 0.9;
					}
				`}</style>
				<div className="flex items-center gap-2">
					<div
						className="text-2xl premium-gradient text-transparent"
						style={{ fontFamily: "'Cinzel', serif", fontWeight: 600 }}
					>
						Curiosity
					</div>
					<div className="w-1.5 h-1.5 rounded-full rgb-dot"></div>
				</div>
			</Motion.div>

			<div className="fixed inset-0 flex flex-col pt-8">
				{/* Messages Container with improved scrollbar and spacing */}
				<div className="w-full max-w-4xl mx-auto px-4 h-[calc(100vh-140px)]">
					<div className="h-full flex flex-col">
						<div
							className="flex-1 overflow-y-auto space-y-4 pr-4"
							style={{
								scrollbarWidth: "none",
							}}
						>
							{messages.map((message, index) => (
								<ChatMessage
									key={index}
									message={message}
									sender={message.sender}
								/>
							))}

							{isLoading && (
								<Motion.div
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									className="flex items-start mt-4 ml-2"
								>
									<div className="rounded-2xl px-6 py-5 bg-gradient-to-r from-[#000000]/80 via-[#1a1a1a]/80 to-[#000000]/80 shadow-[0_8px_16px_rgba(0,0,0,0.5)] backdrop-blur-md border border-white/10">
										<div className="flex items-center">
											<Loader color="blue-purple" />
											<span className="ml-3 text-white/70 text-sm">
												Thinking...
											</span>
										</div>
									</div>
								</Motion.div>
							)}
							<div ref={messagesEndRef} />
						</div>
					</div>
				</div>

				{/* Chat Input */}
				<div className="w-full max-w-4xl mx-auto px-4 pb-6 pt-2">
					<PlaceholdersAndVanishInput
						value={inputValue}
						onChange={(e) => setInputValue(e.target.value)}
						onSubmit={handleSubmit}
						isDisabled={isLoading}
					/>
				</div>
			</div>
		</WavyBackground>
	);
};

export default ChatInterface;
