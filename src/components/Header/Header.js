import React from "react";
import classes from './Header.module.css';

const Header = () => {
    return (
        <header className={classes.header}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/59/Logo-Logo.svg" alt="logo"/>
        </header>
    )
}

export default Header;