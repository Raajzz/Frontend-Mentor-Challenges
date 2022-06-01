import React, { useState } from "react";
import RatingComponent from "./components/RatingComponent";
import ThankYouComponent from "./components/ThankYouComponent";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
	const [rating, setRating] = useState(0);

	return (
		<Router>
			<Routes>
				<Route path="/" element={<RatingComponent setRating={setRating} />} />
				<Route
					path="/thankyou"
					element={<ThankYouComponent rating={rating} />}
				/>
			</Routes>
		</Router>
	);
};

export default App;
