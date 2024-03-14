import React, { useState, useEffect } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import logo from "../assets/logo.svg";
import { Link } from 'react-router-dom';

const Header = () => {
    let Links = [
        {name:"About",link:"/"},
        {name:"Mission",link:"/"},
        {name:"Contact",link:"/"},
        {name:"Help",link:"/"},
    ];
    let [open, setOpen] = useState(false);
    let [isTop, setIsTop] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            setIsTop(window.pageYOffset === 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`Header w-full fixed top-0 left-0 bg-white py-3 ${isTop ? '' : 'shadow-sm'}`}>
            <div className='md:flex items-center justify-between py-1 md:px-10 px-7'>
                {/* logo section and Mobile Sign up button */}
                <div className='flex items-center gap-4'>
                <Link to="/">
                    <img src={logo} className='logo-black' alt="logo" />
                </Link>
                    <a href="https://urllset.onrender.com/register" className="button absolute right-20 bg-blue-600 text-white hover:bg-blue-700 md:hidden font-medium">Sign up</a>
                </div>

                {/* Menu icon */}
                <div onClick={() => setOpen(!open)} className='lg:hidden absolute right-8 top-1/2 -translate-y-1/2 cursor-pointer w-8 h-8 justify-center'>
                    {
                        open ? <XMarkIcon /> : <Bars3Icon />
                    }
                </div>

                {/* Link items */}
                <ul className={`md:flex md:items-center absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-100 ease-in ${open ? 'top-12' : 'top-[-490px]'}`}>
                    {
                        Links.map((link, index) => (
                            <li key={index} className='mx-6 md:ml-8 md:my-0 my-7 font-medium'>
                                <a href={link.link} className='text-gray-800 hover:text-blue-400 duration-500 text-xs'>{link.name}</a>
                            </li>
                        ))
                    }
                    <div className="flex justify-center md:justify-start">
                        <a href="https://urllset.onrender.com/" className="button bg-gray-200 text-black hover:bg-gray-300 mx-2 md:mx-2">Sign in</a>
                        <a href="https://urllset.onrender.com/register" className="button bg-blue-600 text-white hover:bg-blue-700 mx-2 md:mx-2">Sign up</a>
                    </div>
                </ul>
            </div>
        </header>
    );
};

export default Header;
