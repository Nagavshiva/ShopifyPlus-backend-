import mongoose from "mongoose";


const connectToDatabase = async()=>{
    try {
        mongoose.set('strictQuery', false);
        const connect = await mongoose.connect(process.env.MONGODB_URL);
        console.log(`MongoDB Connected: ${connect.connection.host}`);
        
    } catch (error) {
        console.log(`Error:${error.message}`)
    }
}
export default connectToDatabase;