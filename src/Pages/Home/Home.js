import React, { useContext } from 'react';
import { AuthContext } from '../../ContestApi/AuthContextProvider';
import PopularPost from './PopularPost';
import Post from './Post';

const Home = () => {
    const { user } = useContext(AuthContext);
    return (
        <div>
            <Post user={user}></Post>
            <PopularPost></PopularPost>
        </div>
    );
};

export default Home;