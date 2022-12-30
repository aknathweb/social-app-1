import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import NotFound from '../Pages/404/NotFound';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Login/Register';
import PostDetails from '../Pages/Post/PostDetails';
import Profile from '../Pages/Profile/Profile';
import TimeLine from '../Pages/TimeLine/TimeLine';

export const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: ([
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/timeline',
                element: <TimeLine></TimeLine>,
            },
            {
                path: '/profile',
                element: <Profile></Profile>,
            },
            {
                path: '/post/:id',
                loader: ({ params }) => params.id,
                element: <PostDetails></PostDetails>,
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/register',
                element: <Register></Register>,
            },
            {
                path: '*',
                element: <NotFound></NotFound>
            }
        ])
    }
]);