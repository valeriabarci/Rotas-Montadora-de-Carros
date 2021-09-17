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
					<Link to="/vw/brasilia">VOLTAR</Link>
				</li>
				<li>
					<Link to="#">MOTOR</Link>
				</li>
				<li>
					<Link to="#">PEDAIS</Link>
				</li>
				<li>
					<Link to="#">CÂMBIO</Link>
				</li>
				<li>
					<Link to="#">VOLANTE</Link>
				</li>
				<li>
					<Link to="#">SENSORES</Link>
				</li>
			</nav>
		</div>
	);
}
