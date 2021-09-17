import React from 'react'
import { Link } from 'react-router-dom'

import './Header.css'

export default function Header() {
    return (
        <div className="menu">
            <nav className="navMenu">
                <ul>
                    <li> <Link to="/"> HOME </Link> </li>
                    <li> <Link to="/fiat"> FIAT </Link></li>
                    <li> <Link to="/ford"> FORD </Link></li>
                    <li> <Link to="/chevrolet"> CHEVROLET </Link></li>
                    <li> <Link to="/vw"> VW </Link></li>
                    <li> <Link to="/hyundai"> HYUNDAI </Link></li>
                </ul>
            </nav>
        </div>
    )
}