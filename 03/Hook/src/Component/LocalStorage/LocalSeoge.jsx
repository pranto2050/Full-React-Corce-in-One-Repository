



import React from "react";


function LocalSeoge(){

    console.log('Local Storage');
    // Clear All
    // localStorage.clear();
    // sessionStorage.clear();


    // Set Local Storage
    // localStorage.setItem('Name','Pranto');
    // localStorage.setItem('age',20);
    // localStorage.setItem('ID',23303101);
    // Get Items
    // let localStorName = localStorage.getItem('Name','age','ID');
    // let localStorAge = localStorage.getItem('age');
    // let localStorID = localStorage.getItem('ID');
    // console.log(localStorName,localStorAge,localStorID);

    // Remve Items
    // localStorage.removeItem('Name');
    // localStorage.removeItem('age');

    //   console.log(localStorName,localStorAge,localStorID);




    //Array

    let user = {
        name: 'Md.Pranto',
        age: 12,
        id: 23303101
    }
    // Convart for Stor Local
    let convart = JSON.stringify(user)

    localStorage.setItem('user',convart)
    return(
        <div>


        </div>
    );
}

export default LocalSeoge;
