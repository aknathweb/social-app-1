import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Comment from './Comment';
import PostComment from './PostComment';

const PostDetails = () => {
    const postId = useLoaderData();
    const [post, setPost] = useState({})
    const { _id, email, name, message, imageUrl, postTime, posterPhoto } = post;
    console.log(post);
    useEffect(() => {
        fetch(`http://localhost:5000/post/${postId}`).then(res => res.json()).then(data => setPost(data)).catch(err => console.log(err));
    }, [])

    return (
        <div className='w-full md:w-3/4 lg:w-2/3 p-4 mx-auto shadow-md rounded-md'>
            <div className='flex p-2'>
                <div className="avatar">
                    <div className="w-16 rounded-full">
                        <img src={posterPhoto ? posterPhoto : 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png'} alt='image' />
                    </div>
                </div>
                <div className='px-2'>
                    <p className="text-2xl font-bold ">{name}</p>
                    <p className="text-base font-semibold text-gray-600 uppercase">
                        {postTime}
                    </p>
                </div>
            </div>
            <div className="p-4">
                <p className="mb-4 text-gray-700">
                    {message}
                </p>
            </div>
            <div className='flex justify-center'>
                <img
                    src={imageUrl}
                    className="object-cover rounded"
                    alt=""
                />
            </div>
            <div className='bg-slate-200 p-4 rounded-md'>
                <PostComment></PostComment>
                <div>
                    <Comment></Comment>
                    <Comment></Comment>
                    <Comment></Comment>
                    <Comment></Comment>
                    <Comment></Comment>
                </div>
            </div>
        </div>
    );
};

export default PostDetails;