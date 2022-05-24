import React from "react";
import classes from "./MyPosts.module.css";

const MyPosts = () => {
    return (
        <div className={classes.content}>
            <div className={classes.myPosts}>
                <div className={classes.newPost}>New post</div>
            </div>
            <div className={classes.allPosts}>
                <div className={classes.post1}>post 1</div>
                <div className={classes.post2}>post 2</div>
            </div>
        </div>
    )
}

export default MyPosts;