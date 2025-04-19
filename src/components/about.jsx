import React from "react";
import { motion as Motion } from "framer-motion";
import { FiZap, FiCpu, FiCode } from "react-icons/fi";
import { BackgroundGradientAnimation } from "./ui/background-gradient-animation";
import { SparklesCore } from "./ui/sparkles";

const About = () => {
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.4,
			},
		},
	};

	const cardVariants = {
		hidden: (index) => ({
			opacity: 0,
			x: index % 2 === 0 ? -200 : 200,
			scale: 0.8,
		}),
		visible: {
			opacity: 1,
			x: 0,
			scale: 1,
			transition: {
				type: "spring",
				damping: 20,
				stiffness: 100,
				duration: 0.8,
			},
		},
	};

	const imageVariants = {
		hidden: (index) => ({
			opacity: 0,
			x: index % 2 === 0 ? -100 : 100,
			rotateY: index % 2 === 0 ? -15 : 15,
		}),
		visible: {
			opacity: 1,
			x: 0,
			rotateY: 0,
			transition: {
				type: "spring",
				damping: 25,
				stiffness: 80,
				delay: 0.2,
			},
		},
	};

	const cards = [
		{
			title: "Powered by Gemini Pro",
			description:
				"Experience the power of Google's most advanced AI model. Our platform leverages Gemini Pro's capabilities to provide intelligent, context-aware responses and insights.",
			image: "/Google-Gemini-Pro.webp",
			icon: FiZap,
			iconText: "Advanced AI Capabilities",
		},
		{
			title: "Neural Network Architecture",
			description:
				"Built on sophisticated neural networks that learn and adapt, providing you with increasingly accurate and personalized responses over time.",
			image: "/neural.jpg",
			icon: FiCpu,
			iconText: "Deep Learning Technology",
		},
		{
			title: "Future of AI Interaction",
			description:
				"Join us in shaping the future of human-AI interaction. Our platform continuously evolves to bring you the most advanced AI capabilities.",
			image: "/2.jpeg",
			icon: FiCode,
			iconText: "Innovative Solutions",
		},
	];

	return (
		<div className="min-h-screen bg-black/90 relative overflow-hidden">
			{/* Main SparklesCore Background */}
			<div className="fixed inset-0 h-screen w-full z-0">
				<SparklesCore
					id="tsparticlesfullpage"
					background="transparent"
					minSize={0.8}
					maxSize={1.8}
					particleDensity={150}
					className="w-full h-full"
					particleColor="#FFFFFF"
					speed={0.5}
					opacity={0.8}
				/>
			</div>

			{/* Content Container */}
			<div className="relative z-10 min-h-screen">
				<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
					<Motion.div
						initial={{ opacity: 0, y: -50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1, ease: "easeOut" }}
						className="text-center mb-20"
					>
						<h1 className="text-6xl font-bold mb-6 tracking-tight font-sans bg-gradient-to-r from-gray-100 via-gray-300 to-gray-100 bg-clip-text text-transparent drop-shadow-sm">
							Where AI Meets Human Creativity
						</h1>
						<p className="text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
							Imagine having a brilliant companion who understands you, learns
							from you, and helps bring your ideas to life. That's us – your
							creative partner in the AI revolution.
						</p>
					</Motion.div>

					<Motion.div
						variants={containerVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, margin: "-100px" }}
						className="relative overflow-hidden rounded-3xl bg-black/40 backdrop-blur-sm"
					>
						<div className="relative h-full w-full overflow-hidden rounded-3xl">
							<BackgroundGradientAnimation
								gradientBackgroundStart="rgb(89, 0, 255)"
								gradientBackgroundEnd="rgb(0, 0, 20)"
								firstColor="89, 0, 255"
								secondColor="255, 0, 255"
								thirdColor="56, 189, 248"
								fourthColor="103, 0, 255"
								fifthColor="225, 56, 248"
								pointerColor="140, 100, 255"
								size="100%"
								blendingValue="hard-light"
								containerClassName="!h-full !w-full !absolute inset-0"
							/>
							<div className="relative z-10 p-12">
								{cards.map((card, index) => (
									<Motion.div
										key={index}
										custom={index}
										variants={cardVariants}
										className={`flex flex-col ${
											index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
										} items-center gap-12 ${
											index !== cards.length - 1 ? "mb-24" : ""
										}`}
									>
										{/* Image Section */}
										<div className="w-full md:w-1/2">
											<Motion.div
												className="relative group"
												variants={imageVariants}
												custom={index}
												whileHover={{
													scale: 1.02,
													transition: { duration: 0.2 },
												}}
											>
												<div className="absolute inset-0 bg-gradient-to-r from-violet-600/30 via-fuchsia-500/30 to-cyan-400/30 rounded-xl blur-xl transition-all duration-300 group-hover:blur-2xl" />
												<img
													src={card.image}
													alt={card.title}
													className="relative z-10 w-full h-72 object-cover rounded-xl border border-white/20 transition-all duration-300 group-hover:scale-[1.02] group-hover:border-white/30 shadow-lg"
												/>
											</Motion.div>
										</div>

										{/* Content Section */}
										<Motion.div
											className="w-full md:w-1/2 text-center md:text-left"
											initial={{ opacity: 0, y: 20 }}
											whileInView={{ opacity: 1, y: 0 }}
											transition={{ duration: 0.5, delay: 0.3 }}
										>
											<h3 className="text-4xl font-bold mb-6 text-white tracking-tight">
												{card.title}
											</h3>
											<p className="text-lg text-gray-300 mb-6 leading-relaxed">
												{card.description}
											</p>
											<Motion.div
												className="flex items-center justify-center md:justify-start space-x-3 text-cyan-300"
												whileHover={{ scale: 1.05 }}
												transition={{ duration: 0.2 }}
											>
												<card.icon className="w-6 h-6" />
												<span className="text-lg font-medium">
													{card.iconText}
												</span>
											</Motion.div>
										</Motion.div>
									</Motion.div>
								))}
							</div>
						</div>
					</Motion.div>
				</div>
			</div>
		</div>
	);
};

export default About;
