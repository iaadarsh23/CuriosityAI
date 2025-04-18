"use client";

import React, { useRef, useEffect } from "react";
import createGlobe from "cobe";
import { motion } from "framer-motion";
import { SparklesCore } from "./ui/sparkles";
import { useInView } from "framer-motion";

export function FeaturesSectionDemo() {
	return (
		<div className="relative z-20 py-10 lg:py-32 max-w-7xl mx-auto">
			<SparklesCore
				className="absolute inset-0 z-0"
				background="transparent"
				minSize={0.4}
				maxSize={2}
				speed={0.5}
				particleColor="#ffffff"
				particleDensity={250}
			/>
			<div className="px-8 relative">
				<motion.h4
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className="text-5xl lg:text-7xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-bold text-white bg-clip-text text-transparent bg-gradient-to-r from-slate-300 to-white mb-12"
				>
					The Future of Intelligent Technology
				</motion.h4>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.1 }}
						className="relative rounded-2xl backdrop-blur-sm bg-black/20 border border-white/10 p-6 overflow-hidden group"
						whileHover={{ scale: 1.02 }}
					>
						<h3 className="text-2xl font-bold text-white mb-4">
							AI Image Generation
						</h3>
						<p className="text-slate-400 mb-6">
							Transform your vision into reality with our state-of-the-art AI
							image generation technology. Create stunning visuals that capture
							the essence of your imagination.
						</p>
						<SkeletonOne />
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						className="relative rounded-2xl backdrop-blur-sm bg-black/20 border border-white/10 p-6 overflow-hidden group"
						whileHover={{ scale: 1.02 }}
					>
						<h3 className="text-2xl font-bold text-white mb-4">
							Complex Problem Solving
						</h3>
						<p className="text-slate-400 mb-6">
							Navigate through complex challenges with unparalleled precision
							and insight. Our advanced algorithms break down intricate problems
							into clear, actionable solutions, enabling faster and more
							accurate decision-making.
						</p>
						<SkeletonTwo />
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.3 }}
						className="relative rounded-2xl backdrop-blur-sm bg-black/20 border border-white/10 p-6 overflow-hidden group"
						whileHover={{ scale: 1.02 }}
					>
						<h3 className="text-2xl font-bold text-white mb-4">
							Code Generation
						</h3>
						<p className="text-slate-400 mb-6">
							Accelerate your development process with our AI-powered code
							generation. Transform your ideas into production-ready code with
							efficiency, maintaining high standards of quality and performance
							while reducing development time significantly.
						</p>
						<SkeletonThree />
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.4 }}
						className="relative rounded-2xl backdrop-blur-sm bg-black/20 border border-white/10 p-6 overflow-hidden group"
						whileHover={{ scale: 1.02 }}
					>
						<h3 className="text-2xl font-bold text-white mb-4">
							Global AI Network
						</h3>
						<p className="text-slate-400 mb-6">
							Experience the power of distributed intelligence through our
							global network. Our system ensures seamless performance and rapid
							response times, connecting AI resources worldwide for optimal
							performance.
						</p>
						<SkeletonFour />
					</motion.div>
				</div>
			</div>
		</div>
	);
}

const SkeletonOne = () => {
	return (
		<div className="flex flex-col gap-4">
			{[
				"/src/assets/images/horse.png",
				"/src/assets/images/ghilbli-1.avif",
				"/src/assets/images/internet-has-a-field-day-with-chatgpt-generated-ghibli-images-sam-altman-joins-in.webp",
			].map((image, idx) => (
				<motion.div
					key={idx}
					className="relative group h-48 overflow-hidden rounded-lg"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: idx * 0.2 }}
					whileHover={{ scale: 1.05 }}
				>
					<img
						src={image}
						alt="AI generated image"
						className="w-full h-full object-cover rounded-lg"
					/>
					<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
				</motion.div>
			))}
		</div>
	);
};

const SkeletonTwo = () => {
	return (
		<div className="flex flex-col gap-4">
			{[
				"/src/assets/images/math.jpg",
				"/src/assets/images/code.jpg",
				"/src/assets/images/neural.jpg",
			].map((src, idx) => (
				<motion.div
					key={idx}
					className="relative group h-48 overflow-hidden rounded-lg"
					initial={{ opacity: 0, x: -20 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.5, delay: idx * 0.2 }}
					whileHover={{ scale: 1.05 }}
				>
					<img
						src={src}
						alt="Problem solving visualization"
						className="w-full h-full object-cover rounded-lg"
					/>
					<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
				</motion.div>
			))}
		</div>
	);
};

const SkeletonThree = () => {
	return (
		<motion.div
			className="relative group h-[400px] overflow-hidden rounded-lg"
			initial={{ opacity: 0, scale: 0.95 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{ duration: 0.5 }}
			whileHover={{ scale: 1.02 }}
		>
			<img
				src="/src/assets/images/2.jpeg"
				alt="Code generation example"
				className="w-full h-full object-cover rounded-lg"
			/>
			<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
		</motion.div>
	);
};

const SkeletonFour = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });

	return (
		<motion.div
			ref={ref}
			className="relative h-[400px] flex items-center justify-center"
			initial={{ opacity: 0, scale: 0.95 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{ duration: 0.5 }}
		>
			{isInView && (
				<div className="absolute inset-0 flex items-center justify-center">
					<Globe className="w-[120%] h-[120%] max-w-none" />
				</div>
			)}
		</motion.div>
	);
};

const Globe = ({ className }) => {
	const canvasRef = useRef(null);
	const isInView = useInView(canvasRef, { once: true, margin: "-100px" });

	useEffect(() => {
		if (!isInView || !canvasRef.current) return;

		let phi = 0;
		const globe = createGlobe(canvasRef.current, {
			devicePixelRatio: 2,
			width: 600 * 2,
			height: 600 * 2,
			phi: 0,
			theta: 0,
			dark: 1,
			diffuse: 1.2,
			mapSamples: 16000,
			mapBrightness: 6,
			baseColor: [0.3, 0.3, 0.3],
			markerColor: [0.1, 0.8, 1],
			glowColor: [1, 1, 1],
			markers: [
				{ location: [37.7595, -122.4367], size: 0.03 },
				{ location: [40.7128, -74.006], size: 0.1 },
			],
			onRender: (state) => {
				state.phi = phi;
				phi += 0.01;
			},
		});

		return () => {
			globe.destroy();
		};
	}, [isInView]);

	return (
		<canvas
			ref={canvasRef}
			style={{ width: "100%", height: "100%", aspectRatio: 1 }}
			className={className}
		/>
	);
};

export default FeaturesSectionDemo;
