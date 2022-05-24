import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";



const MyPosts = (props) => {

    const postsElements = props.postsData.map(p => <Post message={p.message} likes={p.likes}/>)

    const newPostElement = React.createRef();

    const addPost = () => {
        if (newPostElement.current.value !== '') {
            props.dispatch(addPostActionCreator())
            //props.addPOst();
        }
    }
    const onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch(updateNewPostTextActionCreator(text));
        //props.updateNewPostText(text);
    }

    return (
        <div className={classes.content}>
            <div className={classes.newPost}>
                <h3>My Posts</h3>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}
                          placeholder="new post..."/>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={classes.allPosts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;