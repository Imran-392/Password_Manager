import React from 'react'

const Footer = () => {
  return (
    <div className='bg-slate-800 w-full flex'>
        <div className="mx-auto text-white">
        <h1 className="text-2xl text font-bold text-center">
          <span className="text-green-700">&lt; </span>
          Pass<span className="text-green-700">OP</span>
          <span className="text-green-700">/ &gt;</span>
        </h1>
        <div className='flex justify-center items-center gap-1'>
            Created with  <img className='w-5' src="icon/heart.png"/> by Imran
        </div>
        </div>
    </div>
  )
}

export default Footer
