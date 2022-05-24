import React from "react";
import classes from './Friends.module.css';
import FriendsItem from "./FriendsItem/FriendsItem";
import {connect} from "react-redux";


const Friends = (props) => {

    const friendsElement = props.dialogsData.map(d => <FriendsItem avatar={d.avatar} name={d.name} id={d.id}/>)

    return (
        <div className={classes.friends}>
            <p>Friends</p>
            <div className={classes.friendsItemList}>
                {friendsElement[0]}
                {friendsElement[1]}
                {friendsElement[2]}
            </div>
        </div>
    )
}



export default Friends;