import mongoose, { mongo } from "mongoose";

const connectDB = async () => {
    mongoose.connection.on('connected', () => console.log('Database Connected'));

    await mongoose.connect(`${process.env.MONGO_URI}/mern-auth`)
}

export default connectDB