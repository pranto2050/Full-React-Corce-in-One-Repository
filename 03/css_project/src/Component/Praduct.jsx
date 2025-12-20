import React from "react";
import Img1 from '../assets/Img/01.jpg';
import Img2 from '../assets/Img/02.jpg';
import Img3 from '../assets/Img/03.jpg';
import 'remixicon/fonts/remixicon.css';
import SiderPart from './SiderPart';

function Praduct() {

    const users = [
        {
            id: 1,
            description: "Bangladesh, or the People's Republic of Bangladesh, is a densely populated South Asian nation known for its fertile river deltas",
            click: "Click Here",
            img: Img1,
            color: "red"
        },
        {
            id: 2,
            description: "Bangladesh, or the People's Republic of Bangladesh, is a densely populated South Asian nation known for its fertile river deltas",
            click: "Click Here",
            img: Img2,
            color: "green"
        },
        {
            id: 3,
            description: "Bangladesh, or the People's Republic of Bangladesh, is a densely populated South Asian nation known for its fertile river deltas",
            click: "Click Here",
            img: Img3,
            color: "blue"
        }
    ];

    return (
        <div className="bg-blue-300 mt-5 p-10">

            <div className="flex items-center gap-10 rounded-[10px]">
                <img src={Img1} className="h-[60px] rounded-full" />
                <div>
                    <h1 className="text-4xl font-bold">Md. Pranto Islam</h1>
                    <p>I am a Web Developer</p>
                </div>
            </div>

            <div className="bg-white p-5 rounded-[5px] mt-5">

                <div className="flex justify-between">
                    <h2 className="bg-black text-white px-4 py-2 rounded-2xl uppercase">
                        Target Audience
                    </h2>
                    <p className="uppercase tracking-wider">Digital Platform</p>
                </div>

                <div className="mt-10 flex gap-5">

                    <div className="w-1/2 flex flex-col justify-between">
                        <div>
                            <h1 className="text-4xl font-bold uppercase">Customer Review</h1>
                            <p className="mt-5">Some description text here...</p>
                        </div>
                        <i className="ri-arrow-right-up-line text-6xl"></i>
                    </div>

                    <div className="flex gap-4 overflow-x-auto">
                        {users.map((user) => (
                            <SiderPart key={user.id} user={user} />
                            
                        ))}
                    </div>

                </div>

            </div>
        </div>
    );
}

export default Praduct;
