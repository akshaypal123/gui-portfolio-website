import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

const Navbar = () => {
    return (
        <nav className='mb-20 flex items-center justify-between py-6'>
            <div className='flex flex-shrink-0 items-center'>
                <a href="../assets/resume.pdf" target="_blank"><h1 className='text-4xl font-bold'>AP</h1><span>⬆️ click to view my CV!</span></a>
            </div>
            <div className='m-8 flex items center justify-center gap-4 text-4xl'>
                <a href='https://www.linkedin.com/in/akshay-pal-4aa102183/' target='_blank'><FaLinkedin /></a>
                <a href='https://github.com/akshaypal123' target='_blank'><FaGithub /></a>
            </div>
        </nav>
    );
};

export default Navbar;
