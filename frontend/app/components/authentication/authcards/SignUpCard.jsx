'use client'

import { Poppins } from "next/font/google"
import { useForm } from "react-hook-form"
import Link from "next/link";
import SocialLoginButton from "../SocialLoginButton";
import { ErrorMessage } from "@hookform/error-message";
import { UserAuth } from "../../../context/AuthContext";
import { useRouter } from 'next/navigation';
import toast, { Toaster } from 'react-hot-toast';
import styles from "../../../../public/styles/signup.module.css";

const poppins = Poppins({ subsets: ["latin"], weight: '400' });

function SignUpForm({ onSubmit }) {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    return (
        <form onSubmit={handleSubmit(onSubmit)} autoComplete="off" className="w-full mx-auto flex flex-col gap-2">
            <label className="!text-[14px]">Enter your email address
                <input
                    placeholder="Email address"
                    {...register("email", { required: "This field is required", pattern: { value: /^[a-zA-Z0-9@.]+$/, message: "Invalid Email" } })}
                    className="p-2 py-3 my-2 w-full rounded-lg !text-[12px] text-white bg-[#232222] outline-0 focus-visible:border-[#98DBAF] focus-visible:border-1 border-1 border-white" />
                <ErrorMessage errors={errors} name="email" as="span" style={{ color: "red", fontSize: "11px" }} />
            </label>
            <div className="flex gap-4">
                <label className="!text-[14px]">Enter your username
                    <input
                        placeholder="Username"
                        // {...register("username", { required: "This field is required", pattern: { value: /^[a-zA-Z0-9_]+$/, message: "Invalid Username, could only use alpha-numeric character and underscore('_')" } })}
                        {...register("username", { pattern: { value: /^[a-zA-Z0-9_]+$/, message: "Invalid Username, could only use alpha-numeric character and underscore('_')" } })}
                        className="p-2 py-3 my-2 w-full rounded-lg !text-[12px] text-white bg-[#232222] outline-0 focus-visible:border-[#98DBAF] focus-visible:border-1 border-1 border-white" />
                    <ErrorMessage errors={errors} name="username" as="span" style={{ color: "red", fontSize: "11px" }} />
                </label>
                <label className="!text-[14px]">Enter your contact
                    <input
                        placeholder="Contact Number"
                        // {...register("contact", { required: "This field is required", pattern: { value: /^(?:(?:\+|0{0,2})91(\s*|[-])?|[0]?)?([6789]\d{2}([ -]?)\d{3}([ -]?)\d{4})$/, message: "Invalid Contact number" } })}
                        {...register("contact", { pattern: { value: /^(?:(?:\+|0{0,2})91(\s*|[-])?|[0]?)?([6789]\d{2}([ -]?)\d{3}([ -]?)\d{4})$/, message: "Invalid Contact number" } })}
                        className="p-2 py-3 my-2 w-full rounded-lg !text-[12px] text-white bg-[#232222] outline-0 focus-visible:border-[#98DBAF] focus-visible:border-1 border-1 border-white" />
                    <ErrorMessage errors={errors} name="contact" as="span" style={{ color: "red", fontSize: "11px" }} />
                </label>
            </div>
            <label className="!text-[14px]">Enter your Password
                <input
                    placeholder="Password"
                    type="password"
                    {...register("password", { required: "This field is required", pattern: { value: /^[A-Za-z](?=.*[@#])(?!.*[aeiou]).{7,100}$/, message: "Password should have a capital letter, a small letter, a special character and should be atleast 8 characters long." } })}
                    className="p-2 py-3 my-2 w-full rounded-lg !text-[12px] text-white bg-[#232222] outline-0 focus-visible:border-[#98DBAF] focus-visible:border-1 border-1 border-white" />
                <ErrorMessage errors={errors} name="password" as="span" style={{ color: "red", fontSize: "11px" }} />
            </label>
            <input type="submit" value="Sign up" className="my-2 w-full bg-[#9130F4] rounded-lg p-2 border-1 border-white hover:shadow-white hover:shadow-sm" />
        </form>
    )
}
export default function SignUpCard() {
    const router = useRouter();
    const onSubmit = async (data, e) => {
        e.target.reset();
        // const email = await fetch(`https://disposable.debounce.io/?email=${data.email}`);
        // if (email) {
        try {
            await createUser(data.email, data.password);
            toast.success('Login Successful!');
            router.push("/dashboard");
        }
        catch (error) {
            console.log(error);
            toast.error('Invalid Credential');
        }
        // else {
        //     toast.error('Temp Mail Not Allowed');
        // }
    }
    const { user, googleSignIn, logOut, appleSignIn, facebookSignIn, createUser } = UserAuth();
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
    // const signOut = async () => {
    //     try {
    //         await logOut();
    //     }
    //     catch (error) {
    //         console.log(error);
    //     }
    // }
    return (
        <main className={"flex justify-evenly flex-col min-h-[70vh] p-8 rounded-3xl max-w-[500px] text-white min-w-[350px] w-1/2 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] my-8 " + poppins.className + " " + styles.signup_form_container}>
            <div className="mb-8">
                <p className="font-semibold text-lg">Welcome to Education</p>
                <h1 className="font-bold text-4xl">Sign up</h1>
            </div>
            <SignUpForm onSubmit={onSubmit} />
            <SocialLoginButton data={"Sign up"} func={[handleSignInGoogle, handleSignInApple, handleSignInFacebook]} />
            <p className="!text-[13px] text-center"><span className="opacity-70">Have an Account? </span><span className="font-bold"><Link href="/signin">Sign In</Link></span></p>
        </main>
    )
}