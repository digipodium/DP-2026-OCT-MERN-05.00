'use client';
import React from 'react'

const EventHandling = () => {
    return (
        <div className='h-screen'
            onMouseMove={(e) => {
                // console.log(e.clientX, e.clientY);
                const box = document.getElementById('box');
                box.style.left = e.clientX - 5 + 'px';
                box.style.top = e.clientY - 5 + 'px';
            }}
        >
            <div className='size-4 bg-red-500 rounded-full absolute'
                id='box'
            ></div>
            <div className='container mx-auto py-5'>
                <button className='border p-3'
                    onClick={() => { alert('Button was clicked'); }}>
                    Click Me
                </button>

                <input type="text"
                    className='border p-3 block mt-4'
                    onChange={(e) => { console.log(e.target.value); }}
                />

                <input type="text"
                    className='border p-3 block mt-4'
                    onKeyDown={(e) => { console.log(e.code) }}
                />


                <input type="file"
                    onChange={(e) => { console.log(e.target.files); }}
                />



            </div>
        </div>
    )
}

export default EventHandling;