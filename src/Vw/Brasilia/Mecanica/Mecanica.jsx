import React from "react";
import {Route, Switch} from "react-router-dom";
import Header from "./MecanicaHeader";

function MecanicaApp() {
	return (
		<div className="App">
			<div>
				<h1>Página Mecânica</h1>
			</div>
			<main>
				<Switch>
					<Route
						exact
						path="/vw/brasilia/mecanica"
						render={() => <Header />}
					></Route>
				</Switch>
			</main>
		</div>
	);
}
export default MecanicaApp;
