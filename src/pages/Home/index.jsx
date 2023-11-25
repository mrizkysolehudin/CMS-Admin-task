import React, { useEffect, useState } from "react";
import Navbar from "../../components/Global/Navbar";
import "react-datepicker/dist/react-datepicker.css";
import axiosClient from "../../helpers/axiosClient";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
	return (
		<div>
			<Navbar />
			<h1 className="text-3xl font-bold underline">Hello world!</h1>
		</div>
	);
};

export default HomePage;
