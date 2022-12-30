import React, { useEffect, useState } from 'react';
import PostCard from '../Post/PostCard';

const TimeLine = () => {
    const [posts, setPosts] = useState()

    console.log(posts);
    useEffect(() => {
        fetch('http://localhost:5000/post').then(res => res.json()).then(data => setPosts(data)).catch(err => console.log(err));
    }, [])
    return (
        <div className="w-full md:w-2/3 lg:w-2/4 my-4 gap-4 mx-auto p-4">
            {
                posts && posts.map((post, i) => <PostCard key={i} postId={post._id} email={post.email} name={post.name} posterPhoto={post.posterPhoto} postImage={post.imageUrl} message={post.message} postTime={post.postTime}></PostCard>)
            }
        </div>
    );
};

export default TimeLine;