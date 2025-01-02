import React from 'react'

const Header = () => {
  return (
    <div className='text-white m-3 flex justify-between items-end'>
        <h1 className='text-xl font-serif'>Hello <br/> <span className='text-2xl font-sans font-semibold'>Priyansu🙌</span></h1>
        <button className='bg-red-500 hover:bg-red-700 px-3 py-2 rounded'>Log Out</button>
    </div>
  )
}

export default Header