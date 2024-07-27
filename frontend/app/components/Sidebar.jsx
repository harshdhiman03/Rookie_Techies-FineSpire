'use client'

import Image from "next/image";
import { UserAuth } from "../context/AuthContext";
import { FaHome } from "react-icons/fa";
import { MdOutlineFeed, MdChatBubble, MdLogout } from "react-icons/md";
import { IoIosSettings } from "react-icons/io";
import { IoAnalytics } from "react-icons/io5";
import Link from "next/link";

export default function Sidebar() {
    const { user, logOut } = UserAuth();
    return (
        <aside className={"left-0 bg-[#1D1D41] min-h-screen min-w-[80px] max-w-[300px] w-[80px] md:w-[300px] p-4 text-white rounded-xl fixed flex flex-col items-center md:items-start"}>
            <Link href="/dashboard" className="w-full flex gap-4 items-center border-b-1 border-b-white py-4">
                <div className="rounded-full bg-white w-[50px] h-[50px] flex justify-center items-center text-xl text-black uppercase"><p>{(user) ? user.displayName[0] : "G"}</p></div>
                <p className="hidden min-[800px]:block text-xl">{(user) ? user.displayName : "Guest"}</p>
            </Link>
            <Link href="/" className="flex gap-4 items-center py-4">
                <FaHome className="text-3xl" />
                <p className="text-lg hidden min-[800px]:block">Home</p>
            </Link>
            <Link href="/analyse" className="flex gap-4 items-center py-4">
                <IoAnalytics className="text-3xl" />
                <p className="text-lg hidden min-[800px]:block">Analysis</p>
            </Link>
            <Link href="/expensechat" className="flex gap-4 items-center py-4">
                <MdChatBubble className="text-3xl" />
                <p className="text-lg hidden min-[800px]:block">Expense Chat</p>
            </Link>
            <Link href="https://finspirerookietechies.streamlit.app/" className="flex gap-4 items-center py-4">
                <MdChatBubble className="text-3xl" />
                <p className="text-lg hidden min-[800px]:block">Stock Chat</p>
            </Link>

            <Link href="/feed" className="flex gap-4 items-center py-4">
                <MdOutlineFeed className="text-3xl" />
                <p className="text-lg hidden min-[800px]:block">Feed</p>
            </Link>
            {(user) ? <div onClick={() => { logOut() }} className="justify-start flex items-center gap-4 cursor-pointer"><MdLogout className={"text-3xl"} /><p className="text-lg hidden min-[800px]:block">Logout</p></div> : <></>}
        </aside >
    )
}