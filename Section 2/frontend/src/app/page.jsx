import Card from '@/components/Card';
import React from 'react'

const Home = () => {

  const name = "Ada Wong";
  const weight = 'bold';
  const color = 'red';

  return (
    <div>
      <h1 className='text-3xl font-bold'>Welcome to Homepage</h1>

      <p style={{ fontWeight: weight, color: color }}>
        My Name is {name}
      </p>

      <img src="" alt="" />
      <input type="text" />
      <hr />
      <br />

      <div className='grid grid-cols-3 gap-4'>
        <Card />
        <Card />
        <Card />
      </div>

    </div>
  )
}

export default Home;