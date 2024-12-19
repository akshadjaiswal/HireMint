import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("MongoDB connected Successfully")
    } catch (err) {
        console.log(err)
    }
}
export default connectDB;