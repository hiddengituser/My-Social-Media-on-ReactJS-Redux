import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
    const postsElements = props.postsData.map(p => <Post profile={props.profile} message={p.message} likes={p.likes}/>)

    const newPostElement = React.createRef();

    const onAddPost = () => {
        if (newPostElement.current.value !== '') {
            props.addPost();
        }
    }
    const onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text)
    }

    return (
        <div className={classes.content}>
            <div className={classes.newPost}>
                <h3>My Posts</h3>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}
                          placeholder="new post..."/>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={classes.allPosts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;