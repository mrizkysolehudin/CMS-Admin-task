import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/Home";
import LoginPage from "../pages/Login";
import RegisterPage from "../pages/Register";
import PrivateRoute from "../components/Global/PrivateRoute";
import NotFoundPage from "../pages/NotFound";

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
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
