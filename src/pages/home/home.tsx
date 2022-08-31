import React from "react";
import "./home.scss";
import { createQrcode } from "../../@api/qrcode";

const HomePage: React.FC = () => {
	const [url, setUrl] = React.useState("");
	const [qrcode, setQrcode] = React.useState("");

	const handleGenerate = async () => {
		const qrcode = await createQrcode({
			content: url,
		});
		setQrcode(qrcode);
	};

	// medthod 1
	// const qrElement = React.useMemo(() => {
	// 	if (qrcode) {
	// 		return (
	// 			<div className="card-body">
	// 				<h1>Your QR Code</h1>
	// 				<div className="qr-preview">
	// 					<img src={qrcode} alt="" />
	// 				</div>
	// 				<div>
	// 					<button className="btn btn-success">Dowload</button>
	// 				</div>
	// 			</div>
	// 		);
	// 	} else {
	// 		return <></>;
	// 	}
	// }, [qrcode]);

	return (
		<>
			<div className="home-page">
				<div className="section-1">
					<div className="card">
						<div className="card-header">
							<h1>Place your url here!</h1>
							<div className="replace-url">
								<div className="url-input">
									<input onChange={(e) => setUrl(e.currentTarget.value)} type="text" placeholder="Replace you url here" />
								</div>
								<div className="button-input">
									<button onClick={handleGenerate} className="btn btn-primary">
										Generate
									</button>
								</div>
							</div>
						</div>
						{/* medthod 1 */}
						{/* {qrElement} */}
						{/* medthod 2 */}
						{qrcode && (
							<div className="card-body">
								<h1>Your QR Code</h1>
								<div className="qr-preview">
									<img src={qrcode} alt="" />
								</div>
								<div>
									<button className="btn btn-success">Dowload</button>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</>
	);
};
export default HomePage;
