import React from 'react'
import { PROJECTS } from '../constants/index.js'

const Projects = () => {
    return (
        <div className='border-b pb-4'>
            <h2 className='my-20 text-center text-4xl text-pink-300'>Projects</h2>
            <div>
                {PROJECTS.map((project, index) => (
                    <div key={index} className='mb-8 flex flex-wrap'>
                        <div className='w-full'>
                            <h6 className='mb-2 font-bold text-white text-xl'>{project.title}</h6>
                            <p className='mb-4 text-neutral-400 text-lg'>{project.description}</p>
                            <p className='mb-4 text-neutral-400 text-lg'>Github Link: <a href={project.github} target='_blank' className='font-medium text-purple-500 hover:underline'>{project.github}</a></p>
                        </div>
                    </div>
                ))}
            </div>
        </div >
    )
}

export default Projects
