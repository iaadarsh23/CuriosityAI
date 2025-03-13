import React from "react";

const Button = ({ href, onClick, children }) => {
	return (
		<div>
			<button
				onClick={onClick}
				className="relative inline-flex  w-full h-12 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 z-10"
			>
				<span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
				<span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-7 py-1  font-medium text-white text-sm backdrop-blur-3xl">
					{children}
				</span>
			</button>
		</div>
	);
};

export default Button;
