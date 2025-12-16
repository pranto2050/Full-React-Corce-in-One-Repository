import { useState } from 'react'
// import './App.css'
import Cart from './Component/CartDesign';
import img1 from './Img/Model 1.jpg';
import img2 from './Img/Model 2.jpg';


import UserinformationArrayObj from './Component/UserinformationArrayObj';
import PeopleInfoCart from './Component/PeopleInfoCart';






function App() {


  const people = [
  {
    name: "Rahim Ahmed",
    age: 28,
    address: "Dhaka",
    mobileNo: "01711111111",
    religion: "Islam",
    status: "Married",
    gender: "Male",
    img: "https://source.unsplash.com/300x300/?model,boy"
  },
  {
    name: "Karim Hossain",
    age: 35,
    address: "Chattogram",
    mobileNo: "01822222222",
    religion: "Islam",
    status: "Married",
    gender: "Male",
    img: "https://source.unsplash.com/300x300/?male,model"
  },
  {
    name: "Sumaiya Islam",
    age: 24,
    address: "Sylhet",
    mobileNo: "01933333333",
    religion: "Islam",
    status: "Single",
    gender: "Female",
    img: "https://source.unsplash.com/300x300/?model,girl"
  },
  {
    name: "Nusrat Jahan",
    age: 30,
    address: "Rajshahi",
    mobileNo: "01644444444",
    religion: "Islam",
    status: "Married",
    gender: "Female",
    img: "https://source.unsplash.com/300x300/?female,model"
  },
  {
    name: "Arif Khan",
    age: 40,
    address: "Khulna",
    mobileNo: "01555555555",
    religion: "Islam",
    status: "Divorced",
    gender: "Male",
    img: "https://source.unsplash.com/300x300/?portrait,man"
  },

  {
    name: "Mehedi Hasan",
    age: 27,
    address: "Barishal",
    mobileNo: "01766666666",
    religion: "Islam",
    status: "Single",
    gender: "Male",
    img: "https://source.unsplash.com/300x300/?young,man"
  },
  {
    name: "Sadia Rahman",
    age: 22,
    address: "Dhaka",
    mobileNo: "01877777777",
    religion: "Islam",
    status: "Single",
    gender: "Female",
    img: "https://source.unsplash.com/300x300/?portrait,woman"
  },
  {
    name: "Tanvir Alam",
    age: 33,
    address: "Cumilla",
    mobileNo: "01988888888",
    religion: "Islam",
    status: "Married",
    gender: "Male",
    img: "https://source.unsplash.com/300x300/?model,men"
  },
  {
    name: "Rafiul Islam",
    age: 29,
    address: "Narayanganj",
    mobileNo: "01699999999",
    religion: "Islam",
    status: "Married",
    gender: "Male",
    img: "https://source.unsplash.com/300x300/?handsome,man"
  },
  {
    name: "Mim Akter",
    age: 26,
    address: "Gazipur",
    mobileNo: "01510101010",
    religion: "Islam",
    status: "Single",
    gender: "Female",
    img: "https://source.unsplash.com/300x300/?girl,portrait"
  }
];










  return (
     <div className=" bg-[#aaa6] p-5">

      {/* CartDesign.jsx */}
      <div className='flex gap-2'>
        <Cart name='Pranto' view ={100} img={img1} />
        <Cart name='Santo' view ={300} img={img2} />
      </div>


    {/* User Information show */}
    <UserinformationArrayObj/>

    <div className='m-[50px]'>

    {/* Work */}

      <PeopleInfoCart />

    </div>
    
    
  </div>
  )
}

export default App
