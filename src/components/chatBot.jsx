import React from "react";
import { useForm } from "react-hook-form";
import Button from "./button";

const ChatBot = () => {
	const {
		register,
		handleSubmit,

		formState: { errors },
	} = useForm();

	//onsubmit funciton
	function onSubmit(data) {
		console.log(data);
	}
	return (
		<div className="p-4 flex justify-center items-center">
			<form onSubmit={handleSubmit(onSubmit)} className="">
				<label className="block mb-2">Type To Chat</label>
				<input
					type="text"
					aria-label="Type To chat"
					className="border p-2 rounded w-full"
					{...register("chatInput")}
				></input>
				<Button children={"submit"} type="submit" />
			</form>
		</div>
	);
};

export default ChatBot;
