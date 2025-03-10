import React from "react";
import { SparklesCore } from "./ui/sparkles";
import Button from "./button";

const Home = () => {
	return (
		<div className="min-h-screen flex flex-col justify-center items-center text-center gap-6 bg-black">
			<SparklesCore
				className="absolute inset-0 z-0"
				background="transparent"
				minSize={1}
				maxSize={3}
				speed={2}
				particleColor="#ffffff"
				particleDensity={40}
			/>
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

			<div className="relative z-10 flex gap-3">
				<p className="text-2xl font-semibold text-white">Be Curious</p>
				<p className="text-2xl font-semibold text-gray-500 transition-colors duration-300 ease-in-out hover:text-white">
					Chat with Curiosity
				</p>
			</div>
			<Button children={"Start Exploring"} />
		</div>
	);
};

export default Home;
