import React from 'react'
import { EMAIL } from '../constants/index.js'

const Contact = () => {
  return (
    <div className='border-b pb-4'>
        <h2 className='my-10 text-center text-4xl text-pink-300'>Contact</h2>
        <div className='text-center tracking-tighter'>
            <a href={EMAIL.link} target='_blank' className='text-2xl font-medium text-purple-500 hover:underline'>{EMAIL.email}</a>
        </div>
    </div>
  )
}

export default Contact
