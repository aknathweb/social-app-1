import React from 'react';
import PostCard from '../Post/PostCard';

const TimeLine = () => {
    return (
        <div>
            <div className="w-full md:w-3/4 lg:w-2/3 my-4 gap-4 mx-auto p-4">
                <PostCard></PostCard>
                <PostCard></PostCard>
                <PostCard></PostCard>
            </div>
        </div>
    );
};

export default TimeLine;