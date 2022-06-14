import React from "react";
import classes from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader";
import ProfileStatus from "./ProfileStatus"

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div className={classes.contentHeader}>
                <img
                    src="https://cutt.ly/iJEqryD"
                    alt="img"/>
            </div>
            <div className={classes.secondBlock}>
                <img src={props.profile.photos.large ? props.profile.photos.large : 'https://cutt.ly/XJW7kPz'}/>
                <div className={classes.description}>
                    <div className={classes.left}>
                        <p>
                            <span>Full name: </span>{props.profile.fullName ? props.profile.fullName : "It doesn't exist."}
                        </p>
                        <p>
                            <span>About me: </span>{props.profile.aboutMe ? props.profile.aboutMe : "It doesn't exist."}
                        </p>
                        <p>
                            <span>Looking for a job: </span>{props.profile.lookingForAJob ? 'Looking for' : 'Not looking for'}
                        </p>
                        <p>
                            <span>Description: </span>{props.profile.lookingForAJobDescription ?
                            props.profile.lookingForAJobDescription
                            : "It doesn't exist."}
                        </p>
                    </div>
                    <div className={classes.right}>
                        <p className={classes.facebook}>
                            {props.profile.contacts.facebook && props.profile.contacts.facebook.startsWith('https://') ?
                                <a href={props.profile.contacts.facebook}>Facebook</a> : ""}
                            {props.profile.contacts.facebook && !props.profile.contacts.facebook.startsWith('https://') ?
                                <a href={"https://" + props.profile.contacts.facebook}>Facebook</a> : ""}
                        </p>
                        <p className={classes.twitter}>
                            {props.profile.contacts.twitter && props.profile.contacts.twitter.startsWith('https://') ?
                                <a href={props.profile.contacts.twitter}>Twitter</a> : ""}
                            {props.profile.contacts.twitter && !props.profile.contacts.twitter.startsWith('https://') ?
                                <a href={"https://" + props.profile.contacts.twitter}>Twitter</a> : ""}
                        </p>
                        <p className={classes.instagram}>
                            {props.profile.contacts.instagram && props.profile.contacts.instagram.startsWith('https://') ?
                                <a href={props.profile.contacts.instagram}>Instagram</a> : ""}
                            {props.profile.contacts.instagram && !props.profile.contacts.instagram.startsWith('https://') ?
                                <a href={"https://" + props.profile.contacts.instagram}>Instagram</a> : ""}
                        </p>
                        <p className={classes.youtube}>
                            {props.profile.contacts.youtube && props.profile.contacts.youtube.startsWith('https://') ?
                                <a href={props.profile.contacts.github}>YouTube</a> : ""}
                            {props.profile.contacts.youtube && !props.profile.contacts.youtube.startsWith('https://') ?
                                <a href={"https://" + props.profile.contacts.youtube}>YouTube</a> : ""}
                        </p>
                        <p className={classes.github}>
                            {props.profile.contacts.github && props.profile.contacts.github.startsWith('https://') ?
                                <a href={props.profile.contacts.github}>GitHub</a> : ""}
                            {props.profile.contacts.github && !props.profile.contacts.github.startsWith('https://') ?
                                <a href={"https://" + props.profile.contacts.github}>GitHub</a> : ""}
                        </p>
                    </div>
                </div>
            </div>
            <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
        </div>
    )
}

export default ProfileInfo;