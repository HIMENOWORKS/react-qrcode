import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import ApplicationRoute from "./application.route";
import Layout from "./layout/layout";

function App() {
	return (
		<BrowserRouter>
			<Layout>
				<ApplicationRoute />
			</Layout>
		</BrowserRouter>
	);
}

export default App;
