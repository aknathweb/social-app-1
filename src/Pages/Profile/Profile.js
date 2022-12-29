import React from 'react';

const Profile = () => {
    return (
        <div className='bg-purple-100 my-8'>
            <section className="p-6 dark:bg-gray-800 dark:text-gray-50">
                <form className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">
                    <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
                        <div className="space-y-2 col-span-full lg:col-span-1">
                            <p className="font-bold">Personal Inormation</p>
                            <p className="text-xs">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci fuga autem eum!</p>
                        </div>
                        <div className='col-span-full lg:col-span-3'>
                            <div className='grid  grid-cols-1 md:grid-cols-2 gap-6'>
                                <div>
                                    <label className="text-gray-700 dark:text-gray-200" for="username">Name</label>
                                    <input id="username" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                </div>
                                <div >
                                    <label className="text-gray-700 dark:text-gray-200" for="username">Email</label>
                                    <input id="username" type="email" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                </div>
                                <div >
                                    <label className="text-gray-700 dark:text-gray-200" for="username">University</label>
                                    <input id="username" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                </div>
                                <div>
                                    <label className="text-gray-700 dark:text-gray-200" for="username">Address</label>
                                    <input id="username" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                </div>
                                <input type="submit" value="Submit" className='btn btn-primary col-span-full' />
                            </div>
                        </div>
                    </fieldset>
                </form>
            </section>
        </div>
    );
};

export default Profile;