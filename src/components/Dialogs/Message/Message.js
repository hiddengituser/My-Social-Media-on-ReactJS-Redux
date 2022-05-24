import React from "react";
import classes from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={classes.dialog}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={classes.message}>{props.message}</div>
    )
}


const Dialogs = (props) => {

    const dialogsData = [
        {id: '1', name: 'Dima'},
        {id: '2', name: 'Sveta'},
        {id: '3', name: 'Yura'},
        {id: '4', name: 'Artem'},
        {id: '5', name: 'Stepan'},
        {id: '6', name: 'Sasha'}
    ]
    const dialogsElements = dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>)

    const messagesData = [
        {id: '1', message: 'Hi!'},
        {id: '2', message: 'How are you?'},
        {id: '3', message: 'This is two phone baby king!'},
        {id: '5', message: 'Yo'},
        {id: '4', message: 'Yo'}
    ]
    const messagesElements = messagesData.map(m => <Message message={m.message}/>)

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;