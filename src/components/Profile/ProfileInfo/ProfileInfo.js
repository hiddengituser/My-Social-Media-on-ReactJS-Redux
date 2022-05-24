import React from "react";
import classes from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src="https://www.visitdubai.com/-/media/gathercontent/article/t/top-rides-at-img-worlds-of-adventure/media/top-rides-at-img-worlds-of-adventure-predator-5.jpg"
                    alt="img"/>
            </div>
            <div>
                <img src="https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/img.jpg" alt="cube-icon"/>
                <p>description</p>
            </div>
        </div>
    )
}

export default ProfileInfo;