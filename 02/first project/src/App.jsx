import { useState } from 'react'
// import './App.css'
import Cart from './Component/CartDesign';
import img1 from './Img/Model 1.jpg';
import img2 from './Img/Model 2.jpg';


import UserinformationArrayObj from './Component/UserinformationArrayObj';
import PeopleInfoCart from './Component/PeopleInfoCart';






function App() {


  const people = [
  { name: "Rahim Ahmed", age: 28, address: "Dhaka", mobileNo: "01711111111", religion: "Islam", status: "Married", gender: "Male", img: "https://source.unsplash.com/300x300/?model,boy,1" },
  { name: "Karim Hossain", age: 35, address: "Chattogram", mobileNo: "01822222222", religion: "Islam", status: "Married", gender: "Male", img: "https://source.unsplash.com/300x300/?male,model,2" },
  { name: "Sumaiya Islam", age: 24, address: "Sylhet", mobileNo: "01933333333", religion: "Islam", status: "Single", gender: "Female", img: "https://source.unsplash.com/300x300/?model,girl,3" },
  { name: "Nusrat Jahan", age: 30, address: "Rajshahi", mobileNo: "01644444444", religion: "Islam", status: "Married", gender: "Female", img: "https://source.unsplash.com/300x300/?female,model,4" },
  { name: "Arif Khan", age: 40, address: "Khulna", mobileNo: "01555555555", religion: "Islam", status: "Divorced", gender: "Male", img: "https://source.unsplash.com/300x300/?portrait,man,5" },

  { name: "Mehedi Hasan", age: 27, address: "Barishal", mobileNo: "01766666666", religion: "Islam", status: "Single", gender: "Male", img: "https://source.unsplash.com/300x300/?young,man,6" },
  { name: "Sadia Rahman", age: 22, address: "Dhaka", mobileNo: "01877777777", religion: "Islam", status: "Single", gender: "Female", img: "https://source.unsplash.com/300x300/?portrait,woman,7" },
  { name: "Tanvir Alam", age: 33, address: "Cumilla", mobileNo: "01988888888", religion: "Islam", status: "Married", gender: "Male", img: "https://source.unsplash.com/300x300/?model,men,8" },
  { name: "Rafiul Islam", age: 29, address: "Narayanganj", mobileNo: "01699999999", religion: "Islam", status: "Married", gender: "Male", img: "https://source.unsplash.com/300x300/?handsome,man,9" },
  { name: "Mim Akter", age: 26, address: "Gazipur", mobileNo: "01510101010", religion: "Islam", status: "Single", gender: "Female", img: "https://source.unsplash.com/300x300/?girl,portrait,10" },

  { name: "Anik Paul", age: 31, address: "Dhaka", mobileNo: "01720202020", religion: "Hinduism", status: "Married", gender: "Male", img: "https://source.unsplash.com/300x300/?indian,man,11" },
  { name: "Rita Paul", age: 28, address: "Gopalganj", mobileNo: "01830303030", religion: "Hinduism", status: "Single", gender: "Female", img: "https://source.unsplash.com/300x300/?indian,woman,12" },
  { name: "Sourav Das", age: 34, address: "Jessore", mobileNo: "01940404040", religion: "Hinduism", status: "Married", gender: "Male", img: "https://source.unsplash.com/300x300/?portrait,indian,man,13" },
  { name: "Mala Roy", age: 45, address: "Dinajpur", mobileNo: "01650505050", religion: "Hinduism", status: "Divorced", gender: "Female", img: "https://source.unsplash.com/300x300/?indian,female,14" },
  { name: "Amit Saha", age: 23, address: "Rangpur", mobileNo: "01560606060", religion: "Hinduism", status: "Single", gender: "Male", img: "https://source.unsplash.com/300x300/?student,man,15" },

  { name: "Joseph Gomes", age: 38, address: "Dhaka", mobileNo: "01770707070", religion: "Christianity", status: "Married", gender: "Male", img: "https://source.unsplash.com/300x300/?christian,man,16" },
  { name: "Maria Gomes", age: 32, address: "Barishal", mobileNo: "01880808080", religion: "Christianity", status: "Married", gender: "Female", img: "https://source.unsplash.com/300x300/?christian,woman,17" },
  { name: "Andrew Rozario", age: 41, address: "Mymensingh", mobileNo: "01990909090", religion: "Christianity", status: "Divorced", gender: "Male", img: "https://source.unsplash.com/300x300/?man,portrait,18" },
  { name: "Liza Rozario", age: 27, address: "Dhaka", mobileNo: "01611112222", religion: "Christianity", status: "Single", gender: "Female", img: "https://source.unsplash.com/300x300/?woman,portrait,19" },

  { name: "Abdul Malik", age: 50, address: "Noakhali", mobileNo: "01512121212", religion: "Islam", status: "Married", gender: "Male", img: "https://source.unsplash.com/300x300/?old,man,20" },
  { name: "Farzana Begum", age: 44, address: "Feni", mobileNo: "01713131313", religion: "Islam", status: "Married", gender: "Female", img: "https://source.unsplash.com/300x300/?middle-aged,woman,21" },
  { name: "Shahin Mia", age: 36, address: "Bogura", mobileNo: "01814141414", religion: "Islam", status: "Divorced", gender: "Male", img: "https://source.unsplash.com/300x300/?beard,man,22" },
  { name: "Tania Akter", age: 29, address: "Pabna", mobileNo: "01915151515", religion: "Islam", status: "Single", gender: "Female", img: "https://source.unsplash.com/300x300/?fashion,woman,23" },
  { name: "Imran Hossain", age: 25, address: "Tangail", mobileNo: "01616161616", religion: "Islam", status: "Single", gender: "Male", img: "https://source.unsplash.com/300x300/?casual,man,24" },

  { name: "Rashed Chowdhury", age: 47, address: "Cox’s Bazar", mobileNo: "01517171717", religion: "Islam", status: "Married", gender: "Male", img: "https://source.unsplash.com/300x300/?business,man,25" },
  { name: "Nasrin Sultana", age: 39, address: "Lakshmipur", mobileNo: "01718181818", religion: "Islam", status: "Married", gender: "Female", img: "https://source.unsplash.com/300x300/?hijab,woman,26" },
  { name: "Hasan Mahmud", age: 34, address: "Kushtia", mobileNo: "01819191919", religion: "Islam", status: "Single", gender: "Male", img: "https://source.unsplash.com/300x300/?smiling,man,27" },
  { name: "Shila Khatun", age: 31, address: "Sirajganj", mobileNo: "01920202021", religion: "Islam", status: "Divorced", gender: "Female", img: "https://source.unsplash.com/300x300/?elegant,woman,28" },
  { name: "Omar Faruk", age: 26, address: "Munshiganj", mobileNo: "01621212121", religion: "Islam", status: "Single", gender: "Male", img: "https://source.unsplash.com/300x300/?portrait,boy,29" }
];


  return (
     <div className=" bg-[#aaa6] p-5">

      {/* CartDesign.jsx */}
      {/* <div className='flex gap-2'>
        <Cart name='Pranto' view ={100} img={img1} />
        <Cart name='Santo' view ={300} img={img2} />
      </div> */}


    {/* User Information show */}
    {/* <UserinformationArrayObj/> */}

    <div className='flex flex-wrap gap-5 mt-[50px] text-blue-500'>

      

    {/* Work */}

    {people.map((e,index) => (
      <PeopleInfoCart
        key = {index}
        name={e.name}
        age={e.age}
        address={e.address}
        mobileNo={e.mobileNo}
        religion={e.religion}
        status={e.status}
        gender={e.gender}
        img={e.img}
      />
))}


      



    </div>
    
    
  </div>
  )
}

export default App
