import React from 'react';
import './toolbar.css';

const Toolbar = props => (
    <div className="navContainer">
        <nav className="navLinks">
            <span onClick={props.drawerClickHandler} className="closeBtn">x</span>
            <ul>
                <li><a onClick={props.drawerClickHandler} href="#gigs">Gigs</a></li>
                <li onClick={props.drawerClickHandler} id="social"><a href="#a"> Social</a></li>
                <li><a onClick={props.drawerClickHandler} href="#a"> About</a></li>
                <li><a onClick={props.drawerClickHandler} href="#m">Music</a></li>
            </ul>
        </nav>
    </div>
)

export default Toolbar;