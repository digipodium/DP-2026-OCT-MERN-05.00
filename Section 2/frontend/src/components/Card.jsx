import React from 'react'

const Card = () => {
    return (
        <div className='p-5 border rounded-xl space-y-4'>
            <h2 className='font-bold text-2xl'>Card Title Here</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi quo eligendi ipsum facere aliquam aspernatur perspiciatis minima architecto qui nulla.</p>
            <button className='bg-blue-500 text-white py-2 px-3 rounded-md'>
                Submit
            </button>

        </div>
    )
}

export default Card;