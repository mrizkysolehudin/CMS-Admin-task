import axios from "axios";
import { baseUrl } from "./baseUrl";
import Swal from "sweetalert2";

const handleError = (error, navigate) => {
	if (error.response.status >= 400 && error.response.status < 500) {
		localStorage.removeItem("token");
		navigate("/login");
		Swal.fire({
			title: "Please log in again...",
			icon: "error",
		});
	} else {
		Swal.fire({
			text: "Sorry, an error occurred. Please try again later.",
			icon: "error",
		});
	}
};

const axiosClient = (navigate) => {
	const createAxiosClient = axios.create({
		baseURL: baseUrl,
	});

	createAxiosClient.interceptors.request.use((config) => {
		const token = localStorage.getItem("token");

		config.headers.Authorization = `Bearer ${token}`;
		return config;
	});

	createAxiosClient.interceptors.response.use(
		(response) => response,
		(error) => handleError(error, navigate),
	);

	return createAxiosClient;
};

export default axiosClient;
