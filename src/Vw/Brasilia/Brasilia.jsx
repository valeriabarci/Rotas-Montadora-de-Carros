import React from "react";
import {Route, Switch} from "react-router-dom";
import Header from "./BrasiliaHeader";

function BrasiliaApp() {
	return (
		<div className="brasilia">
			<div>
				<h1>Página Brasília</h1>
			</div>
			<main>
				<Switch>
					<Route exact path="/vw/brasilia" render={() => <Header />}></Route>
				</Switch>
			</main>
		</div>
	);
}

export default BrasiliaApp;
