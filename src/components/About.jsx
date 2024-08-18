import React from 'react'
import { ABOUT_TEXT } from '../constants/index.js';

const About = () => {
    return (
        <div className='border-b pb-4'>
            <h2 className='my-20 text-pink-300 text-center text-4xl'>
                About Me
            </h2>
            <div className='flex flex-wrap w-full justify-center text-2xl text-center'>
                <p className='maxw-xl pb-20'>{ABOUT_TEXT}</p>
            </div>
        </div>
    )
}

export default About
