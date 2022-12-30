import React from 'react';

const PostComment = () => {
    return (
        <div>
            <div className='my-4'>
                <form className="bg-white shadow rounded-lg mb-6 p-4 w-full mx-auto">
                    <textarea name="message" placeholder="Type something..." className=" focus:outline-none  w-full rounded-lg p-2 text-sm bg-gray-100 border border-transparent appearance-none rounded-tg placeholder-gray-400">

                    </textarea>
                    <footer className="flex justify-between mt-2">
                        <button className="flex items-center py-2 px-4 rounded-lg text-sm bg-blue-600 text-white shadow-lg">Send
                            <svg className="ml-1" viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                        </button>
                    </footer>
                </form>
            </div>
        </div>
    );
};

export default PostComment;