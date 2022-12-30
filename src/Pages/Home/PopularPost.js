import React from 'react';
import PostCard from '../Post/PostCard';

const PopularPost = () => {
    return (
        <div>
            <div className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-8">
                <div className="max-w-xl md:mx-auto sm:text-center lg:max-w-2xl">
                    <h2 className="max-w-lg font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                        <span className="relative inline-block">
                            <svg
                                viewBox="0 0 52 24"
                                fill="currentColor"
                                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                            >
                                <defs>
                                    <pattern
                                        id="db164e35-2a0e-4c0f-ab05-f14edc6d4d30"
                                        x="0"
                                        y="0"
                                        width=".135"
                                        height=".30"
                                    >
                                        <circle cx="1" cy="1" r=".7" />
                                    </pattern>
                                </defs>
                                <rect
                                    fill="url(#db164e35-2a0e-4c0f-ab05-f14edc6d4d30)"
                                    width="52"
                                    height="24"
                                />
                            </svg>
                            <span className="relative"></span>
                        </span>{' '}
                        Popular Post
                    </h2>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 p-4">
                <PostCard></PostCard>
                <PostCard></PostCard>
                <PostCard></PostCard>
            </div>
        </div>
    );
};

export default PopularPost;