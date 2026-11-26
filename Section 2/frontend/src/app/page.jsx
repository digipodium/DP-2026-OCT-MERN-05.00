import Card from '@/components/Card';
import MyButton from '@/components/MyButton';
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
        <Card
          title={'Card Title 1'}
          desc={'Card Description 1'}
          btnText={'Submit'}
        />
        <Card
          title={'Card Title 2'}
          desc={'Card Description 2'}
          btnText={'Explore'}
        />
      </div>

      <MyButton>Submit</MyButton>
      <MyButton>Signup</MyButton>
      <MyButton>Login</MyButton>

    </div>
  )
}

export default Home;