"use client";
import React, { useState } from "react";
import { motion as Motion } from "framer-motion";
import { LampContainer } from "./ui/lamp-container";
import { PlaceholdersAndVanishInput } from "./ui/placeholders-and-vanish-input";
import { useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";

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
	const [inputValue, setInputValue] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!inputValue.trim()) return;

		// Navigate to chat interface with the initial message
		navigate("/chat-interface", { state: { initialMessage: inputValue } });
	};

	return (
		<div className="fixed inset-0 w-screen h-screen bg-black isolate">
			{/* Back Button */}
			<Motion.button
				onClick={() => navigate(-1)}
				initial={{ opacity: 0, x: 20 }}
				animate={{ opacity: 1, x: 0 }}
				whileHover={{ scale: 1.02 }}
				className="fixed top-6 right-6 z-[9999] flex items-center gap-2 text-white/90 hover:text-white transition-colors"
			>
				<span className="text-sm font-medium">Return</span>
				<IoArrowBack className="w-4 h-4" />
			</Motion.button>

			{/* Curiosity Logo */}
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

			{/* Lamp Container with beautiful light effect */}
			<LampContainer className="fixed inset-0">
				<Motion.div
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, delay: 0.5 }}
					className="flex flex-col items-center justify-center space-y-8 h-[35vh] mt-12"
				>
					<Motion.h2
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
						className="text-4xl md:text-6xl lg:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60 font-sans font-bold tracking-tight"
					>
						Good {currentTime}, Adarsh
					</Motion.h2>
					<Motion.p
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 1, delay: 1 }}
						className="text-white/60 text-base md:text-lg text-center max-w-lg mx-auto"
					>
						Your AI companion awaits to illuminate your queries with wisdom and
						wit.
					</Motion.p>
				</Motion.div>
			</LampContainer>

			{/* Input Section */}
			<div className="fixed inset-0 flex flex-col items-center justify-start px-4 pt-[60vh]">
				<div className="w-full max-w-4xl mx-auto">
					<div className="w-full mb-12">
						<PlaceholdersAndVanishInput
							placeholders={placeholders}
							value={inputValue}
							onChange={(e) => setInputValue(e.target.value)}
							onSubmit={handleSubmit}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ChatBot;
