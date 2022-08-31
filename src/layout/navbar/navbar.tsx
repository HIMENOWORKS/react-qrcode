import React from "react";
import { Link } from "react-router-dom";
import "../layout.scss";

const Navbar: React.FC = () => {
	return (
		<div className="navbar">
			<Link to={""} className="navbar-brand">
				My QRCode
			</Link>
		</div>
	);
};
export default Navbar;
