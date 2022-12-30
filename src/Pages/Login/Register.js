import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../ContestApi/AuthContextProvider';

const Register = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const handleSignup = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const photo = e.target.photo.files[0];
        console.log(name, email, password, photo);

        createUser(email, password)
            .then(createRes => {
                console.log(createRes);
                /// perform remote image upload operation start
                const formData = new FormData();
                formData.append('image', photo);
                const url = 'https://api.imgbb.com/1/upload?key=02ffd62e996e847abab5207d82cfaa22'
                photo && fetch(url, {
                    method: 'POST',
                    body: formData
                })
                    .then(res => res.json())
                    .then(imgData => {
                        updateUserProfile(name, imgData.data.url)
                        toast.success('New Account created Successfully');
                        // toast.success('image upload successfully');
                        e.target.reset();
                    })
                // .catch(err => console.log(err));
                /// perform remote image upload operation end
            })
            .catch(err => toast.error(err));
    }
    return (
        <div className='flex justify-center py-8 shadow-xl ring-1 ring-gray-900/5'>
            <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-white text-black">
                <div className="mb-8 text-center">
                    <h1 className="my-3 text-4xl font-bold">Sign Up</h1>
                    <p className="text-sm text-gray-400">Create your new account</p>
                </div>
                <form onSubmit={handleSignup} className="space-y-12 ng-untouched ng-pristine ng-valid">
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block mb-2 text-sm">Name</label>
                            <input type="text" name="name" placeholder="Anik Nath" className="w-full px-3 py-2 border rounded-md border-gray-700  text-black" required />
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm">Email address</label>
                            <input type="email" name="email" placeholder="anik@nath.com" className="w-full px-3 py-2 border rounded-md border-gray-700  text-black" required />
                        </div>
                        <div>
                            <div className="flex justify-between mb-2">
                                <label htmlFor="password" className="text-sm">Password</label>
                            </div>
                            <input type="password" name="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md border-gray-700 text-black" required />
                        </div>
                        <div>
                            <div className="flex justify-between mb-2">
                                <label htmlFor="photo" className="text-sm">Photo</label>
                            </div>
                            <input type="file" accept='image/*' name="photo" className="w-full px-3 py-2 border rounded-md border-gray-700 text-black" required />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div>
                            <button className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full">
                                Sign Up
                            </button>
                        </div>
                        <p className="px-6 text-sm text-center text-black">Already have an account yet?
                            <Link to={'/login'} className="hover:underline text-violet-900 font-bold">Log In</Link>.
                        </p>
                    </div>
                </form>
                <div className='pt-4'>
                    <div className="flex items-center justify-center space-x-4 mt-3">
                        <button className="flex items-center py-2 px-4 text-sm uppercase rounded bg-white hover:bg-gray-100 text-indigo-500 border border-transparent hover:border-transparent hover:text-gray-700 shadow-md hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"          >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="w-6 h-6 mr-3"            >
                                <path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"              ></path>
                            </svg>
                            Github
                        </button>
                        <button className="flex items-center py-2 px-4 text-sm uppercase rounded bg-white hover:bg-gray-100 text-indigo-500 border border-transparent hover:border-transparent hover:text-gray-700 shadow-md hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mr-3" viewBox="0 0 48 48"            >
                                <path fill="#fbc02d" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z" />
                                <path fill="#e53935" d="m6.306 14.691 6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z" />
                                <path fill="#4caf50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z" />
                                <path fill="#1565c0" d="M43.611 20.083 43.595 20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z" />
                            </svg>
                            Google
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;