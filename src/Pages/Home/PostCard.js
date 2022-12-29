import React from 'react';

const PostCard = () => {
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
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
                <div className="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
                    <div className="overflow-hidden transition-shadow duration-300 bg-slate-100 rounded">
                        <a href="/" aria-label="Article">
                            <img
                                src="https://images.pexels.com/photos/932638/pexels-photo-932638.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                                className="object-cover w-full h-64 rounded"
                                alt=""
                            />
                        </a>
                        <div className="p-4">
                            <p className="mb-2 text-xs font-semibold text-gray-600 uppercase">
                                13 Jul 2020
                            </p>
                            <a
                                href="/"
                                aria-label="Article"
                                className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                            >
                                <p className="text-2xl font-bold leading-5">Diving to the deep</p>
                            </a>
                            <p className="mb-4 text-gray-700">
                                Sed ut perspiciatis unde omnis iste natus error sit sed quia
                                consequuntur magni voluptatem doloremque.
                            </p>
                            <div className='flex justify-between'>
                                <div className="flex space-x-4">
                                    <a
                                        href="/"
                                        aria-label="Likes"
                                        className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
                                    >
                                        <div className="mr-2">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                className="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700"
                                            >
                                                <polyline
                                                    points="6 23 1 23 1 12 6 12"
                                                    fill="none"
                                                    strokeMiterlimit="10"
                                                />
                                                <path
                                                    d="M6,12,9,1H9a3,3,0,0,1,3,3v6h7.5a3,3,0,0,1,2.965,3.456l-1.077,7A3,3,0,0,1,18.426,23H6Z"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeMiterlimit="10"
                                                />
                                            </svg>
                                        </div>
                                        <p className="font-semibold">7.4K</p>
                                    </a>
                                    <a
                                        href="/"
                                        aria-label="Comments"
                                        className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
                                    >
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
                                    </a>
                                </div>
                                <div>
                                    <a
                                        href="/"
                                        aria-label=""
                                        className="text-primary inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                                    >
                                        see more
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default PostCard;