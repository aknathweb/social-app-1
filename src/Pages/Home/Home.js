import React from 'react';
import PopularPost from './PopularPost';
import Post from './Post';

const Home = () => {
    return (
        <div>
            <Post></Post>
            <PopularPost></PopularPost>
        </div>
    );
};

export default Home;