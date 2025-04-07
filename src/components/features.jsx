"use client";

import { useState, useEffect } from "react";
import { Brain, Sparkles, Shield, Network, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "./lib/utils";

const FeatureCard = ({ title, description, children, className }) => {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			viewport={{ once: true }}
			className={cn(
				"relative bg-gray-900/60 backdrop-blur-sm p-8 rounded-xl border border-gray-800 overflow-hidden group",
				className
			)}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			{/* Glow effect */}
			<div
				className={`absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`}
			></div>
			<div
				className={`absolute -inset-1 bg-gradient-to-br from-cyan-500/20 via-transparent to-purple-500/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-700 pointer-events-none`}
			></div>

			{/* Border glow on hover */}
			<div className="absolute inset-0 rounded-xl border border-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

			<div className="relative z-10">
				<h3 className="text-xl font-bold mb-3 flex items-center gap-2">
					{title}
					<span className="h-px w-5 bg-gradient-to-r from-cyan-400 to-transparent"></span>
				</h3>
				<p className="text-gray-400 mb-6">{description}</p>
				<div
					className={`bg-black/50 p-6 rounded-lg h-64 flex items-center justify-center transition-all duration-300 ${
						isHovered ? "shadow-[0_0_15px_rgba(34,211,238,0.15)]" : ""
					}`}
				>
					{children}
				</div>
			</div>
		</motion.div>
	);
};

const Star = ({ size, top, left, delay }) => {
	return (
		<motion.div
			className="absolute rounded-full bg-white"
			style={{
				width: size + "px",
				height: size + "px",
				top,
				left,
			}}
			animate={{
				opacity: [0.2, 0.8, 0.2],
				scale: [1, 1.2, 1],
			}}
			transition={{
				duration: Math.random() * 3 + 2,
				delay,
				repeat: Number.POSITIVE_INFINITY,
				repeatType: "reverse",
			}}
		/>
	);
};

export default function FeaturesSection() {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;

	return (
		<div className="min-h-screen bg-black text-white relative overflow-hidden py-16">
			{/* Stars background */}
			<div className="absolute inset-0 z-0">
				{Array.from({ length: 30 }).map((_, i) => (
					<Star
						key={i}
						size={Math.random() * 3 + 1}
						top={`${Math.random() * 100}%`}
						left={`${Math.random() * 100}%`}
						delay={Math.random() * 2}
					/>
				))}
			</div>

			{/* Animated gradient background */}
			<div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent opacity-30"></div>

			{/* Features Section */}
			<section className="relative z-10 container mx-auto px-4 max-w-6xl">
				<motion.div
					className="text-center mb-16"
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7 }}
				>
					<h2 className="text-4xl md:text-5xl font-bold mb-4">
						<span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-cyan-400">
							Essential tools for your
						</span>
						<span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
							AI exploration
						</span>
					</h2>
					<div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto my-6 rounded-full"></div>
					<p className="text-gray-400 max-w-3xl mx-auto">
						Unlock your creative potential with Curiosity AI's powerful suite of
						tools designed to drive your AI-powered discoveries
					</p>
				</motion.div>

				<div className="grid md:grid-cols-2 gap-8">
					{/* Feature 1 */}
					<FeatureCard
						title="Advanced AI conversations"
						description="Engage in deep, meaningful dialogues with our state-of-the-art AI. Get informed responses with up-to-the-minute information."
					>
						<div className="space-y-4 w-full max-w-xs">
							<motion.div
								className="bg-gray-800 p-3 rounded-lg text-sm"
								initial={{ x: -20, opacity: 0 }}
								whileInView={{ x: 0, opacity: 1 }}
								transition={{ delay: 0.2 }}
								viewport={{ once: true }}
							>
								How does quantum computing work?
							</motion.div>
							<motion.div
								className="bg-gray-700/70 p-3 rounded-lg text-sm"
								initial={{ x: 20, opacity: 0 }}
								whileInView={{ x: 0, opacity: 1 }}
								transition={{ delay: 0.4 }}
								viewport={{ once: true }}
							>
								Quantum computing leverages quantum mechanics principles like
								superposition and entanglement to process information...
							</motion.div>
							<motion.div
								className="flex items-center gap-2 text-cyan-400"
								initial={{ opacity: 0 }}
								whileInView={{ opacity: 1 }}
								transition={{ delay: 0.6 }}
								viewport={{ once: true }}
								animate={{
									opacity: [0.7, 1, 0.7],
								}}
								transition={{
									duration: 2,
									repeat: Number.POSITIVE_INFINITY,
								}}
							>
								<Sparkles className="w-4 h-4" />
								<span className="text-xs">AI generating response...</span>
							</motion.div>
						</div>
					</FeatureCard>

					{/* Feature 2 */}
					<FeatureCard
						title="Knowledge visualization"
						description="Transform complex concepts into clear visual representations. Our AI creates diagrams and charts to help you understand difficult topics."
					>
						<div className="w-full h-full flex flex-col items-center justify-center">
							<div className="relative w-48 h-48">
								<motion.div
									className="absolute inset-0 rounded-full border-2 border-cyan-500/30"
									animate={{
										scale: [1, 1.1, 1],
										opacity: [0.3, 0.6, 0.3],
									}}
									transition={{
										duration: 3,
										repeat: Number.POSITIVE_INFINITY,
										repeatType: "reverse",
									}}
								></motion.div>
								<motion.div
									className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
									animate={{
										rotate: 360,
									}}
									transition={{
										duration: 20,
										repeat: Number.POSITIVE_INFINITY,
										ease: "linear",
									}}
								>
									<Brain className="w-16 h-16 text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]" />
								</motion.div>

								{/* Connection points */}
								{[
									{
										top: "0",
										left: "50%",
										translateX: "-50%",
										color: "bg-cyan-400",
									},
									{
										top: "25%",
										right: "0",
										translateX: "0",
										color: "bg-purple-400",
									},
									{
										bottom: "0",
										left: "50%",
										translateX: "-50%",
										color: "bg-purple-400",
									},
									{
										top: "25%",
										left: "0",
										translateX: "0",
										color: "bg-cyan-400",
									},
								].map((point, i) => (
									<motion.div
										key={i}
										className={`absolute w-2 h-2 ${point.color} rounded-full shadow-[0_0_5px_rgba(34,211,238,0.7)]`}
										style={{
											top: point.top || "auto",
											left: point.left || "auto",
											right: point.right || "auto",
											bottom: point.bottom || "auto",
											transform: `translateX(${point.translateX})`,
										}}
										animate={{
											scale: [1, 1.5, 1],
											opacity: [0.7, 1, 0.7],
										}}
										transition={{
											duration: 2,
											delay: i * 0.5,
											repeat: Number.POSITIVE_INFINITY,
											repeatType: "reverse",
										}}
									/>
								))}
							</div>
						</div>
					</FeatureCard>

					{/* Feature 3 */}
					<FeatureCard
						title="Secure conversations"
						description="Enjoy peace of mind with our advanced security protocols. Your conversations are encrypted and protected against unauthorized access."
					>
						<div className="relative">
							<motion.div
								className="absolute inset-0 bg-gradient-radial from-gray-700/20 to-transparent rounded-full"
								animate={{
									scale: [1, 1.2, 1],
									opacity: [0.3, 0.5, 0.3],
								}}
								transition={{
									duration: 4,
									repeat: Number.POSITIVE_INFINITY,
									repeatType: "reverse",
								}}
							></motion.div>

							<motion.div
								animate={{
									rotate: [0, 10, 0, -10, 0],
								}}
								transition={{
									duration: 10,
									repeat: Number.POSITIVE_INFINITY,
									repeatType: "reverse",
								}}
							>
								<Shield className="w-32 h-32 text-gray-700" />
								<Shield className="absolute inset-0 w-32 h-32 text-gray-600 blur-sm" />
								<Shield className="absolute inset-0 w-32 h-32 text-gray-500 blur-md" />
							</motion.div>

							<motion.div
								className="absolute inset-0 flex items-center justify-center"
								animate={{
									scale: [1, 1.1, 1],
									opacity: [0.8, 1, 0.8],
								}}
								transition={{
									duration: 2,
									repeat: Number.POSITIVE_INFINITY,
									repeatType: "reverse",
								}}
							>
								<Shield className="w-16 h-16 text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]" />
							</motion.div>
						</div>
					</FeatureCard>

					{/* Feature 4 */}
					<FeatureCard
						title="Seamless integration"
						description="Easily connect our platform with your existing tools. Our seamless integration ensures smooth data flow across all your devices."
					>
						<div className="relative w-full h-full flex items-center justify-center">
							<motion.div
								className="absolute"
								animate={{
									rotate: 360,
								}}
								transition={{
									duration: 30,
									repeat: Number.POSITIVE_INFINITY,
									ease: "linear",
								}}
							>
								<Network className="w-16 h-16 text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]" />
							</motion.div>

							{/* Connection nodes */}
							{[
								{ left: "25%", top: "33%", label: "A" },
								{ right: "25%", top: "33%", label: "B" },
								{ left: "33%", bottom: "25%", label: "C" },
								{ right: "33%", bottom: "25%", label: "D" },
							].map((node, i) => (
								<motion.div
									key={i}
									className="absolute"
									style={{
										left: node.left || "auto",
										right: node.right || "auto",
										top: node.top || "auto",
										bottom: node.bottom || "auto",
									}}
									whileHover={{ scale: 1.2 }}
									animate={{
										y: [0, -5, 0, 5, 0],
									}}
									transition={{
										duration: 5,
										delay: i * 1.2,
										repeat: Number.POSITIVE_INFINITY,
									}}
								>
									<div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer hover:text-cyan-400 hover:shadow-[0_0_10px_rgba(34,211,238,0.3)]">
										<span className="text-xs">{node.label}</span>
									</div>
								</motion.div>
							))}

							{/* Connection lines */}
							<svg
								className="w-full h-full absolute pointer-events-none"
								viewBox="0 0 400 300"
							>
								{[
									{ x1: "100", y1: "100", x2: "200", y2: "150" },
									{ x1: "300", y1: "100", x2: "200", y2: "150" },
									{ x1: "130", y1: "200", x2: "200", y2: "150" },
									{ x1: "270", y1: "200", x2: "200", y2: "150" },
								].map((line, i) => (
									<motion.line
										key={i}
										x1={line.x1}
										y1={line.y1}
										x2={line.x2}
										y2={line.y2}
										stroke="rgba(34, 211, 238, 0.3)"
										strokeWidth="1"
										initial={{ pathLength: 0, opacity: 0 }}
										animate={{
											pathLength: 1,
											opacity: [0.3, 0.7, 0.3],
										}}
										transition={{
											pathLength: {
												delay: 0.5 + i * 0.2,
												duration: 1.5,
												ease: "easeInOut",
											},
											opacity: {
												duration: 3,
												repeat: Number.POSITIVE_INFINITY,
												repeatType: "reverse",
											},
										}}
									/>
								))}
							</svg>
						</div>
					</FeatureCard>
				</div>

				{/* Call to action */}
				<motion.div
					className="mt-16 text-center"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7, delay: 0.5 }}
					viewport={{ once: true }}
				>
					<a
						href="#"
						className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-shadow duration-300 group"
					>
						Start Exploring
						<motion.span
							animate={{ x: [0, 5, 0] }}
							transition={{
								duration: 1.5,
								repeat: Number.POSITIVE_INFINITY,
								repeatType: "reverse",
							}}
						>
							<ExternalLink className="w-4 h-4" />
						</motion.span>
					</a>
				</motion.div>
			</section>
		</div>
	);
}
