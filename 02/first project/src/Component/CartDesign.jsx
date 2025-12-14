import React from 'react';
import './css/cart.css';
import img01 from '../Img/Model 1.jpg';


function CartDesign(props) {
  return (
    <>
    <div className='bg-white h-[400px] w-[300px] rounded-lg shadow-lg flex flex-col items-center justify-center' >
        <div className="top_section">
            <img src={props.img} className='rounded-md h-[300px]'/>
        </div>
        <div className="contantSection">

        </div>
        <div className="footer">

        </div>
        <div className='flex flex-col gap-2'>
            <h1> {props.name} </h1>
            <div className='flex justify-between gap-10 items-center'>
                <p> Like: {props.view} </p>
                <button type='submit' className='cursor-pointer border-1 border-red-500 p-2 rounded-[10px]'> Load More </button>
            </div>
        </div>

      
    </div>
    </>
  )
}

export default CartDesign
