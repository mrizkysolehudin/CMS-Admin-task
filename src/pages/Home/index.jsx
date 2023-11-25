import React, { useEffect, useState } from "react";
import Navbar from "../../components/Global/Navbar";
import axiosClient from "../../helpers/axiosClient";
import { Link } from "react-router-dom";
import { formatDate } from "../../utils/formatDate";
import Footer from "../../components/Global/Footer";
import Swal from "sweetalert2";

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
				<>
					<section className="relative pt-16 bg-blueGray-50">
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
										<thead className="">
											<tr>
												<th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-indigo-800 text-indigo-300 border-indigo-700">
													No.
												</th>
												<th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-indigo-800 text-indigo-300 border-indigo-700">
													Nama
												</th>
												<th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-indigo-800 text-indigo-300 border-indigo-700">
													Alamat
												</th>
												<th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-indigo-800 text-indigo-300 border-indigo-700">
													Jenis kelamin
												</th>
												<th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-indigo-800 text-indigo-300 border-indigo-700">
													Tanggal lahir
												</th>
												<th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-indigo-800 text-indigo-300 border-indigo-700">
													Tanggal input
												</th>
												<th className="text-center align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold  bg-indigo-800 text-indigo-300 border-indigo-700">
													Actions
												</th>
											</tr>
										</thead>

										<tbody className={`relative }`}>
											{loading ? (
												<tr>
													<td>Loading...</td>
												</tr>
											) : users?.length > 0 ? (
												users?.map((user, index) => {
													return (
														<tr key={index} className="hover:bg-indigo-400/90 bg-indigo-400">
															<td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
																{index + 1}
															</td>
															<td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
																{user?.name}
															</td>
															<td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
																{user?.address}
															</td>
															<td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
																{user?.gender === "l" ? "Pria" : "Wanita"}
															</td>
															<td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
																{formatDate(user?.born_date, { withDot: true })}
															</td>
															<td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
																{formatDate(user?.created_at, { includeTime: true })}
															</td>
															<td className="relative flex justify-center  border-t-0 px-6 border-l-0 border-r-0 text-xs whitespace-nowrap p-7 text-right">
																<div className=" py-1 px-3 gap-x-3 flex text-sm">
																	<Link
																		to={`/user/${user?.id}`}
																		className=" bg-green-700 hover:bg-green-800 rounded-full w-7 h-6 flex justify-center items-center">
																		<i className="fas fa-eye text-gray-100" />
																	</Link>
																	<Link
																		to={`/user/${user?.id}/edit`}
																		className=" bg-yellow-700 hover:bg-yellow-800 flex items-center justify-center rounded-full w-6 h-6">
																		<i className="fas fa-pen text-gray-100 text-xs" />
																	</Link>
																	<button
																		onClick={() => handleDelete(user.id)}
																		className=" bg-red-500 hover:bg-red-600 rounded-full w-6 h-6 flex justify-center items-center">
																		<i className="fas fa-trash text-gray-100 text-xs" />
																	</button>
																</div>
															</td>
														</tr>
													);
												})
											) : (
												<tr className="text-right w-full h-20 ">
													<td colSpan="4">No data</td>
												</tr>
											)}
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</section>
				</>
			</main>

			<Footer />
		</div>
	);
};

export default HomePage;
