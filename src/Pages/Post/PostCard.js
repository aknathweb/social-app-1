import React from 'react';
import { Link } from 'react-router-dom';

const PostCard = () => {
    return (
        <div>
            <div className="overflow-hidden transition-shadow duration-300 bg-slate-100 rounded">
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
                        Sed ut perspiciatis unde omnis iste natus error sit sed quia
                        consequuntur magni voluptatem doloremque.
                    </p>
                </div>
                <div>
                    <img
                        src="https://images.pexels.com/photos/932638/pexels-photo-932638.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                        className="object-cover w-full h-64 rounded"
                        alt=""
                    />
                </div>
                <div className='p-2'>
                    <div className="flex space-x-4 justify-between items-center">
                        <div className='flex items-center'>
                            <div className="mr-2 btn btn-ghost">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="w-5 h-5 text-blue-500 transition-colors duration-200 group-hover:text-deep-purple-accent-700"
                                >
                                    <polyline
                                        points="6 23 1 23 1 12 6 12"
                                        fill="blue"
                                        strokeMiterlimit="10"
                                    />
                                    <path
                                        d="M6,12,9,1H9a3,3,0,0,1,3,3v6h7.5a3,3,0,0,1,2.965,3.456l-1.077,7A3,3,0,0,1,18.426,23H6Z"
                                        fill="blue"
                                        stroke="currentColor"
                                        strokeMiterlimit="10"
                                    />
                                </svg>
                            </div>
                            <p className="font-semibold">7.4K</p>
                        </div>
                        <div className='flex items-center'>
                            <div className="mr-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    stroke="currentColor"
                                    className="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700"
                                >
                                    <polyline
                                        points="23 5 23 18 19 18 19 22 13 18 12 18"
                                        fill="none"
                                        strokeMiterlimit="10"
                                    />
                                    <polygon
                                        points="19 2 1 2 1 14 5 14 5 19 12 14 19 14 19 2"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeMiterlimit="10"
                                    />
                                </svg>
                            </div>
                            <p className="font-semibold">81</p>
                        </div>
                        <div>
                            <Link to={'/post/details'} className="text-primary btn btn-ghost">
                                see more
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default PostCard;