import React from "react";

const Alert = ({ text = "No Data", isTable }) => {
	if (isTable) {
		return (
			<tr className="text-right w-full h-20 ">
				<td colSpan="4">{text}</td>
			</tr>
		);
	}

	return (
		<div>
			<span>{text}</span>{" "}
		</div>
	);
};

export default Alert;
