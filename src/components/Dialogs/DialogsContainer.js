import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";


const Dialogs = (props) => {

    const dialogsElements = props.store.dialogsPage.dialogsData.map(d => <DialogItem name={d.name} id={d.id}
                                                                                     avatar={d.avatar}/>)
    const messagesElements = props.store.dialogsPage.messagesData.map(m => <Message message={m.message}
                                                                                    messagesData={props.messagesData}/>)

    const newMessageElement = React.createRef();
    const sendMessage = () => {
        if (newMessageElement.current.value !== '') {
            props.dispatch(sendMessageActionCreator());
        }
    }
    const onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.dispatch(updateNewMessageTextActionCreator(text));
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
                <div className={classes.newMessage}>
                    <textarea onChange={onMessageChange} ref={newMessageElement}
                              value={props.dialogsPage.newMessageText} placeholder="new message..."></textarea>
                    <div>
                        <button onClick={sendMessage}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;