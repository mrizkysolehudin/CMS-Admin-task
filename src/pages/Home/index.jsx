import React from "react";
import Navbar from "../../components/Global/Navbar";
import "react-datepicker/dist/react-datepicker.css";

const HomePage = () => {
	return (
		<div>
			<Navbar />
			<h1 className="text-3xl font-bold underline">Hello world!</h1>
		</div>
	);
};

export default HomePage;
