import React from 'react';

const Tech = () => {
  return (
    <div className='border-b pb-24'>
      <h2 className='my-20 text-center text-4xl text-pink-300'>Technologies</h2>
      <div className='flex flex-wrap items-center justify-center gap-4'>
        {/* Java Logo */}
        <div className='px-4'>
          <i className="ci ci-java ci-5x"></i>
          <div className='flex flex-col'>
            <h2 className='text-center pt-2 text-lg text-white'>Java</h2>
          </div>
        </div>
        {/* Python Logo */}
        <div className='px-4'>
          <i className="ci ci-python ci-5x"></i>
          <div className='flex flex-col'>
            <h2 className='text-center pt-2 text-lg text-white'>Python</h2>
          </div>
        </div>
        {/* Git Logo */}
        <div className='px-4'>
        <i className="ci ci-git ci-5x"></i>
          <div className='flex flex-col'>
            <h2 className='text-center pt-2 text-lg text-white'>Git</h2>
          </div>
        </div>
        {/* Javascript Logo */}
        <div className='px-4'>
          <i className="ci ci-js ci-5x"></i>
          <div className='flex flex-col'>
            <h2 className='text-center pt-2 text-lg text-white'>Javascript</h2>
          </div>
        </div>
        {/* Typescript Logo */}
        <div className='px-4'>
          <i className="ci ci-ts ci-5x"></i>
          <div className='flex flex-col'>
            <h2 className='text-center pt-2 text-lg text-white'>Typescript</h2>
          </div>
        </div>
        {/* Docker Logo */}
        <div className='px-4'>
          <i className="ci ci-docker ci-5x"></i>
          <div className='flex flex-col'>
            <h2 className='text-center pt-2 text-lg text-white'>Docker</h2>
          </div>
        </div>
        {/* Kubernetes Logo */}
        <div className='px-4'>
          <i className="ci ci-kubernetes ci-5x"></i>
          <div className='flex flex-col'>
            <h2 className='text-center pt-2 text-lg text-white'>Kubernetes</h2>
          </div>
        </div>
        {/* PostgreSQL Logo */}
        <div className='px-4'>
          <i className="ci ci-postgresql ci-5x"></i>
          <div className='flex flex-col'>
            <h2 className='text-center pt-2 text-lg text-white'>PostgreSQL</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tech