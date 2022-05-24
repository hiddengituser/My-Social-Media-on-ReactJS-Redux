import React from "react";
import classes from './FriendsItem.module.css';
import {NavLink} from "react-router-dom";

const FriendsItem = (props) => {

    const setActiveFriendItem = (active) => active.isActive ? classes.friendItem : '';

    return (
        <div className={classes.friendItem}>
            <NavLink className={setActiveFriendItem} to={'/dialogs/' + props.id}><img src={props.avatar}
                                                      alt="itemAvatar"/></NavLink>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}

export default FriendsItem;