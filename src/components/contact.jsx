import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SparklesCore } from "./ui/sparkles";
import { CardDemo } from "./ui/feature-card";

const Contact = () => {
	const socialLinks = [
		{
			icon: FaGithub,
			url: "https://github.com/iaadarsh23",
			label: "GitHub",
		},
		{
			icon: FaLinkedin,
			url: "https://www.linkedin.com/in/adarsh-tripathi-529199260/",
			label: "LinkedIn",
		},
		{
			icon: FaTwitter,
			url: "https://x.com/adarshtrip2306",
			label: "Twitter",
		},
	];

	return (
		<div className="min-h-screen bg-transparent relative overflow-hidden">
			{/* SparklesCore Background */}
			<div className="absolute inset-0 w-full h-full">
				<SparklesCore
					id="tsparticlesfullpage"
					background="black"
					minSize={0.5}
					maxSize={2}
					particleDensity={35}
					className="w-full h-full"
					particleColor="#FFFFFF"
					speed={1}
					animate={true}
				/>
			</div>

			<div className="relative z-10 py-20">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					{/* Futuristic Heading */}
					<div className="text-center mb-20">
						<h1 className="text-5xl md:text-7xl font-bold mb-6 premium-text">
							Know About Me
						</h1>
						<style jsx>{`
							@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap");

							.premium-text {
								font-family: "Montserrat", sans-serif;
								background: linear-gradient(90deg, #c0c0c0, #f5f5f5, #a9a9a9);
								background-size: 200% auto;
								-webkit-background-clip: text;
								-webkit-text-fill-color: transparent;
								text-shadow: 0 0 15px rgba(245, 245, 245, 0.3),
									0 0 25px rgba(192, 192, 192, 0.2);
								animation: shine 8s linear infinite;
								letter-spacing: 0.05em;
							}

							@keyframes shine {
								to {
									background-position: 200% center;
								}
							}
						`}</style>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
						{/* Left side - Feature Card */}
						<div className="w-full max-w-lg mx-auto">
							<CardDemo />
						</div>

						{/* Right side - Contact Info */}
						<div className="text-center md:text-left">
							<h2 className="text-5xl font-bold mb-6 premium-text">
								Adarsh Tripathi
							</h2>
							<p className="text-xl text-gray-300 mb-8 font-light">
								Let's connect and create something amazing together.
							</p>
							<div className="flex flex-wrap gap-6 justify-center md:justify-start">
								{socialLinks.map((link, index) => (
									<a
										key={index}
										href={link.url}
										target="_blank"
										rel="noopener noreferrer"
										className="group flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
									>
										<span className="bg-black/30 p-4 rounded-full backdrop-blur-sm border border-white/10 group-hover:border-white/20 group-hover:bg-black/40 transition-all">
											<link.icon className="w-6 h-6" />
										</span>
										<span className="font-medium">{link.label}</span>
									</a>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
