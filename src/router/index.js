import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/Home";
import LoginPage from "../pages/Login";
import RegisterPage from "../pages/Register";
import PrivateRoute from "../components/Global/PrivateRoute";
import NotFoundPage from "../pages/NotFound";
import UserDetailsPage from "../pages/User/UserDetails";
import EditUserPage from "../pages/User/EditUser";

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				{/* public routes */}
				<Route>
					<Route path="/login" element={<LoginPage />} />
					<Route path="/register" element={<RegisterPage />} />

					<Route path="*" element={<NotFoundPage />} />
				</Route>

				{/* private routes */}
				<Route element={<PrivateRoute />}>
					<Route path="/" element={<HomePage />} />
					<Route path="/user/:id" element={<UserDetailsPage />} />
					<Route path="/user/:id/edit" element={<EditUserPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
