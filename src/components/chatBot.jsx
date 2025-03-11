import React from "react";
import { useForm } from "react-hook-form";
import Button from "./button";
import { SparklesCore } from "./ui/sparkles";
("use client");

import { PlaceholdersAndVanishInput } from "./ui/placeholders-and-vanish-input";

export function ChatBot() {
	const placeholders = [
		"What's the first rule of Fight Club?",
		"Who is Tyler Durden?",
		"Where is Andrew Laeddis Hiding?",
		"Write a Javascript method to reverse a string",
		"How to assemble your own PC?",
	];

	const handleChange = (e) => {
		console.log(e.target.value);
	};
	const onSubmit = (e) => {
		e.preventDefault();
		console.log(e);
	};
	return (
		<div className="relative w-full h-screen ">
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
				<h2 className="mb-10 sm:mb-20 text-xl text-center sm:text-5xl dark:text-white text-gray-400 font-mono font-light">
					Ask Curiosity anything
				</h2>
				<PlaceholdersAndVanishInput
					placeholders={placeholders}
					onChange={handleChange}
					onSubmit={onSubmit}
				/>
			</div>
		</div>
	);
}

export default ChatBot;
