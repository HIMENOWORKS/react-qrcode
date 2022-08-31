import React from "react";
import "./home.scss";

const HomePage: React.FC = () => {
	return (
		<>
			<div className="home-page">
				<div className="section-1">
					<div className="card">
						<div className="card-header">
							<h1>Place your url here!</h1>
							<div className="replace-url">
								<div className="url-input">
									<input type="text" placeholder="Replace you url here" />
								</div>
								<div className="button-input">
									<button className="btn btn-primary">Generate</button>
								</div>
							</div>
						</div>
						<div className="card-body"></div>
					</div>
				</div>
			</div>
		</>
	);
};
export default HomePage;
