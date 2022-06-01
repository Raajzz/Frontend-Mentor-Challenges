import React from "react";
import Helmet from "react-helmet";
import "./QrComponent.css"
import qrCodeImage from "./assets/image-qr-code.png"

const QrComponent = () => {
	return (
		<>
			<Helmet>
				<style>
					{`
          
            body{
              background-color: hsl(212, 45%, 89%);
            }

          `}
				</style>
			</Helmet>
			{/* CARD */}
      <div className="card-container">
        <div className="card">
          <img src={qrCodeImage} alt="" />
        </div>
      </div>
		</>
	);
};

export default QrComponent;
