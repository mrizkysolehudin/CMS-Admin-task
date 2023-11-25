import React, { useEffect, useState } from "react";
import Navbar from "../../../components/Global/Navbar";
import axiosClient from "../../../helpers/axiosClient";
import { useParams } from "react-router-dom";
import { formatDate } from "../../../utils/formatDate";
import Alert from "../../../components/Global/Alert";

const UserDetailsPage = () => {
	const { id } = useParams();

	const [user, setUser] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		getUsers(id);
	}, [id]);

	const getUsers = async (id) => {
		setIsLoading(true);
		await axiosClient()
			.get(`/user/${id}`)
			.then((res) => {
				setIsLoading(false);
				setUser(res.data.data);
			})
			.catch((err) => {
				setIsLoading(false);
				throw err;
			});
	};

	return (
		<div>
			<Navbar />

			<main className=" bg-indigo-400">
				<h1 className="text-center pt-20 pb-16 font-bold text-gray-300 text-4xl">
					User Details
				</h1>

				<section
					style={{ fontFamily: "Montserrat" }}
					className=" flex font-medium justify-center min-h-[63dvh]">
					{isLoading ? (
						<Alert text="Loading..." />
					) : !!user ? (
						<article className="w-64 mx-auto text-gray-300 bg-indigo-900 rounded-2xl h-min px-8 py-6 shadow-lg">
							<div className=" ">
								<h2 className="text-white font-bold text-2xl tracking-wide">
									{user?.name}
								</h2>
							</div>
							<p className=" font-semibold mt-2.5">{user?.address}</p>
							<p className="text-emerald-400 font-semibold mt-2.5">
								{user?.gender === "l" ? "Pria" : "Wanita"}
							</p>
							<p className=" font-semibold mt-2.5">
								{" "}
								{formatDate(user?.born_date, { month: "long" })}
							</p>
							<div className="h-1 w-full bg-black mt-8 rounded-full">
								<div className="h-1 rounded-full  bg-yellow-500 " />
							</div>
							<div className="mt-3 text-white text-xs">
								<span className="text-gray-400 ">
									Tanggal dibuat:
									<span className="ml-1">
										{formatDate(user?.created_at, { includeTime: true })}
									</span>
								</span>
							</div>
						</article>
					) : (
						<Alert />
					)}
				</section>
			</main>
		</div>
	);
};

export default UserDetailsPage;
