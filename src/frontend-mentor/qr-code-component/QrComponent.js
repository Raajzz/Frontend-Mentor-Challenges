import React from "react";
import Helmet from "react-helmet";
import "./QrComponent.css";
import qrCodeImage from "./assets/image-qr-code.png";

const QrComponent = () => {
	return (
		<>
			<Helmet>
				<style>
					{`
          
            body{
              background-color: hsl(212, 45%, 89%);
							font-family: 'Outfit', sans-serif;
            }

          `}
				</style>
			</Helmet>
			{/* CARD */}
			<div className="card-container">
				<div className="card">
					<img src={qrCodeImage} alt="" />
					<div className="text-part">
						<h1>Improve your front-end skills by building projects</h1>
						<p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default QrComponent;
