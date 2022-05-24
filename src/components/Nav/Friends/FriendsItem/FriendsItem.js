import React from "react";
import classes from './Friends.module.css';
import {NavLink} from "react-router-dom";

const setActiveClass = (s) => s.isActive ? classes.active : classes.item;

const Friends = () => {
    return (
        <div>
            <p>Friends</p>
            <div>
                FriendsInner
            </div>
        </div>
    )
}

export default Friends;