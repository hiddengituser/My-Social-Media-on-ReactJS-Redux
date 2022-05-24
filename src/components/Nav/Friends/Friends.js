import React from "react";
import classes from './Nav.module.css';
import {NavLink} from "react-router-dom";

const setActiveClass = (s) => s.isActive ? classes.active : classes.item;

const Nav = () => {
    return (
        <nav className={classes.nav}>
            <ul>
                <li className={classes.item}>
                    <NavLink to="/profile" className={setActiveClass}>Profile</NavLink>
                </li>
                <li className={classes.item}>
                    <NavLink to="/dialogs" className={setActiveClass}>Messages</NavLink>
                </li>
                <li className={classes.item}>
                    <NavLink to="/news" className={setActiveClass}>News</NavLink>
                </li>
                <li className={classes.item}>
                    <NavLink to="/music" className={setActiveClass}>Music</NavLink>
                </li>
                <li className={classes.item}>
                    <NavLink to="/settings" className={setActiveClass}>Settings</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;