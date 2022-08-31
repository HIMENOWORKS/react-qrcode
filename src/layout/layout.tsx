import React from "react";
import './layout.scss';
import Navbar from "./navbar/navbar";

interface LayoutProps {
	children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<>
			<div className="layout-wrapper">
				<div className="navbar-layout">
                    <Navbar />
                </div>
				<div className="layout-container">
					<div className="main-layout">{children}</div>
				</div>
			</div>
		</>
	);
};
export default Layout;
