import React from "react";
import { Helmet } from "react-helmet";
import "./RatingComponent.css";

const RatingComponent = () => {
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
					<h1 className="question">How did we do?</h1>
					<p className="request">
						Please let us know how we did with your support reqest. All feedback
						is appreciated to help us imporve our offering!
					</p>
					<div className="rating">
						
					</div>
				</div>
			</div>
		</>
	);
};

export default RatingComponent;
