import React from "react";
import classes from "./Post.module.css";

let Post = (props) => {

    return (
        <div className={classes.item}>
            <div className={classes.itemInner}>
                <img
                    src={props.profile ? props.profile.photos.small : 'https://cutt.ly/XJW7kPz'}
                    alt="avatar"/>
                <span>{props.message}</span>
            </div>
            <p>like: {props.likes}</p>
        </div>
    )
}


export default Post;