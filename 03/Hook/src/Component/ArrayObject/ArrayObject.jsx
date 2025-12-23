
import React, { useState } from "react";



function ArrayObject(){


    let [user,setUser] = useState({
        name: 'Md.Pranro',
        id: 23303101,
        age: 23,
        university: 'IUBAT'
    });

    let btnClick = ()=>{
        let newUser = {...user};
        console.log(newUser);
        newUser.name = 'Santo';
        newUser.age = 20;
        newUser.id = 232323;
        setUser(newUser);
    }



    return(
        <div className=" h-[100vh] bg-cyan-300  flex flex-col justify-center items-center">

            <div>
                <h1> This Is Array Object </h1>
            </div>


            <div className=" flex flex-col justify-center items-center h-80 w-80 gap-10">
                <div className=" flex flex-col justify-center items-center">
                    <h1>My Name Is: {user.name}</h1>
                    <h1>My Student Id is: {user.id} </h1>
                    <p> I am a student at {user.university} University Dahka</p>
                    <p> I am {user.age} Years Old </p>
                </div>
                <div>
                    <button className=" bg-cyan-400 px-10 py-2 rounded-2xl hover:bg-cyan-600 cursor-pointer border-2 border-cyan-600 " onClick={btnClick}> Change Data </button>
                </div>
            </div>


        </div>
    )
}

export default ArrayObject;



