import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Header from '../Pages/Shared/Header/Header';

const Main = () => {
    return (
        <div>
            <div className='bg-slate-100'>
                <Header></Header>
            </div>
            <div className='bg-purple-50'>
                <Outlet></Outlet>
            </div>
            <hr />
            <div className='bg-slate-100'>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Main;