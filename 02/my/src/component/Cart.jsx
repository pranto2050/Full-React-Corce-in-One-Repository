import React from 'react';

function Cart(props) {
  return (
    <div className="bg-red-500 h-[400px] w-[300px]">
      <div className="flex flex-col items-center justify-center p-4 text-white">
        <img className="h-[200px] w-[200px] rounded-[100%]" src={props.img} alt="Model" />
        <h1>I am {props.name}</h1>
        <p>I am a Student at {props.University} University</p>
      </div>
    </div>
  )
}

export default Cart
