'use client'

import Sidebar from "../components/Sidebar";
import FeedSection from "../components/feed/FeedSection";
import FriendSection from "../components/feed/FriendSection";
import { UserAuth } from "../context/AuthContext";
import Link from "next/link";

export default function FeedPage() {
    const { user } = UserAuth();
    return (
        <>
            {(user) ?
                <div className="flex justify-center max-h-screen h-screen bg-[#121139] overflow-hidden">
                    <Sidebar />
                    <FeedSection />
                    <FriendSection />
                </div> :
                <div className="flex justify-center min-h-screen bg-[#121139]">
                    <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] flex justify-center items-center gap-4 flex-col">
                        <h1 className="text-white text-2xl">No user found! Kindly sign in to continue!</h1>
                        <Link href="/signin" className="text-white text-xl border flex justify-center p-2 rounded-xl w-[100px]">Sign In</Link>
                    </div>
                </div>}
        </>
    )
}