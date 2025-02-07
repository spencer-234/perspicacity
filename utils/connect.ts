import mongoose from "mongoose";

let isConnected: boolean = false;

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    if (isConnected) {
        console.log('MongoDB is already connected.');
        return;
    }

    await mongoose.connect(process.env.MONGODB_URI!, {
        dbName: "perspicacity"
    })
        .then((res) => {
            isConnected = true;
            console.log("Connected to DB");
        })
        .catch((err) => console.log(err));
}