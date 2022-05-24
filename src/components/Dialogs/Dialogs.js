import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let state = props.dialogsPage;

    const dialogsElements = state.dialogsData.map(d => <DialogItem name={d.name} id={d.id}
                                                                                     avatar={d.avatar}/>)
    const messagesElements = state.messagesData.map(m => <Message message={m.message}
                                                                                    messagesData={props.messagesData}/>)

    const newMessageElement = React.createRef();
    const sendMessage = () => {
        if (newMessageElement.current.value !== '') {
            props.sendMessage();
        }
    }
    const onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.updateNewMessageText(text)
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