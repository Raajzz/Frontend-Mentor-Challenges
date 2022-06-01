import React from "react";
import { Helmet } from "react-helmet";
import "./RatingComponent.css";
import iconStar from "./assets/icon-star.svg";
import { Link } from "react-router-dom";

const RatingComponent = ({ rating, setRating }) => {
	console.log(rating);
	return (
		<>
			<Helmet>
				<title>Interactive Rating Component</title>
				<style>
					{`
          body{
            background-color:#141519;
            color: white;
          }
        `}
				</style>
			</Helmet>
			<div className="card-container">
				<div className="card">
					<div className="icon-container">
						<img src={iconStar} alt="star icon" className="icon" />
					</div>
					<div className="qn-req-container">
						<h1 className="question">How did we do?</h1>
						<p className="request">
							Please let us know how we did with your support reqest. All
							feedback is appreciated to help us imporve our offering!
						</p>
					</div>
					<ul
						onClick={(event) => {
							setRating(Number(event.target.innerHTML));
						}}
					>
						<li>1</li>
						<li>2</li>
						<li>3</li>
						<li>4</li>
						<li>5</li>
					</ul>
					{/* <button className="submit-btn">
						<Link to="/thankyou" className="submit-link">
							SUBMIT
						</Link>
					</button> */}
					<Link to="thankyou" className="submit-btn">
						SUBMIT
					</Link>
				</div>
			</div>
		</>
	);
};

export default RatingComponent;
