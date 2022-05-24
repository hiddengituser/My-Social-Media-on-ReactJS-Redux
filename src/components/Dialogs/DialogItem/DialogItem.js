import React from "react";
import classes from "./../Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {

    const setActiveDialog = (active) => active.isActive ? classes.activeDialog : classes.dialog;

    return (
        <NavLink to={"/dialogs/" + props.id} className={setActiveDialog}>
            <NavLink to={"/dialogs/" + props.id}><img src={props.avatar} alt="avatar"
                                                      className={classes.avatar}/></NavLink>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </NavLink>
    )
}

export default DialogItem;