import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    let postData = [
        {id: 1, message: 'hi', likesCount: 12},
        {id: 2, message: 'hola', likesCount: 11}
    ]
    return (
        <div className={s.postsBlock}>
            <h3> My posts</h3>
            <div>
                <div><textarea></textarea></div>
                <button>Add post</button>
                <button>Remove</button>
            </div>
            <div className={s.posts}>
                <Post message={postData[0].message} likesCount={postData[0].likesCount}/>
                <Post message={postData[1].message} likesCount={postData[1].likesCount}/>

            </div>

        </div>
    )
}
export default MyPosts;