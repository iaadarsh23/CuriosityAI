import React from "react";
import Lottie from "lottie-react";
import { motion as Motion } from "framer-motion";

// Optimized animation with fewer layers and faster animation cycles
const loadingAnimation = {
	v: "5.7.4",
	fr: 60,
	ip: 0,
	op: 60, // Reduced from 120 to 60 for faster cycles
	w: 300,
	h: 300,
	nm: "Optimized Loading",
	ddd: 0,
	assets: [],
	layers: [
		{
			ddd: 0,
			ind: 1,
			ty: 4,
			nm: "Circle",
			sr: 1,
			ks: {
				o: { a: 0, k: 100, ix: 11 },
				r: {
					a: 1,
					k: [
						{
							i: { x: [0.5], y: [0.5] },
							o: { x: [0.167], y: [0.167] },
							t: 0,
							s: [0],
						},
						{ t: 59, s: [360] },
					],
					ix: 10,
				},
				p: { a: 0, k: [150, 150, 0], ix: 2, l: 2 },
				a: { a: 0, k: [0, 0, 0], ix: 1, l: 2 },
				s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
			},
			ao: 0,
			shapes: [
				{
					ty: "gr",
					it: [
						{
							d: 1,
							ty: "el",
							s: { a: 0, k: [80, 80], ix: 2 },
							p: { a: 0, k: [0, 0], ix: 3 },
							nm: "Ellipse Path 1",
							mn: "ADBE Vector Shape - Ellipse",
							hd: false,
						},
						{
							ty: "st",
							c: { a: 0, k: [1, 1, 1, 1], ix: 3 },
							o: { a: 0, k: 100, ix: 4 },
							w: { a: 0, k: 8, ix: 5 },
							lc: 2,
							lj: 1,
							ml: 4,
							bm: 0,
							nm: "Stroke 1",
							mn: "ADBE Vector Graphic - Stroke",
							hd: false,
						},
						{
							ty: "tr",
							p: { a: 0, k: [0, 0], ix: 2 },
							a: { a: 0, k: [0, 0], ix: 1 },
							s: { a: 0, k: [100, 100], ix: 3 },
							r: { a: 0, k: 0, ix: 6 },
							o: { a: 0, k: 100, ix: 7 },
							sk: { a: 0, k: 0, ix: 4 },
							sa: { a: 0, k: 0, ix: 5 },
							nm: "Transform",
						},
					],
					nm: "Ellipse 1",
					np: 2,
					cix: 2,
					bm: 0,
					ix: 1,
					mn: "ADBE Vector Group",
					hd: false,
				},
			],
			ip: 0,
			op: 60,
			st: 0,
			bm: 0,
		},
	],
};

const LoadingAnimation = () => {
	return (
		<Motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.15 }} // Faster fade transitions
			className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
		>
			<div className="w-16 h-16">
				{" "}
				{/* Reduced from 24 to 16 for smaller animation */}
				<Lottie
					animationData={loadingAnimation}
					loop={true}
					autoplay={true}
					rendererSettings={{
						preserveAspectRatio: "xMidYMid slice",
						progressiveLoad: true, // Progressive loading for better performance
					}}
				/>
			</div>
		</Motion.div>
	);
};

export default LoadingAnimation;
