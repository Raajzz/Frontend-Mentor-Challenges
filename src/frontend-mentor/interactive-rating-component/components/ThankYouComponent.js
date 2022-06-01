import React from "react";
import HelmetComponent from "./HelmetComponent";
import "./Component.css";
import "./ThankYouComponent.css";
import ThankYouIcon from "../assets/illustration-thank-you.svg";

const ThankYouComponent = ({ rating }) => {
	return (
		<>
			<HelmetComponent />
			<div className="card-container">
				<div className="card">
					<img src={ThankYouIcon} alt="Thank You Icon" className="image-tag" />
					{/* selection tag */}
					<div className="rating-container">
						<div className="selection">
							<p className="bgn-styling">You selected {rating} out of 5</p>
						</div>
					</div>
					<div className="content-container">
						<h1>Thank you!</h1>
						<p>
							We appreciate you taking the time to give a rating.
							If you ever need more support, don't hesitate to get in touch!
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default ThankYouComponent;
