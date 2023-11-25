import React, { useEffect, useState } from "react";
import Navbar from "../../components/Global/Navbar";
import axiosClient from "../../helpers/axiosClient";
import { Link } from "react-router-dom";
import Footer from "../../components/Global/Footer";
import Swal from "sweetalert2";
import TableBody from "../../components/Home/TableBody";
import TableHead from "../../components/Home/TableHead";

const HomePage = () => {
	const [users, setUsers] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		getUsers();
	}, []);

	const getUsers = async () => {
		setLoading(true);
		await axiosClient()
			.get("/user")
			.then((res) => {
				setLoading(false);
				setUsers(res?.data?.data);
			})
			.catch((err) => {
				setLoading(false);
				throw err;
			});
	};

	const handleDelete = async (id) => {
		const result = await Swal.fire({
			title: "Delete Confirmation",
			text: "Are you sure you want to delete this item?",
			icon: "warning",
			showCancelButton: true,
			confirmButtonText: "Delete",
			cancelButtonText: "Cancel",
			confirmButtonColor: "#d33",
		});

		if (result.isConfirmed) {
			axiosClient()
				.delete(`/user/${id}`)
				.then(() => {
					Swal.fire({
						text: "Delete success.",
						icon: "success",
					});
					getUsers();
				})
				.catch(() => {
					Swal.fire({
						text: "Delete error.",
						icon: "error",
					});
				});
		} else if (result.dismiss === Swal.DismissReason.cancel) {
			return;
		}
	};

	return (
		<div>
			<Navbar />

			<main>
				<div className="relative pt-16 bg-blueGray-50">
					<div className="w-full  px-4 min-h-[44dvh]">
						<div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-indigo-900 text-white ">
							<div className="rounded-t mb-0 px-4 py-3 border-0 ">
								<div className="flex flex-wrap items-center">
									<div className="relative w-full px-4 max-w-full flex justify-between ">
										<h3 className="font-semibold text-lg text-white">CMS Admin </h3>

										<Link
											to="/user"
											className="bg-green-700 hover:bg-green-800 px-2 pb-0.5 rounded">
											Tambah User
										</Link>
									</div>
								</div>
							</div>
							<div className="block w-full overflow-x-auto ">
								<table className="items-center w-full bg-transparent border-collapse">
									<TableHead />

									<TableBody
										loading={loading}
										users={users}
										handleDelete={handleDelete}
									/>
								</table>
							</div>
						</div>
					</div>
				</div>
			</main>

			<Footer />
		</div>
	);
};

export default HomePage;
