'use client'

import Sidebar from "../components/Sidebar";
import DashboardSection from "../components/dashboard/DashboardSection";
import { UserAuth } from "../context/AuthContext";
import Link from "next/link";

export default function DashboardPage() {
    const { user } = UserAuth();
    console.log(user);
    return (
        <>
            {(user) ?
                <div className="flex justify-center min-h-screen bg-[#121139]">
                    <Sidebar />
                    <DashboardSection />
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