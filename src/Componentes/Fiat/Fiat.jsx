import React from "react";
import {Route, Switch} from "react-router-dom";
import Header from "../Header/Header"
import "./Fiat.css";

function FiatApp() {
	return (
		<div className="fiat">
			<div>
			<div>
				<h1>Página Fiat</h1>
			</div>
				<Switch>
					<Route
						exact
						path="/fiat"
						render={() => <Header />}
					></Route>
				</Switch>
			</div>
		</div>
	);
}

export default FiatApp;
