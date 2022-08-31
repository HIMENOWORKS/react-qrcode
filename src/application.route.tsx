import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/home";

function ApplicationRoute(): JSX.Element {
	return (
		<Routes>
			<Route path="" element={<HomePage />} />
		</Routes>
	);
}

export default ApplicationRoute;
