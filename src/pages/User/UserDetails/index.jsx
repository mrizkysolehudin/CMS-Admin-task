import React, { useEffect, useState } from "react";
import Navbar from "../../../components/Global/Navbar";
import axiosClient from "../../../helpers/axiosClient";
import { useParams } from "react-router-dom";
import Alert from "../../../components/Global/Alert";
import CardUserDetails from "../../../components/User/CardUserDetails";

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
				<h1 className="text-center pt-20 pb-16 font-bold text-gray-200 text-4xl">
					User Details
				</h1>

				<section
					style={{ fontFamily: "Montserrat" }}
					className=" flex font-medium justify-center min-h-[63dvh]">
					{isLoading ? (
						<Alert text="Loading..." />
					) : !!user ? (
						<CardUserDetails user={user} />
					) : (
						<Alert />
					)}
				</section>
			</main>
		</div>
	);
};

export default UserDetailsPage;
