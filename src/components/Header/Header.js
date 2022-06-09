import React from "react";
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={classes.header}>
            <NavLink to='/profile' className={classes.headerNav}>
                <img src="https://seeklogo.com/images/S/snapsvg-logo-8E936C9AE9-seeklogo.com.png" alt="logo"/>
                <h1>Social Media</h1>
            </NavLink>
            <div className={classes.loginBlock}>
                {props.isAuth ? props.login : <NavLink to="/login">Login</NavLink>}
            </div>
        </header>
    )
}

export default Header;