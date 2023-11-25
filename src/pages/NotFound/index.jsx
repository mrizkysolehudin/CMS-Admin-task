import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
	return (
		<div className="min-h-screen relative flex items-center justify-center bg-indigo-800 pb-2 px-4 sm:px-6 lg:px-8">
			<Link
				to="/"
				className="absolute top-[10%] left-[10%] bg-black hover:bg-gray-900/80 p-2 text-white rounded-md font-semibold">
				Go to Home
			</Link>

			<div className="text-center text-4xl text-gray-200">
				<h1 className="font-bold ">404 - Not Found</h1>
				<p>The page you are looking for does not exist.</p>
			</div>
		</div>
	);
};

export default NotFoundPage;
