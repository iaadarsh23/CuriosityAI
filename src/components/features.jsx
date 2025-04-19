"use client";

import React, { useRef, useEffect } from "react";
import createGlobe from "cobe";
import { motion as Motion, useInView } from "framer-motion";
import { SparklesCore } from "./ui/sparkles";
import Neural from "../assets/images/neural.jpg";
import Math from "../assets/images/math.jpg";
import Code from "../assets/images/code.jpg";
import Gemini from "../assets/images/Google-Gemini-Pro.webp";

export function FeaturesSectionDemo() {
	const ref = useRef(null);

	return (
		<div ref={ref} className="relative z-20 py-10 lg:py-32 max-w-7xl mx-auto">
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
				<Motion.h4
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className="text-5xl lg:text-7xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-bold text-white bg-clip-text text-transparent bg-gradient-to-r from-slate-300 to-white mb-12"
				>
					The Future of Intelligent Technology
				</Motion.h4>
				<Motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className="relative rounded-2xl backdrop-blur-sm bg-black/20 border border-white/10 p-8"
				>
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
						<div className="space-y-8">
							<div>
								<h3 className="text-2xl font-bold text-white mb-4">
									AI Image Generation
								</h3>
								<p className="text-slate-400">
									Transform your vision into reality with our state-of-the-art
									AI image generation technology. Create stunning visuals that
									capture the essence of your imagination.
								</p>
								<div className="mt-6">
									<SkeletonOne />
								</div>
							</div>
							<div>
								<h3 className="text-2xl font-bold text-white mb-4">
									Complex Problem Solving
								</h3>
								<p className="text-slate-400">
									Navigate through complex challenges with unparalleled
									precision and insight. Our AI breaks down intricate problems
									into clear, actionable solutions.
								</p>
								<div className="mt-6">
									<SkeletonTwo />
								</div>
							</div>
						</div>
						<div className="space-y-8">
							<div>
								<h3 className="text-2xl font-bold text-white mb-4">
									Code Generation
								</h3>
								<p className="text-slate-400">
									Accelerate your development process with our AI-powered code
									generation. Transform your ideas into production-ready code
									with efficiency.
								</p>
								<div className="mt-6">
									<SkeletonThree />
								</div>
							</div>
							<div>
								<h3 className="text-2xl font-bold text-white mb-4">
									Global AI Network
								</h3>
								<p className="text-slate-400">
									Experience the power of distributed intelligence through our
									global network. Our system ensures seamless performance and
									rapid response times.
								</p>
								<div className="mt-6">
									<SkeletonFour />
								</div>
							</div>
						</div>
					</div>
				</Motion.div>
			</div>
		</div>
	);
}

const SkeletonOne = () => {
	return (
		<div className="relative group h-full">
			<img
				src={Neural}
				alt="Neural Network"
				loading="lazy"
				className="w-full h-96 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
			/>
			<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
		</div>
	);
};

const SkeletonTwo = () => {
	return (
		<div className="relative group h-full">
			<img
				src={Math}
				alt="Math Problem Solving"
				loading="lazy"
				className="w-full h-96 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
			/>
			<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
		</div>
	);
};

const SkeletonThree = () => {
	return (
		<div className="relative group h-full">
			<img
				src={Code}
				alt="Code Generation"
				loading="lazy"
				className="w-full h-96 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
			/>
			<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
		</div>
	);
};

const SkeletonFour = () => {
	return (
		<div className="relative group h-full">
			<img
				src={Gemini}
				alt="Google Gemini"
				loading="lazy"
				className="w-full h-96 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
			/>
			<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
		</div>
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
			style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: 1 }}
			className={className}
		/>
	);
};
export default FeaturesSectionDemo;
