'use client'

import { FaUserFriends } from "react-icons/fa";
import FriendCard from "./FriendCard";

let user=[{
  name:'Mohd Ayan Raza'
},
{
    name:'Harsh Dhiman'
},
{
    name:'Vedant Verma'
},
{
    name:'Paarisha Kaushik'
}]

export default function FriendSection() {
    return (
        <div className="right-0 bg-[#1D1D41] min-h-screen min-w-[80px] max-w-[300px] w-[80px] md:w-[300px] p-4 text-white rounded-xl fixed flex flex-col items-center">
            <h1 className="flex flex-row-reverse gap-4 items-center"><FaUserFriends className="text-3xl" /><span className="md:block hidden text-lg">Friends</span></h1>
            <div className="w-full gap-4 flex flex-col">
                {user.map((user, key) => (
                    <FriendCard key={key} name={user.name} />
                ))}
            </div>
        </div>
    )
}