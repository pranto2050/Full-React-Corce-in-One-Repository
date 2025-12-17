


import React from "react";




function PeopleInfoCart(props){
    return(
        <div className="">
            <div className=" h-[300px] w-[400px] bg-white">
                <h1>{props.name} </h1>
                <p>{props.age} </p>
                <p>{props.address} </p>
                <p>{props.status} </p>
            </div>
            
        </div>

    );
};
export default PeopleInfoCart;