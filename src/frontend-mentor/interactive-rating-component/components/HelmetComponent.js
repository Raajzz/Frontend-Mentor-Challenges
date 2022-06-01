import React from "react";
import { Helmet } from "react-helmet";

const HelmetComponent = () => {
	return (
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
	);
};

export default HelmetComponent;
