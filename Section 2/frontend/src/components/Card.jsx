import React from 'react'

const Card = ({ title, desc, btnText }) => {
    return (
        <div className='p-5 border rounded-xl space-y-4'>
            <h2 className='font-bold text-2xl'>{title}</h2>
            <p>{desc}</p>
            <button className='bg-blue-500 text-white py-2 px-3 rounded-md'>
                {btnText}
            </button>

        </div>
    )
}

export default Card;