import React, { useRef } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';

const Post = ({ user }) => {

    const handlePost = (e) => {
        e.preventDefault();
        const name = user.displayName;
        const email = user.email;
        const posterPhoto = user.photoURL;
        const message = e.target.message.value;
        const photo = e.target.photo.files[0];
        const formData = new FormData();
        formData.append('image', photo);
        const url = 'https://api.imgbb.com/1/upload?key=02ffd62e996e847abab5207d82cfaa22'
        photo && fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                const imageUrl = imgData.data.url;
                fetch('http://localhost:5000/post', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify({ name, email, posterPhoto, message, imageUrl })
                })
                    .then(res => res.json())
                    .then(data => {
                        toast.success('posted successfully')
                        e.target.reset();
                        if (data.acknowledged) {
                            ;
                        }
                    })
            })
        // console.log(name, email, message, photo)
    }
    const inputPhotoFile = useRef(null)
    return (
        <div className='py-4'>
            <form onSubmit={handlePost} className="bg-white shadow rounded-lg mb-6 p-4 w-full md:w-3/4 lg:w-1/2 mx-auto">
                <textarea name="message" placeholder="Type something..." className=" focus:outline-none  w-full rounded-lg p-2 text-sm bg-gray-100 border border-transparent appearance-none rounded-tg placeholder-gray-400" required>

                </textarea>
                <footer className="flex justify-between mt-2">
                    <div className="flex gap-2">
                        <input type='file' accept='image/*' name='photo' ref={inputPhotoFile} style={{ display: 'none' }} />
                        <span onClick={() => inputPhotoFile.current.click()} className="flex items-center transition ease-out duration-300 hover:bg-blue-500 hover:text-white bg-blue-100 w-8 h-8 px-2 rounded-full text-blue-400 cursor-pointer">
                            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
                        </span>
                    </div>
                    {
                        user ?
                            <button className={`flex items-center py-2 px-4 rounded-lg text-sm bg-blue-600 text-white shadow-lg`}>Send
                                <svg className="ml-1" viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                            </button>
                            :
                            <Link to={'/login'} className={`flex items-center py-2 px-4 rounded-lg text-sm bg-blue-600 text-white shadow-lg`}>Login First
                                <svg className="ml-1" viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                            </Link>
                    }
                </footer>
            </form>
        </div>
    );
};

export default Post;