import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { connectToDB } from "@/utils/connect";
import User from "@/models/user";

interface FormData {
    email: string
    firstName: string
    lastName: string
    password: string
}

export const POST = async (request: NextRequest) => {
    const { email, firstName, lastName, password }: FormData = await request.json();

    try {

        if (password.length > 20 || password.length < 8) {
            return NextResponse.json({ error: "Password must be between 8 and 20 characters" });
        }

        await connectToDB();

        const emailCheck = await User.findOne({
            email: email
        });

        if (emailCheck !== null) {
            return NextResponse.json({ error: "User with that email already exists" }, { status: 409 });
        }


        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const username = email.split('@')[0];

        await User.create({
            email: email,
            password: hashedPassword,
            username: username,
            firstName: firstName,
            lastName: lastName,

        })

        return NextResponse.json({ message: 'User Created' }, { status: 200 });

    } catch (err) {
        return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
    }
}