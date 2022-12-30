import React, { useState } from 'react';
import { FiEdit } from 'react-icons/fi';

const Profile = () => {
    const [edit, setEdit] = useState(false);
    const profileInformation = {
        name: 'Anik Kumar Nath',
        email: 'anikkumarnath2@gmail.com',
        university: 'North Western University',
        address: 'khulna, Bangladesh'
    }
    const handleUpdateProfile = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const university = e.target.university.value;
        const address = e.target.address.value;
        console.log(name, email, university, address);
    }

    return (
        <div className='flex flex-row-reverse bg-purple-100 my-8'>
            <div className='btn btn-ghost p-4' onClick={() => setEdit(!edit)} >
                <FiEdit color='purple' />
            </div >
            <section className="p-6 dark:bg-gray-800 dark:text-gray-50">
                <form className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid" onSubmit={handleUpdateProfile}>
                    <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
                        <div className="space-y-2 col-span-full lg:col-span-1">
                            <p className="font-bold">Personal Inormation</p>
                            <p className="text-xs">Personal information is often recorded that can identify and relate to a living person. This can also include information that when put together with other information can then identify a person.</p>
                        </div>
                        {
                            !edit ?
                                <div className='col-span-full lg:col-span-3'>
                                    <div className='grid  grid-cols-1 md:grid-cols-2 gap-6'>
                                        <div>
                                            <label className="text-gray-700 dark:text-gray-200" htmlFor="username">Name</label>
                                            <p className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">{profileInformation.name}</p>
                                        </div>
                                        <div >
                                            <label className="text-gray-700 dark:text-gray-200" htmlFor="username">Email</label>
                                            <p className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">{profileInformation.email}</p>
                                        </div>
                                        <div >
                                            <label className="text-gray-700 dark:text-gray-200" htmlFor="username">University</label>
                                            <p className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">{profileInformation.university}</p>
                                        </div>
                                        <div>
                                            <label className="text-gray-700 dark:text-gray-200" htmlFor="username">Address</label>
                                            <p className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">{profileInformation.address}</p>
                                        </div>
                                    </div>
                                </div>
                                :
                                <div className='col-span-full lg:col-span-3'>
                                    <div className='grid  grid-cols-1 md:grid-cols-2 gap-6'>
                                        <div>
                                            <label className="text-gray-700 dark:text-gray-200" htmlFor="username">Name</label>
                                            <input type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" defaultValue={profileInformation.name} name='name' />
                                        </div>
                                        <div >
                                            <label className="text-gray-700 dark:text-gray-200" htmlFor="username">Email</label>
                                            <input type="email" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" defaultValue={profileInformation.email} name='email' />
                                        </div>
                                        <div >
                                            <label className="text-gray-700 dark:text-gray-200" htmlFor="username">University</label>
                                            <input type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" defaultValue={profileInformation.university} name='university' />
                                        </div>
                                        <div>
                                            <label className="text-gray-700 dark:text-gray-200" htmlFor="username">Address</label>
                                            <input type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" defaultValue={profileInformation.address} name='address' />
                                        </div>
                                        <input type="submit" defaultValue="Submit" className='btn btn-primary col-span-full' />
                                    </div>
                                </div>

                        }

                    </fieldset>
                </form>
            </section>
        </div >
    );
};

export default Profile;