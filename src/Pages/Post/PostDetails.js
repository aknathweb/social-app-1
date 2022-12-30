import React from 'react';
import Comment from './Comment';
import PostComment from './PostComment';

const PostDetails = () => {
    return (
        <div className='w-full md:w-3/4 lg:w-2/3 p-4 mx-auto'>
            <div className='flex p-2'>
                <div className="avatar">
                    <div className="w-16 rounded-full">
                        <img src="https://placeimg.com/192/192/people" alt='imga' />
                    </div>
                </div>
                <div className='px-2'>
                    <p className="text-2xl font-bold ">Anik Kumar Nath</p>
                    <p className="text-base font-semibold text-gray-600 uppercase">
                        13 Jul 2020
                    </p>
                </div>
            </div>
            <div className="p-4">
                <p className="mb-4 text-gray-700">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. A, ex nam non nesciunt nihil aperiam quisquam architecto porro fugit ducimus dolores quaerat officiis placeat nulla? Tempora excepturi officia perspiciatis magnam.
                </p>
            </div>
            <div>
                <img
                    src="https://images.pexels.com/photos/932638/pexels-photo-932638.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
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