'use client';
import React, { useState } from 'react'

const TodoApp = () => {

    // let count = 0;
    // const [count, setCount] = useState(0);



    return (
        <div className=''>
            <div className='container mx-auto py-10'>

                <h2 className='text-3xl font-bold text-center my-5'>
                    Todo App
                </h2>

                <div className='border rounded-lg shadow-lg'>
                    <div className='p-3'>
                        <input type="text" className='w-full p-2' />
                    </div>
                    <div className='border-t p-4'>
                        <p className='text-gray-500 text-center my-3 font-semibold'>
                            No ToDo to Show😢
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default TodoApp;