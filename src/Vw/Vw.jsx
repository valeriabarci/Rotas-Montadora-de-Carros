import React from "react";
import {Route, Switch} from "react-router-dom";
import Header from "./VwHeader";
import "./Vw.css";

function VwApp() {
	return (
		<div className="vw">
			<div>
				<h1>Página VW</h1>
			</div>
			<div>
				<Switch>
					<Route exact path="/vw" render={() => <Header />}></Route>
				</Switch>
			</div>
		</div>
	);
}

export default VwApp;
