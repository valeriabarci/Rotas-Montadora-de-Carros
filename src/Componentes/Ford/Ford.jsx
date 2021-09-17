import React from "react";
import { Route } from "react-router-dom";
import Header from "../Header/Header"
import "./Ford.css";

function FordApp() {
	return (
		<div className="ford">
			<div>
				<h1>Página Ford</h1>
			</div>
			<div>
				<Route exact path="/ford" render={() => <Header />}></Route>
			</div>
		</div>
	);
}

export default FordApp;
