import React from "react";
import classes from "./Profile.module.css";

const Profile = () => {
    return (
        <div className={classes.content}>
            <div className={classes.contentHeader}>
                <img
                    src="https://www.visitdubai.com/-/media/gathercontent/article/t/top-rides-at-img-worlds-of-adventure/media/top-rides-at-img-worlds-of-adventure-predator-5.jpg"
                    alt="img"/>
            </div>
            <div className={classes.secondBlock}>
                <img src="https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/img.jpg" alt="cube-icon"/>
                <p className="description">description</p>
            </div>
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

export default Profile;