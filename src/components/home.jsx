import React from "react";
import { ContainerTextFlip } from "./ui/container-text-flip";
import { SparklesCore } from "./ui/sparkles";
import Button from "./button";
import ChatBot from "./chatBot";

const Home = ({ openChatBot }) => {
	const words = ["awesome", "curious", "magical", "powerful", "intelligent"];
	return (
		<div className="min-h-screen flex flex-col justify-center items-center text-center gap-6 bg-black z-10">
			<SparklesCore
				className="absolute inset-0 z-0"
				background="transparent"
				minSize={2}
				maxSize={5}
				speed={1}
				particleColor="#ffffff"
				particleCount={1000}
				particleDensity={100}
			/>

			{/* Moving the line with text flip + "Chat with Curiosity" here */}

			<div className="relative z-10 flex gap-5">
				<div className="relative">
					<h1 className="text-7xl transition-colors duration-300 ease-in-out font-bold text-gray-500 hover:text-white">
						CURIOSITY
					</h1>
					<div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-sky-400 to-transparent animate-shimmer"></div>
				</div>
				<div className="relative">
					<h1 className="text-7xl transition-colors duration-300 ease-in-out font-bold text-white hover:text-gray-500">
						AI
					</h1>
					<div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent  via-sky-400 to-transparent animate-shimmer"></div>
				</div>
			</div>
			<div className="relative z-10 flex items-center gap-3 text-2xl font-semibold text-white">
				<ContainerTextFlip words={words} size="small" />
				<span className="text-gray-500 transition-colors duration-300 ease-in-out hover:text-white">
					Chat with Curiosity
				</span>
			</div>

			<Button onClick={openChatBot}>Start Exploring</Button>
		</div>
	);
};

export default Home;
