import React from "react";
import classes from "./../Dialogs.module.css";

const Message = (props) => {

    return (
        <div className={classes.message}>
            <span className={classes.mInner}>{props.message}</span>
        </div>
    )
}

export default Message;