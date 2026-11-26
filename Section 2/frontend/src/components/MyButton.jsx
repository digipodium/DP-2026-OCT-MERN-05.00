import React from 'react'

const MyButton = ({children}) => {
  return (
    <button className='bg-blue-500 text-white rounded-md px-3 py-2'>
        {children}
    </button>
  )
}

export default MyButton;