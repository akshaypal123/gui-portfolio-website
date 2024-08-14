import React from 'react';
import { RiReactjsLine } from 'react-icons/ri';
import { DiJsBadge } from "react-icons/di";

const Tech = () => {
  return (
    <div className='border-b border-neutral-900 pb-24'>
      <h2 className='my-20 text-center text-4xl text-pink-300'>Technologies</h2>
      <div className='flex flex-wrap items-center justify-center gap-4'>
        <p className='text-3xl font-light'>
            <span className='text-[#6e0101]'>Java</span><span className='text-[#ffffff]'> ⋅ </span>
            <span className='text-[#3776ab]'>Python</span><span className='text-[#ffffff]'> ⋅ </span>
            <span className='text-[#f7df1e]'>Javascript</span><span className='text-[#ffffff]'> ⋅ </span>
            <span className='text-[#007acc]'>Typescript</span><span className='text-[#ffffff]'> ⋅ </span>
            <span className='text-[#00d8ff]'>React</span><span className='text-[#ffffff]'> ⋅ </span>
            <span className='text-sky-700'>PostgreSQL</span>
        </p>
      </div>
    </div>
  )
}

export default Tech
