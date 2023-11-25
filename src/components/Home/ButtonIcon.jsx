import React from "react";
import { Link } from "react-router-dom";

const ButtonIcon = ({ to, icon, className, type, onClick }) => {
	if (type === "link") {
		return (
			<Link
				to={to}
				className={`rounded-full w-7 h-6 flex justify-center items-center ${className}`}>
				{icon}
			</Link>
		);
	}
	return (
		<button
			onClick={onClick}
			className={`rounded-full w-7 h-6 flex justify-center items-center ${className}`}>
			{icon}
		</button>
	);
};

export default ButtonIcon;
