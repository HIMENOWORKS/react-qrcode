import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import ApplicationRoute from "./application.route";
import Layout from "./layout/layout";
import axios from "axios";

function App() {
	axios.defaults.baseURL = "http://localhost:8000";
	
	return (
		<BrowserRouter>
			<Layout>
				<ApplicationRoute />
			</Layout>
		</BrowserRouter>
	);
}

export default App;
