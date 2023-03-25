import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <nav className="site-wrapper">

            <ul className="navigation-wrapper">
                <Link to="/" className="nav-link"><li>concept</li></Link>
                <Link to="/visual" className="nav-link"><li>visual</li></Link>
                <Link to="/proto" className="nav-link"><li>prototype</li></Link>
            </ul>
            <h1>geometry of the city</h1>
        </nav>

    );
}

export default Nav;
