import React from "react";
import classes from './Nav.module.css';
import {NavLink} from "react-router-dom";
import Friends from "./Friends/Friends";

const setActiveClass = (s) => s.isActive ? classes.active : classes.item;

const Nav = (props) => {
    return (
        <div className={classes.nav}>
            <nav>
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
                    <li className={classes.item}>
                        <NavLink to="/users" className={setActiveClass}>Users</NavLink>
                    </li>
                </ul>
            </nav>
            <div className={classes.friends}>
                <Friends dialogsData={props.dialogsData}/>
            </div>
        </div>
    )
}

export default Nav;