import React from "react";
import {Link} from "react-router-dom";

export default function Header() {
	return (
		<div className="menu">
			<nav className="navMenu">
				<li>
					<Link to="/">VOLTAR</Link>
				</li>
				<li>
					<Link to="/vw/brasilia">BRASILIA</Link>
				</li>
				<li>
					<Link to="#">FUSCA</Link>
				</li>
				<li>
					<Link to="#">KOMBI</Link>
				</li>
				<li>
					<Link to="#">POLO</Link>
				</li>
				<li>
					<Link to="#">GOL</Link>
				</li>
			</nav>
		</div>
	);
}
