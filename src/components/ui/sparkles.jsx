"use client";
import React, { useId, useEffect, useState, useCallback } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { motion, useAnimation } from "framer-motion";
import { cn } from "../lib/utils";

export const SparklesCore = (props) => {
	const {
		id,
		className,
		background,
		minSize = 0.5,
		maxSize = 3,
		speed = 1,
		particleColor = "#ffffff",
		particleDensity = 35,
	} = props;

	const [init, setInit] = useState(false);
	const controls = useAnimation();
	const generatedId = useId();

	const particlesLoaded = useCallback(
		async (container) => {
			if (container) {
				await controls.start({
					opacity: 1,
					transition: {
						duration: 1,
					},
				});
			}
		},
		[controls]
	);

	useEffect(() => {
		initParticlesEngine(async (engine) => {
			await loadSlim(engine);
		}).then(() => {
			setInit(true);
		});
	}, []);

	if (!init) return null;

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={controls}
			className={cn("absolute inset-0 z-0", className)}
		>
			<Particles
				id={id || generatedId}
				particlesLoaded={particlesLoaded}
				options={{
					background: {
						color: {
							value: background || "transparent",
						},
					},
					fpsLimit: 60,
					interactivity: {
						events: {
							onClick: {
								enable: false,
							},
							onHover: {
								enable: false,
							},
						},
						modes: {
							push: {
								quantity: 4,
							},
							repulse: {
								distance: 200,
								duration: 0.4,
							},
						},
					},
					particles: {
						color: {
							value: particleColor,
						},
						links: {
							color: particleColor,
							distance: 150,
							enable: false,
							opacity: 0.5,
							width: 1,
						},
						move: {
							direction: "none",
							enable: true,
							outModes: {
								default: "out",
							},
							random: false,
							speed: speed,
							straight: false,
						},
						number: {
							density: {
								enable: true,
								area: 800,
							},
							value: particleDensity,
						},
						opacity: {
							value: 0.5,
						},
						shape: {
							type: "circle",
						},
						size: {
							value: { min: minSize, max: maxSize },
						},
					},
					detectRetina: true,
				}}
			/>
		</motion.div>
	);
};
