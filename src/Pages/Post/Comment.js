import React from 'react';

const Comment = () => {
    return (
        <div>
            <div className='flex p-2'>
                <div className="avatar">
                    <div className="w-16 h-16 rounded-full">
                        <img src="https://placeimg.com/192/192/people" alt='imga' />
                    </div>
                </div>
                <div className='px-2'>
                    <p className="text-2xl font-bold ">Anik Kumar Nath</p>
                    <p className="text-base font-semibold text-gray-600 uppercase">
                        13 Jul 2020
                    </p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est deleniti adipisci perspiciatis, dolor ea sapiente! Reiciendis veritatis ad quisquam, commodi nisi in inventore officia, accusamus cupiditate blanditiis possimus dolor recusandae.</p>
                </div>
            </div>
        </div>
    );
};

export default Comment;