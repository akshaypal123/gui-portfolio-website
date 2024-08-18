import React from 'react';
import { HERO_CONTENT } from '../constants/index.js';
import profile from '../assets/profile.png';

const Hero = () => {
    return (
        <div className='border-b pb-4 lg:mb-35'>
            <div className='flex flex-wrap'>
                <div className='w-full lg:w-1/2'>
                    <div className='flex flex-col items-center lg:items-start'>
                        <h1 className='pb-10 text-6xl font-thin tracking-tight lg:mt-8 lg:text-8xl'>Akshay Pal</h1>
                        <span className='h-40 lg:h-16 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-5xl tracking-tight text-transparent'>
                            Software Engineer
                        </span>
                        <p className='my-2 max-w-xl py-6 text-2xl font-normal tracking-tighter'>
                            {HERO_CONTENT}
                        </p>
                    </div>
                </div>
                <div className='w-full lg:w-1/2 lg:p-8'>
                    <div className='flex justify-center'>
                        <img src={profile} alt="Akshay Pal" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
