import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <nav className="site-wrapper">
            <ul className="navigation-wrapper">
                <Link to="/" className="nav-link"><li>geometry of the city</li></Link>
                <Link to="/about" className="nav-link"><li>about</li></Link>
            </ul>
        </nav>

    );
}

export default Nav;
