"use client";

import Link from "next/link"
import Image from "next/image"
import { FormEvent, useEffect, useState } from "react";
import { signIn } from "next-auth/react";
import { checkEmptyInputs } from "@/utils/checkEmptyInputs";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

interface Inputs {
    email: string;
    password: string;
}

const Login = () => {

    const { data: session } = useSession();
    const router = useRouter();

    const [inputs, setInputs] = useState<Inputs>({
        email: "",
        password: "",
    })

    const [errorMessage, setErrorMessage] = useState<string>("");
    const [submitting, setSubmitting] = useState<boolean>(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }));
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setErrorMessage("");
        setSubmitting(true);
        if (checkEmptyInputs(inputs, setErrorMessage)) {
            try {
                const res = await signIn("credentials", {
                    email: inputs.email,
                    password: inputs.password,
                    redirect: false,
                });
                if (res?.ok) {
                    router.push("/");
                } else {
                    setSubmitting(false);
                    setErrorMessage("Incorrect email or password");
                }

            } catch (error) {
                setSubmitting(false);
                setErrorMessage("Something went wrong");
            }
        } else {
            setSubmitting(false);
        }

    }

    return (
        <>
            {!session?.user ? (
                <section className="w-screen h-[calc(100vh-120px)] center-flex px-3">
                    <div className="w-full h-[500px] border border-white center-flex bg-[url('/assets/login-mobile-bg.jpg')] md:bg-none bg-cover rounded-lg overflow-hidden max-w-[1050px] md:auth-shadow">
                        <div className="bg-[url('/assets/login-mobile-bg.jpg')] flex-1 hidden md:flex bg-cover h-full"></div>
                        <div className="w-full h-full flex items-center flex-col bg-black bg-opacity-80 px-5 gap-7 pt-14 md:flex-1">
                            <h2 className="font-bold text-3xl self-start w-full text-start pb-1 border-b-2 border-green-400 main-shadow">Login</h2>
                            <form className="w-full center-flex flex-col z-10 gap-5 max-w-[600px]" onSubmit={(e) => handleSubmit(e)}>
                                <input
                                    type="email"
                                    required
                                    name="email"
                                    placeholder="Email"
                                    className="py-1 px-2 outline-none border-b-2 border-white bg-slate-900 text-lg w-full"
                                    value={inputs.email}
                                    onChange={(e) => handleChange(e)}
                                />
                                <input
                                    type="password"
                                    required
                                    name="password"
                                    placeholder="Password"
                                    className="py-1 px-2 outline-none border-b-2 border-white bg-slate-900 text-lg w-full"
                                    value={inputs.password}
                                    onChange={(e) => handleChange(e)}
                                />
                                <button
                                    type="submit"
                                    className="bg-green-400 hover:bg-green-600 border border-white rounded-lg py-1 px-5 text-xl text-black font-semibold w-[70%]">
                                    {submitting ? "Authenticating..." : "Login"}
                                </button>
                            </form>
                            {errorMessage && <span className="text-red-500 mt-[-20px] text-center">{errorMessage}</span>}
                            <div className="border-white border center-flex w-[80%]">
                            </div>
                            <button
                                onClick={() => signIn("google")}
                                className="bg-[#fc7569] hover:bg-[#ff4e4e] center-flex rounded-lg w-[70%] py-1 gap-2 px-2 text-sm max-w-[420px]"
                            >
                                <Image
                                    src="/assets/google.svg"
                                    width={25}
                                    height={25}
                                    alt="google-icon"
                                />
                                <span>Sign in with Google</span>
                            </button>
                            <span>Don't have an account? <Link href="/sign-up" className="font-bold text-green-400 hover:underline hover:text-green-600">Sign up</Link></span>
                        </div>
                    </div>
                </section>
            ) : router.replace("/")}
        </>
    )
}

export default Login