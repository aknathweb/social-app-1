import React from 'react';

const Comment = ({ postId, commenterName, commenterEmail, commenterPhoto, comment, commentTime }) => {
    return (
        <div>
            <div className='flex p-2 bg-slate-100 rounded-md my-2'>
                <div className="avatar">
                    <div className="w-16 h-16 rounded-full">
                        <img src={commenterPhoto} alt='imga' />
                    </div>
                </div>
                <div className='px-2'>
                    <p className="text-2xl font-bold ">{commenterName}</p>
                    <p className="text-base font-semibold text-gray-600 uppercase">
                        {commentTime}
                    </p>
                    <p>{comment}</p>
                </div>
            </div>
        </div>
    );
};

export default Comment;