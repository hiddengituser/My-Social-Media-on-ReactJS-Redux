import React from "react";
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header className={classes.header}>
            <NavLink to='/profile' className={classes.headerNav}>
                <img src="https://seeklogo.com/images/S/snapsvg-logo-8E936C9AE9-seeklogo.com.png" alt="logo"/>
                <h1>Social Media</h1>
            </NavLink>
        </header>
    )
}

export default Header;