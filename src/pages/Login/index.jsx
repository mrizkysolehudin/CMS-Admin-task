import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthSVG from "../../assets/images/AuthSVG";
import Swal from "sweetalert2";
import axiosClient from "../../helpers/axiosClient";

const LoginPage = () => {
	const navigate = useNavigate();

	const [data, setData] = useState(null);

	const handleChange = (e) => {
		setData({
			...data,
			[e.target.name]: e.target.value,
		});
	};

	const handleLogin = async (e) => {
		e.preventDefault();
		try {
			if (!data?.email.trim() || !data?.password.trim()) {
				return Swal.fire({
					text: "Name and Password is required",
					icon: "error",
				});
			}

			const response = await axiosClient().post("/auth/login", data);
			if (response.data) {
				navigate("/");
				localStorage.setItem("token", response.data.token);

				Swal.fire({
					text: "Login success.",
					icon: "success",
				});
			}
		} catch (error) {
			Swal.fire({
				text: "Wrong email or password.",
				icon: "error",
			});
		}
	};

	useEffect(() => {
		const token = localStorage.getItem("token");

		if (token) {
			navigate("/");
		}
	}, [navigate]);

	return (
		<div>
			<div className="lg:flex">
				<div className="lg:w-1/2 xl:max-w-screen-sm">
					<div className="py-12 bg-indigo-100 lg:bg-white flex justify-center lg:justify-start lg:px-12">
						<div className="cursor-pointer flex items-center">
							<div className="text-2xl text-indigo-800 tracking-wide ml-2 font-semibold">
								CMS Admin
							</div>
						</div>
					</div>
					<div className="mt-10 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl">
						<h2
							className="text-center text-4xl text-indigo-900 font-display font-semibold lg:text-left xl:text-5xl
              xl:text-bold">
							Log in
						</h2>
						<div className="mt-12">
							<form onSubmit={handleLogin}>
								<div>
									<div className="text-sm font-bold text-gray-700 tracking-wide">
										Email Address
									</div>
									<input
										className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
										name="email"
										type="email"
										onChange={handleChange}
										placeholder="jono@gmail.com"
									/>
								</div>
								<div className="mt-8">
									<div className="flex justify-between items-center">
										<div className="text-sm font-bold text-gray-700 tracking-wide">
											Password
										</div>
									</div>
									<input
										className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
										name="password"
										type="password"
										onChange={handleChange}
										placeholder="Enter your password"
									/>
								</div>
								<div className="mt-10">
									<button
										type="submit"
										className="bg-indigo-500 text-gray-100 p-4 w-full rounded-full tracking-wide
                          font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600
                          shadow-lg">
										Log In
									</button>
								</div>
							</form>
							<div className="mt-12 text-sm font-display font-semibold text-gray-700 text-center">
								Don't have an account ?{" "}
								<Link
									to="/register"
									className="cursor-pointer underline text-indigo-600 hover:text-indigo-800">
									Register here
								</Link>
							</div>
						</div>
					</div>
				</div>
				<div className="hidden lg:flex items-center justify-center bg-indigo-100 flex-1 h-screen">
					<div className="max-w-xs transform duration-200 hover:scale-110 cursor-pointer">
						<AuthSVG />
					</div>
				</div>
			</div>
		</div>
	);
};

export default LoginPage;
