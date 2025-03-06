import React from 'react'

const Navbar = () => {
  return (
    <nav className=' bg-slate-800 px-4 h-16 text-white' >
      <div className='flex justify-between items-center px-40 py-4 mx-auto'>
        <div className='logo font-bold'>
          <span className='text-green-700' >&lt; </span>
          Pass<span className='text-green-700' >OP</span>
          <span className='text-green-700' >/ &gt;</span>
          </div>
        {/* <ul>
            <li className='flex gap-4'>
                <a className='hover:font-bold' href="/">Home</a>
                <a className='hover:font-bold' href="#">About</a>
                <a className='hover:font-bold' href="#">Contact</a>
            </li>
        </ul> */}

        <div className='flex items-center bg-green-500 rounded-2xl w-23 px-1 hover:bg-green-300 hover:text-black ring-white ring-1 cursor-pointer'><img className='w-8 ' src="icon/github.png"/>GitHub</div>
      </div>
    </nav>
  )
}

export default Navbar
