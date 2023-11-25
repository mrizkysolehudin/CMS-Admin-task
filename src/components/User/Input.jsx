import React from "react";

const Input = ({ value, handleChange, label, type, name }) => {
	return (
		<div className="col-span-12">
			<label className="block text-sm font-medium text-gray-700">{label}</label>
			<input
				type={type}
				name={name}
				value={value}
				onChange={handleChange}
				autoComplete="given-name"
				className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
			/>
		</div>
	);
};

export default Input;
