"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamp-container";
import { PlaceholdersAndVanishInput } from "./ui/placeholders-and-vanish-input";
import { cn } from "@/lib/utils";
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { SparklesCore } from "./ui/sparkles";

const placeholders = [
	"Can you explain this React code and suggest improvements?",
	"What's the key argument in this legal case?",
	"How do I create an effective study plan for exams?",
	"Help me debug this SQL query performance issue",
	"Write a professional email to decline a client meeting",
	"Explain this medical research paper in simple terms",
	"How can I optimize my marketing strategy?",
	"Help me structure my thesis proposal",
];

function getTime() {
	const now = new Date();
	const hours = now.getHours();
	let TimeOfTheDay = "";
	if (hours > 5 && hours < 12) {
		TimeOfTheDay = "Morning";
	} else if (hours >= 12 && hours < 17) {
		TimeOfTheDay = "Afternoon";
	} else if (hours >= 17 && hours < 21) {
		TimeOfTheDay = "Evening";
	} else {
		TimeOfTheDay = "Night";
	}
	return TimeOfTheDay;
}

const ChatBot = () => {
	const navigate = useNavigate();
	const currentTime = getTime();
	const [messages, setMessages] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const messagesEndRef = useRef(null);
	const [inputValue, setInputValue] = useState("");

	const scrollToBottom = () => {
		messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
	};

	useEffect(() => {
		scrollToBottom();
	}, [messages]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!inputValue.trim()) return;

		const userMessage = { text: inputValue, sender: "user" };
		setMessages((prev) => [...prev, userMessage]);
		setInputValue("");
		setIsLoading(true);

		try {
			const response = await fetch("/api/chat", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ message: inputValue }),
			});

			if (!response.ok) {
				throw new Error("Failed to fetch response");
			}

			const data = await response.json();
			const botMessage = { text: data.response, sender: "bot" };
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

	return (
		<div
			className="fixed inset-0 w-screen h-screen bg-black isolate"
			style={{ zIndex: 9999 }}
		>
			{/* Subtle Sparkles Background */}
			<div className="fixed inset-0 w-full h-full">
				<SparklesCore
					id="tsparticlesfullpage"
					background="transparent"
					minSize={0.6}
					maxSize={1.2}
					particleDensity={30}
					className="w-full h-full"
					particleColor="#FFFFFF"
					speed={0.3}
					opacity={0.3}
					particleCount={100}
					animate={true}
				/>
			</div>

			{/* Top Navigation Bar */}
			<div className="absolute top-0 left-0 right-0 h-12 bg-black/40 backdrop-blur-sm border-b border-white/10 z-[9999] px-4 flex items-center">
				<motion.button
					onClick={() => navigate(-1)}
					initial={{ opacity: 0, x: -20 }}
					animate={{ opacity: 1, x: 0 }}
					whileHover={{ scale: 1.02 }}
					className="flex items-center gap-2 text-white/90 hover:text-white transition-colors"
				>
					<IoArrowBack className="w-4 h-4" />
					<span className="text-sm font-medium">Return to Home</span>
				</motion.button>
			</div>

			<LampContainer className="fixed inset-0">
				<motion.div
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, delay: 0.5 }}
					className="flex flex-col items-center justify-center space-y-8 h-[35vh] mt-12"
				>
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{
							duration: 1,
							delay: 0.7,
							ease: "easeOut",
						}}
						className="text-4xl md:text-6xl lg:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60 font-sans font-bold tracking-tight"
					>
						Good {currentTime}, Adarsh
					</motion.h2>
					<motion.p
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 1, delay: 1 }}
						className="text-white/60 text-base md:text-lg text-center max-w-lg mx-auto"
					>
						Your AI companion awaits to illuminate your queries with wisdom and
						wit.
					</motion.p>
				</motion.div>
			</LampContainer>

			<div className="fixed inset-0 flex flex-col items-center justify-start px-4 pt-[60vh]">
				<div className="w-full max-w-4xl mx-auto">
					<div className="w-full mb-12">
						<PlaceholdersAndVanishInput
							placeholders={placeholders}
							onChange={(e) => setInputValue(e.target.value)}
							onSubmit={handleSubmit}
						/>
					</div>

					<div className="h-[40vh] overflow-y-auto space-y-4">
						{messages.map((message, index) => (
							<div
								key={index}
								className={cn(
									"flex",
									message.sender === "user" ? "justify-end" : "justify-start"
								)}
							>
								<div
									className={cn(
										"max-w-[80%] rounded-lg p-4",
										message.sender === "user"
											? "bg-white text-black"
											: "bg-black/10 text-white"
									)}
								>
									{message.text}
								</div>
							</div>
						))}
						{isLoading && (
							<div className="flex justify-start">
								<div className="max-w-[80%] rounded-lg bg-black/10 p-4 text-white">
									Thinking...
								</div>
							</div>
						)}
						<div ref={messagesEndRef} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default ChatBot;
