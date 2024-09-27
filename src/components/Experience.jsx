import React from 'react'
import { EXPERIENCES } from '../constants/index.js'

const Experience = () => {
    return (
        <div className='border-b pb-4'>
            <h2 className='my-20 text-center text-4xl text-pink-300'>Experience</h2>
            <div>
                {EXPERIENCES.map((experience, index) => (
                    <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                        <div className='w-full lg:w-1/4'>
                            <p className='mb-2 text-xl text-white'>{experience.year}</p>
                        </div>
                        <div className='w-full max-w-xl lg:w-3/4 text-xl'>
                            <h6 className='mb-2 font-bold text-white'>{experience.role} - <span>{experience.company}</span></h6>
                            <p className='mb-4 text-neutral-400 text-lg'>{experience.description}</p>
                            <div className='flex flex-wrap items-center w-full lg:flex'>
                                {experience.technologies.map((tech, index) => (
                                    <span key={index} className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-semibold text-purple-800'>{tech}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Experience
