import React from "react";
import classes from "./ProfileInfo.module.css";

const ProfileInfo = () => {
    return (
        <div>
            <div className={classes.contentHeader}>
                <img
                    src="https://www.visitdubai.com/-/media/gathercontent/article/t/top-rides-at-img-worlds-of-adventure/media/top-rides-at-img-worlds-of-adventure-predator-5.jpg"
                    alt="img"/>
            </div>
            <div className={classes.secondBlock}>
                <img src="https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/img.jpg" alt="cube-icon"/>
                <p className="description">description</p>
            </div>
        </div>
    )
}

export default ProfileInfo;