import React from 'react';
import './toolbar.css';

const Toolbar = props => (
    <div className="navContainer">
        <nav className="navLinks">
            <a className="closeBtn">x</a>
            <ul>
                <li><a href="#gigs">Gigs</a></li>
                <li id="social"><a href="#a"> Social</a></li>
                <li><a href="#a"> About</a></li>
                <li><a href="#m">Music</a></li>
            </ul>
        </nav>
    </div>
)

export default Toolbar;