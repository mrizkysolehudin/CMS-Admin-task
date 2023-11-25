import React, { useEffect, useState } from "react";
import Navbar from "../../../components/Global/Navbar";
import axiosClient from "../../../helpers/axiosClient";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const EditUserPage = () => {
	const { id } = useParams();
	const navigate = useNavigate();

	const [user, setUser] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [newUser, setNewUser] = useState({
		name: "",
		address: "",
		gender: "",
		born_date: "",
	});

	useEffect(() => {
		getUsers(id);
	}, [id]);

	useEffect(() => {
		if (user) {
			setNewUser({
				name: user.name,
				address: user.address,
				gender: user.gender,
				born_date: user.born_date,
			});
		}
	}, [user]);

	const handleChange = (e) => {
		setNewUser({
			...newUser,
			[e.target.name]: e.target.value,
		});
	};

	const getUsers = async (id) => {
		setIsLoading(true);
		await axiosClient()
			.get(`/user/${id}`)
			.then((res) => {
				setIsLoading(false);
				setUser(res?.data?.data);
			})
			.catch((err) => {
				setIsLoading(false);
				throw err;
			});
	};

	const handleUpdate = async (e) => {
		e.preventDefault();
		try {
			const response = await axiosClient().put(`/user/${id}`, newUser);

			if (response.data) {
				Swal.fire({
					text: "Update user success.",
					icon: "success",
				});
			}
			setTimeout(() => {
				navigate("/");
			}, 400);
		} catch (error) {
			Swal.fire({
				text: "Update user error.",
				icon: "error",
			});
		}
	};

	return (
		<div>
			<Navbar />

			<div className="min-h-screen flex items-center justify-center bg-indigo-200 pb-2 px-4 sm:px-6 lg:px-8">
				<div className="max-w-md w-full space-y-8">
					<div className="flex justify-center items-center gap-4">
						<img
							className="h-12 w-auto"
							src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
							alt="Workflow"
						/>
						<h2 className=" text-center text-3xl font-extrabold text-indigo-600">
							Edit User
						</h2>
					</div>
					<div className=" bg-white max-w-md rounded overflow-hidden shadow-xl p-5">
						<form className="space-y-4" onSubmit={handleUpdate}>
							<div className="rounded-md shadow-sm -space-y-px">
								<div className="grid gap-6">
									<div className="col-span-12">
										<label
											htmlFor="first_name"
											className="block text-sm font-medium text-gray-700">
											Nama
										</label>
										<input
											type="text"
											name="name"
											value={newUser.name}
											onChange={handleChange}
											id="first_name"
											autoComplete="given-name"
											className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
										/>
									</div>
									<div className="col-span-12">
										<label
											htmlFor="address"
											className="block text-sm font-medium text-gray-700">
											Alamat
										</label>
										<input
											type="text"
											name="address"
											value={newUser.address}
											onChange={handleChange}
											id="address"
											className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
										/>
									</div>

									<div className="col-span-12">
										<div className="main flex border shadow-sm border-gray-300 rounded-full overflow-hidden m-4 select-none">
											<div className=" py-3 my-auto px-5 bg-blue-500 text-white text-sm font-semibold mr-3">
												Jenis Kelamin
											</div>
											<label className="flex radio p-2 cursor-pointer">
												<input
													className="my-auto transform scale-105"
													type="radio"
													name="gender"
													onChange={handleChange}
													value="l"
													checked={newUser.gender === "l"}
												/>
												<div className=" px-2">Pria</div>
											</label>
											<label className="flex radio p-2 cursor-pointer">
												<input
													className={`my-auto transform scale-105 checked:bg-blue-600`}
													type="radio"
													onChange={handleChange}
													name="gender"
													value="p"
													checked={newUser.gender === "p"}
												/>

												<span className=" px-2">Wanita</span>
											</label>
										</div>
									</div>

									<div className="col-span-12 gap-4 flex items-center">
										<label>Tanggal lahir</label>
										<input
											type="date"
											name="born_date"
											onChange={handleChange}
											value={newUser.born_date}
											className="border-gray-300 border focus:ring-indigo-500 focus:border-indigo-500 shadow-sm text-gray-700 placeholder:text-black text-sm"
										/>
									</div>
								</div>
							</div>

							<div className="pt-6">
								<button
									disabled={isLoading}
									type="submit"
									className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
									Update
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default EditUserPage;
