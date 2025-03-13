import React from "react";
import { useForm } from "react-hook-form";
import Button from "./button";
import { SparklesCore } from "./ui/sparkles";
("use client");

import { PlaceholdersAndVanishInput } from "./ui/placeholders-and-vanish-input";

export function ChatBot() {
	function getTime() {
		const now = new Date();
		const hours = now.getHours();
		let TimeOfTheDay = "";
		if (hours > 5 && hours < 12) {
			TimeOfTheDay = " Morning";
		} else if (hours >= 12 && hours < 17) {
			TimeOfTheDay = " Afternoon";
		} else if (hours >= 17 && hours < 21) {
			TimeOfTheDay = " evening";
		} else {
			TimeOfTheDay = " night";
		}
		return TimeOfTheDay;
	}
	const currentTime = getTime();
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

	const handleChange = (e) => {
		console.log(e.target.value);
	};
	const onSubmit = (e) => {
		e.preventDefault();
		console.log(e);
	};
	return (
		<div className="relative w-full h-screen">
			{/* Background Sparkles Layer */}
			<div className="fixed inset-0 w-full h-full">
				<SparklesCore
					background="transparent"
					minSize={1}
					maxSize={3}
					speed={2}
					particleColor="#ffffff"
					particleDensity={30}
				/>
			</div>

			{/* Content Layer */}
			<div className="relative z-10 h-full flex flex-col justify-center items-center px-4">
				<div className="text-center space-y-4">
					<h2 className="text-xl sm:text-5xl dark:text-white text-gray-400 font-mono font-light tracking-wider transform  transition-colors 0 hover:text-amber-50">
						Good {currentTime}, Adarsh
					</h2>
					<p className="text-lg sm:text-3xl dark:text-white/80 text-gray-500 font-mono">
						How may I help you today?
					</p>
				</div>

				<div className="mt-16 w-full max-w-2xl">
					<PlaceholdersAndVanishInput
						placeholders={placeholders}
						onChange={handleChange}
						onSubmit={onSubmit}
					/>
				</div>
			</div>
		</div>
	);
}

export default ChatBot;
