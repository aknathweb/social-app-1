import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../ContestApi/AuthContextProvider';
import Loading2 from '../../Loading/Loading2';

const Login = () => {

    const [wait, setWait] = useState(false);
    const [test, setTest] = useState({ email: '', password: '' });
    const testProfile = {
        email: 'a@a.com',
        password: 'a@a.com'
    }
    const { signIn, googleLogin } = useContext(AuthContext);

    const handleSignIn = (e) => {
        setWait(true);
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        signIn(email, password)
            .then((result) => {
                console.log(result)
                e.target.reset();
                setTest({ email: '', password: '' });
                toast.success('Login Successfully');
                setWait(false);
            }).catch(err => {
                toast.error(err.message);
                setWait(false);
            })
    }



    return (
        <div className='flex justify-center py-8 shadow-xl ring-1 ring-gray-900/5'>
            <div className="relative flex flex-col max-w-md rounded-md shadow-md bg-white text-black">
                {wait && <Loading2 />}
                <div className='p-6 sm:p-10'>
                    <div className="mb-8 text-center">
                        <h1 className="my-3 text-4xl font-bold">Sign in</h1>
                        <p className="text-sm text-gray-400">Sign in to access your account</p>
                    </div>
                    <small onClick={() => setTest(testProfile)}><strong className='btn btn-xs btn-accent'>Test User:</strong>  {testProfile.email}</small>
                    <br />
                    <br />
                    <form onSubmit={handleSignIn} className="space-y-12 ng-untouched ng-pristine ng-valid">
                        <div className="space-y-4">
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm">Email address</label>
                                <input type="email" name="email" placeholder="anik@nath.com" defaultValue={test.email} className="w-full px-3 py-2 border rounded-md border-gray-700  text-black" required />
                            </div>
                            <div>
                                <div className="flex justify-between mb-2">
                                    <label htmlFor="password" className="text-sm">Password</label>
                                </div>
                                <input type="password" name="password" defaultValue={test.password} placeholder="*****" className="w-full px-3 py-2 border rounded-md border-gray-700 text-black" required />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div>
                                <button className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full">
                                    Sign in
                                </button>
                            </div>
                            <p className="px-6 text-sm text-center text-black">Don't have an account yet?
                                <Link to={'/register'} className="hover:underline text-violet-900 font-bold">Sign up</Link>.
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
                            <button onClick={googleLogin} className="flex items-center py-2 px-4 text-sm uppercase rounded bg-white hover:bg-gray-100 text-indigo-500 border border-transparent hover:border-transparent hover:text-gray-700 shadow-md hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"          >
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
        </div>

    );
};

export default Login;