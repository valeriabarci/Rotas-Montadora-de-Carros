import React from "react";
import {Link} from "react-router-dom";

export default function Header() {
	return (
		<div className="menu">
			<nav className="navMenu">
				<li>
					<Link to="/">MENU</Link>
				</li>
				<li>
					<Link to="/vw">VOLTAR</Link>
				</li>
				<li>
					<Link to="/vw/brasilia/mecanica">MECÂNICA</Link>
				</li>
				<li>
					<Link to="#">ELÉTRICA</Link>
				</li>
				<li>
					<Link to="#">ELETRÔNICA</Link>
				</li>
				<li>
					<Link to="#">SUSPENSÃO</Link>
				</li>
			</nav>
		</div>
	);
}
