'use client'

import SignIn from "../components/authentication/SignIn";
import { UserAuth } from "../context/AuthContext";
import Link from "next/link";

export default function SignInPage() {
    const { user } = UserAuth();

    return (
        <>
            {(user) ?
                <div className="flex justify-center min-h-screen bg-[#121139]">
                    <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] flex justify-center items-center gap-4 flex-col">
                        <h1 className="text-white text-2xl">Already signed in! Kindly proceed to Home!</h1>
                        <Link href="/" className="text-white text-xl border flex justify-center p-2 rounded-xl w-[100px]">Home</Link>
                    </div>
                </div> :
                <SignIn />
            }
        </>
    )
}