"use client";

import Link from "next/link"
import { useState, FormEvent } from "react"
import { checkEmptyInputs } from "@/utils/checkEmptyInputs";

interface Inputs {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
}

const SignUp = () => {

    const [inputs, setInputs] = useState<Inputs>({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    })

    const [submitting, setSubmitting] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>("");

    const checkPasswords = () => {
        if (inputs.password !== inputs.confirmPassword) {
            setErrorMessage("Passwords do not match");
            return false;
        }
        return true;
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }));
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        setErrorMessage("");
        e.preventDefault();
        setSubmitting(true);
        if (checkEmptyInputs(inputs, setErrorMessage) && checkPasswords()) {
            try {
                const res = await fetch("/api/users/create", {
                    method: "POST",
                    body: JSON.stringify(inputs),
                }).then((data) => data.json());
                setSubmitting(false);
                console.log(res);
                if (res.error) {
                    setErrorMessage(res.error);
                }
            } catch (error) {
                setErrorMessage("Something went wrong");
                setSubmitting(false);
            }
        }
        else {
            setSubmitting(false);
        }
    }

    return (
        <section className="w-screen h-[calc(100vh-120px)] center-flex px-3">
            <div className="w-full h-[500px] border border-white center-flex bg-[url('/assets/sign-up-mobile-bg.jpg')] md:bg-none bg-cover rounded-lg overflow-hidden max-w-[1050px] md:auth-shadow">
                <div className="w-full h-full flex items-center flex-col bg-black bg-opacity-80 px-5 gap-7 pt-14 md:flex-1">
                    <h2 className="font-bold text-3xl self-start w-full text-start pb-1 border-b-2 border-green-400 main-shadow">Sign up</h2>
                    <form className="w-full center-flex flex-col z-10 gap-5 max-w-[600px]" onSubmit={(e) => handleSubmit(e)}>
                        <div className="flex justify-between items-center gap-5 w-full">
                            <input
                                type="text"
                                required
                                placeholder="First Name"
                                name="firstName"
                                value={inputs.firstName}
                                className="py-1 px-2 outline-none border-b-2 border-white bg-slate-900 md:text-lg w-full flex-1"
                                onChange={(e) => handleChange(e)}
                            />
                            <input
                                type="text"
                                required
                                placeholder="Last Name"
                                name="lastName"
                                value={inputs.lastName}
                                className="py-1 px-2 outline-none border-b-2 border-white bg-slate-900 md:text-lg w-full flex-1"
                                onChange={(e) => handleChange(e)}
                            />
                        </div>
                        <input
                            type="email"
                            required
                            placeholder="Email"
                            name="email"
                            value={inputs.email}
                            className="py-1 px-2 outline-none border-b-2 border-white bg-slate-900 md:text-lg w-full"
                            onChange={(e) => handleChange(e)}
                        />
                        <input
                            type="password"
                            required
                            placeholder="Password"
                            name="password"
                            value={inputs.password}
                            className="py-1 px-2 outline-none border-b-2 border-white bg-slate-900 md:text-lg w-full"
                            onChange={(e) => handleChange(e)}
                        />
                        <input
                            type="password"
                            required
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            className="py-1 px-2 outline-none border-b-2 border-white bg-slate-900 md:text-lg w-full"
                            value={inputs.confirmPassword}
                            onChange={(e) => handleChange(e)}
                        />
                        <button
                            type="submit"
                            className="bg-green-400 hover:bg-green-600 border border-white rounded-lg py-1 px-5 text-lg md:text-xl text-black font-semibold w-[70%]"
                        >
                            {submitting ? "Creating..." : "Create Account"}
                        </button>
                    </form>
                    {errorMessage && <span className="text-red-500 mt-[-20px] text-center">{errorMessage}</span>}
                    <span>Already have an account? <Link href="/login" className="font-bold text-green-400 hover:underline hover:text-green-600">Login</Link></span>
                </div>
                <div className="bg-[url('/assets/sign-up-mobile-bg.jpg')] flex-1 hidden md:flex bg-cover h-full"></div>
            </div>
        </section>
    )
}

export default SignUp