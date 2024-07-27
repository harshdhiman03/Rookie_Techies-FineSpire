'use client'

import { Poppins } from "next/font/google"
import { useForm } from "react-hook-form"
import Link from "next/link";
import SocialLoginButton from "../SocialLoginButton";
import { ErrorMessage } from "@hookform/error-message";
import { UserAuth } from "../../../context/AuthContext";
import { useRouter } from 'next/navigation';
import toast, { Toaster } from 'react-hot-toast';
import styles from "../../../../public/styles/signin.module.css";

const poppins = Poppins({ subsets: ["latin"], weight: '400' });

function SignInForm({ onSubmit }) {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()
    return (
        <form onSubmit={handleSubmit(onSubmit)} autoComplete="off" className="w-full mx-auto flex flex-col gap-3">
            <label className="!text-[14px]">Enter your username or email address
                <input
                    placeholder="Username or email address"
                    {...register("loginID", { required: "This field is required", pattern: { value: /^[a-zA-Z0-9@.]+$/, message: "Invalid username or email ID" } })}
                    className="p-2 py-3 my-2 w-full rounded-lg !text-[12px] text-white bg-[#232222] outline-0 focus-visible:border-[#98DBAF] focus-visible:border-1 border-1 border-white" />
                <ErrorMessage errors={errors} name="loginID" as="span" style={{ color: "red", fontSize: "11px" }} />
            </label>
            <label className="!text-[14px]">Enter your Password
                <input
                    placeholder="Password"
                    type="password"
                    {...register("password", { required: "This field is required", pattern: { value: /^[A-Za-z](?=.*[@#])(?!.*[aeiou]).{7,100}$/, message: "Password should have a capital letter, a small letter, a special character and should be atleast 8 characters long." } })}
                    className="p-2 py-3 my-2 w-full rounded-lg !text-[12px] text-white bg-[#232222] outline-0 focus-visible:border-[#98DBAF] focus-visible:border-1 border-1 border-white" />
                <ErrorMessage errors={errors} name="password" as="span" style={{ color: "red", fontSize: "11px" }} />
            </label>
            <p className="text-[12px] text-right">Forgot Password?</p>
            <input type="submit" value="Sign in" className="w-full bg-[#9130F4] rounded-lg p-2 border-1 border-white hover:shadow-white hover:shadow-sm" />
        </form>
    )
}
export default function SignInCard() {
    const router = useRouter();
    const onSubmit = async (data, e) => {
        e.target.reset();
        try {
            await signInUser(data.loginID, data.password);
            toast.success('Login Successful!');
            router.push("/dashboard");
        }
        catch (error) {
            toast.error('Invalid Credential');
        }
    }
    const { user, googleSignIn, logOut, appleSignIn, facebookSignIn, signInUser } = UserAuth();
    const handleSignInGoogle = async () => {
        try {
            await googleSignIn();
        }
        catch (error) {
            console.log(error);
        }
    }

    const handleSignInApple = async () => {
        try {
            await appleSignIn();
        }
        catch (error) {
            console.log(error);
        }
    }

    const handleSignInFacebook = async () => {
        try {
            await facebookSignIn();
        }
        catch (error) {
            console.log(error);
        }
    }

    return (
        <main className={"flex justify-evenly flex-col min-h-[70vh] p-8 rounded-3xl max-w-[500px] text-white min-w-[300px] w-1/2 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] " + poppins.className + " " + styles.signin_form_container}>
            <div>
                <p className="font-semibold text-lg">Welcome to Finspire</p>
                <h1 className="font-bold text-4xl">Sign in</h1>
            </div>
            <SocialLoginButton data={"Sign in"} func={[handleSignInGoogle, handleSignInApple, handleSignInFacebook]} />
            <SignInForm onSubmit={onSubmit} />
            <p className="!text-[13px] text-center"><span className="opacity-70">No Account? </span><span className="font-bold"><Link href="/signup">Sign Up</Link></span></p>
            <Toaster />
        </main>
    )
}