import React from 'react';
import { black } from 'color-name';

const Navbar = () => {
    return (

        <nav>
            <div class="nav-wrapper" >
                <a href="#" class="brand-logo">TODO's APP</a>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li><a href="#">Welcome, Saheb Ghosh</a></li>
                    <li><a href="#">Logout</a></li>
                </ul>
            </div>
        </nav>

    );
}

export default Navbar;
