import React from "react";
import { navData } from "../data/navData";
import { SparklesCore } from "./ui/sparkles";
import Button from "./button";

const Header = () => {
	return (
		<div className="fixed top-0 left-0 w-full z-50 bg-black py-4">
			<SparklesCore
				className="absolute inset-0 -z-12"
				background="transparent"
				minSize={1}
				maxSize={3}
				speed={2}
				particleColor="#27ffc1"
				particleDensity={35}
			/>
			<div className="flex items-center justify-between px-16">
				{/* Logo */}
				<div>
					<a className="text-2xl font-bold text-white" href="#hero">
						Curiosity AI
					</a>
				</div>

				{/* Navigation */}
				<nav className="flex gap-20">
					{navData.map((data) => (
						<a
							key={data.id}
							href={data.path}
							className="text-gray-400 hover:text-white transition duration-300 uppercase text-sm tracking-wider"
						>
							{data.title}
						</a>
					))}
				</nav>

				{/* Sign Up Button */}
				<Button href="login" onClick={() => console.log("hello")}>
					Login
				</Button>
			</div>
		</div>
	);
};

export default Header;
