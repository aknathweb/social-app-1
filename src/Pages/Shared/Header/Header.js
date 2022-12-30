import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../ContestApi/AuthContextProvider';
import chatIcon from './../../Shared/icon.png'
import { BiLogOut } from 'react-icons/bi';
import { CgProfile } from 'react-icons/cg';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const navItems = <ul className="menu menu-horizontal px-1">
        <li>
            <Link to="/">
                <svg fill="blue" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className="opacity-50 hi-solid hi-home inline-block w-5 h-5"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
                <span className="hidden md:block">Home</span>
            </Link>
        </li>
        <li>
            <Link to="/timeline">
                <svg fill="blue" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className="opacity-50 hi-solid hi-home inline-block w-5 h-5"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
                <span className="hidden md:block">Media</span>
            </Link>
        </li>
        <li>
            <Link href="/">
                <svg fill="blue" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className="opacity-50 hi-solid hi-home inline-block w-5 h-5"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
                <span className="hidden md:block">Message</span>
            </Link>
        </li>
        <li>
            <Link to="/profile">
                <svg fill="blue" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className="opacity-50 hi-solid hi-user-circle inline-block w-5 h-5"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd"></path></svg>
                <span className="hidden md:block">Profile</span>
            </Link>
        </li>
    </ul>
    return (
        <div>
            <div className="navbar bg-base-100 flex justify-between shadow-md">
                <div className="">
                    <a href="/" className="btn btn-ghost normal-case text-xl"><img src={chatIcon} className='w-10 h-10 rounded-full' alt="icon" /> <span className="hidden lg:block">MirrorChat</span></a>
                </div>
                <div className="">
                    {navItems}
                </div>
                <div>
                    {
                        !user ?
                            <Link to={'/login'} className='btn btn-primary'> Login</Link>
                            :
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full" title={user.displayName ? user.displayName : 'Anonymous'}>
                                        <img src={user.photoURL ? user.photoURL : 'https://www.pngitem.com/pimgs/m/522-5220445_anonymous-profile-grey-person-sticker-glitch-empty-profile.png'} alt="profile" />
                                    </div>
                                </label>
                                <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-auto">
                                    <li>
                                        <Link to="/profile" className="justify-between">
                                            <CgProfile />Profile
                                        </Link>
                                    </li>
                                    <li onClick={logOut}><Link ><BiLogOut />Logout</Link></li>
                                </ul>
                            </div>
                    }
                </div>
            </div>

        </div >
    );
};

export default Header;