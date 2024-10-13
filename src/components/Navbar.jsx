import React from 'react'

const Navbar = () => {
    return (
        <nav className='bg-slate-800'>
            <div className="my-container flex items-center
        justify-between px-4 h-14 py-5 text-white">

                <div className='logo font-bold text-2xl'>
                    <span className='text-green-500'>&lt;</span>
                    Pass
                    <span className='text-green-500'>OP/&gt;</span>
                    
                </div>
                {/* <ul>
                    <li className='flex gap-4'>
                        <a className='hover:font-bold' href="/">Home</a>
                        <a className='hover:font-bold' href="/">About</a>
                        <a className='hover:font-bold' href="/">Contact us</a>
                    </li>

                </ul> */}
                <button className='flex justify-between items-center text-white bg-green-700 rounded-full'>
                    <img className='invert p-1 w-10' src="/icons/github.svg" alt="github logo" />
                    <span className='font-bold px-2'>GitHub</span>
                </button>
            </div>
        </nav>
    )
}

export default Navbar