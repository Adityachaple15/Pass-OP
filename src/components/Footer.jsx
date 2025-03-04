import React from 'react'

const Footer = () => {
  return (
    <div className='bg-slate-800 text-white flex flex-col justify-center items-center fixed bottom-0 w-full'>
        <div className='text-xl font-bold text-center'><span className='text-green-500 '>&lt;</span>
                    Pass
                    <span className='text-green-500'>OP/&gt;</span></div>

        <div className='flex justify-center items-center'> Created with <img className='w-5 mx-2' src="/icons/heart.png" alt="" /> by CodeWithAditya</div>
    </div>
  )
}

export default Footer