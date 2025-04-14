"use client";
import React, { useId, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { motion, useAnimation } from "framer-motion";
import { cn } from "../lib/utils";

export const SparklesCore = (props) => {
	const {
		id,
		className,
		background,
		minSize,
		maxSize,
		speed,
		particleColor,
		particleDensity,
	} = props;

	const [init, setInit] = useState(false);

	useEffect(() => {
		initParticlesEngine(async (engine) => {
			await loadSlim(engine);
		}).then(() => {
			setInit(true);
		});
	}, []);

	const controls = useAnimation();

	const particlesLoaded = async (container) => {
		if (container) {
			controls.start({
				opacity: 1,
				transition: {
					duration: 1,
				},
			});
		}
	};

	const generatedId = useId();

	return (
		<motion.div animate={controls} className={cn("opacity-0", className)}>
			{init && (
				<Particles
					id={id || generatedId}
					className={cn("h-full w-full")}
					particlesLoaded={particlesLoaded}
					options={{
						background: {
							color: {
								value: background || "#0d47a1",
							},
						},
						fullScreen: {
							enable: false,
							zIndex: 1,
						},
						particles: {
							color: {
								value: particleColor || "#ffffff",
							},
							move: {
								enable: true,
								speed: {
									min: 0.1,
									max: 1,
								},
							},
							number: {
								density: {
									enable: true,
									width: 400,
									height: 400,
								},
								value: particleDensity || 120,
							},
							opacity: {
								value: {
									min: 0.1,
									max: 1,
								},
								animation: {
									enable: true,
									speed: speed || 4,
									sync: false,
								},
							},
							size: {
								value: {
									min: minSize || 1,
									max: maxSize || 3,
								},
							},
							shape: {
								type: "circle",
							},
						},
						detectRetina: true,
					}}
				/>
			)}
		</motion.div>
	);
};
