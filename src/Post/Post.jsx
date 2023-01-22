import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import "./Post.css";

const Post = () => {
    let [posts, setPosts] = useState([]);
    useEffect( () => {
        fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then( (res) => res.json() )
        .then( data => setPosts(data) )
        .catch ( (err) => {console.log(err)} )
    } , []);
    console.log(posts);
    return (
        <>
        <div className="posts">
            {

            posts.map( (post) => {
                return(
                    <div className="single-post" key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </div>
                )

            })
            }
        </div>




            
        </>
    );
};

export default Post;