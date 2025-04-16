"use client";

import React from "react";
import { cn } from "@/lib/utils";
import createGlobe from "cobe";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { IconBrandYoutubeFilled } from "@tabler/icons-react";
import { SparklesCore } from "./ui/sparkles";

export function FeaturesSectionDemo() {
	const features = [
		{
			title: "AI Image Generation",
			description:
				"Transform your vision into reality with our advanced AI. Create stunning visuals that capture the essence of your imagination, from photorealistic scenes to artistic masterpieces.",
			skeleton: <SkeletonOne />,
			className:
				"col-span-1 lg:col-span-4 border-b lg:border-r dark:border-neutral-800",
		},
		{
			title: "Complex Problem Solving",
			description:
				"Navigate through complex challenges with precision. Our AI breaks down intricate problems into clear, actionable solutions, making the impossible possible.",
			skeleton: <SkeletonTwo />,
			className: "border-b col-span-1 lg:col-span-2 dark:border-neutral-800",
		},
		{
			title: "Code Generation",
			description:
				"Accelerate your development process with AI-powered code generation. Transform your ideas into production-ready code with efficiency and elegance.",
			skeleton: <SkeletonThree />,
			className: "col-span-1 lg:col-span-3 lg:border-r dark:border-neutral-800",
		},
		{
			title: "Global AI Network",
			description:
				"Experience the power of distributed intelligence. Our global network ensures seamless performance and rapid response times, wherever you are.",
			skeleton: <SkeletonFour />,
			className: "col-span-1 lg:col-span-3 border-b lg:border-none",
		},
	];
	return (
		<div className="relative z-20 py-10 lg:py-40 max-w-7xl mx-auto">
			<SparklesCore
				className="absolute inset-0 z-0"
				background="transparent"
				minSize={1}
				maxSize={3}
				speed={2}
				particleColor="#ffffff"
				particleDensity={40}
			/>
			<div className="px-8 relative">
				<h4 className="text-4xl lg:text-6xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-bold text-white bg-clip-text text-transparent bg-gradient-to-r from-slate-300 to-white">
					The Future of Intelligent Technology
				</h4>

				<p className="text-lg lg:text-xl max-w-3xl my-8 mx-auto text-slate-300 text-center font-normal">
					Experience the convergence of artificial intelligence and human
					creativity. Where innovation meets imagination, and possibilities
					become reality.
				</p>
			</div>
			<div className="relative">
				<div className="grid grid-cols-1 lg:grid-cols-6 mt-12 xl:border rounded-md dark:border-neutral-800">
					{features.map((feature) => (
						<FeatureCard key={feature.title} className={feature.className}>
							<FeatureTitle>{feature.title}</FeatureTitle>
							<FeatureDescription>{feature.description}</FeatureDescription>
							<div className="h-full w-full">{feature.skeleton}</div>
						</FeatureCard>
					))}
				</div>
			</div>
		</div>
	);
}

const FeatureCard = ({ children, className }) => {
	return (
		<div className={cn(`p-4 sm:p-8 relative overflow-hidden`, className)}>
			{children}
		</div>
	);
};

const FeatureTitle = ({ children }) => {
	return (
		<p className="max-w-5xl mx-auto text-left tracking-tight text-white text-xl md:text-2xl md:leading-snug font-semibold mb-2">
			{children}
		</p>
	);
};

const FeatureDescription = ({ children }) => {
	return (
		<p
			className={cn(
				"text-sm md:text-base max-w-4xl text-left mx-auto",
				"text-slate-300 text-center font-normal",
				"text-left max-w-sm mx-0 md:text-sm my-2"
			)}
		>
			{children}
		</p>
	);
};

export const SkeletonOne = () => {
	const images = [
		"/src/assets/images/horse.png",
		"/src/assets/images/ghilbli-1.avif",
		"/src/assets/images/internet-has-a-field-day-with-chatgpt-generated-ghibli-images-sam-altman-joins-in.webp",
	];

	return (
		<div className="relative flex flex-col gap-4 h-full">
			{images.map((image, idx) => (
				<div key={idx} className="relative group h-48">
					<img
						src={image}
						alt="AI generated image"
						className="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
					/>
					<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
				</div>
			))}
		</div>
	);
};

export const SkeletonTwo = () => {
	return (
		<div className="relative flex flex-col gap-4 h-full">
			<div className="relative group h-48">
				<img
					src="/src/assets/images/math.jpg"
					alt="Math problem solving"
					className="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
				/>
				<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
			</div>
			<div className="relative group h-48">
				<img
					src="/src/assets/images/code.jpg"
					alt="Code generation"
					className="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
				/>
				<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
			</div>
			<div className="relative group h-48">
				<img
					src="/src/assets/images/neural.jpg"
					alt="Neural network visualization"
					className="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
				/>
				<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
			</div>
		</div>
	);
};

export const SkeletonThree = () => {
	return (
		<div className="relative group h-full">
			<img
				src="/src/assets/images/2.jpeg"
				alt="High quality code generation"
				className="w-full h-96 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
			/>
			<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
		</div>
	);
};

export const SkeletonFour = () => {
	return (
		<div className="h-60 md:h-80 flex flex-col items-center relative bg-transparent dark:bg-transparent mt-10">
			<Globe className="absolute -right-10 md:-right-10 -bottom-80 md:-bottom-72" />
		</div>
	);
};

export const Globe = ({ className }) => {
	const canvasRef = useRef(null);

	useEffect(() => {
		let phi = 0;

		if (!canvasRef.current) return;

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
				// longitude latitude
				{ location: [37.7595, -122.4367], size: 0.03 },
				{ location: [40.7128, -74.006], size: 0.1 },
			],
			onRender: (state) => {
				// Called on every animation frame.
				// `state` will be an empty object, return updated params.
				state.phi = phi;
				phi += 0.01;
			},
		});

		return () => {
			globe.destroy();
		};
	}, []);

	return (
		<canvas
			ref={canvasRef}
			style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: 1 }}
			className={className}
		/>
	);
};

export default FeaturesSectionDemo;
