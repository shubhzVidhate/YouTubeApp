import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    console.log("connecting..");
    const connectionInstance = await mongoose.connect(
      `${process.env.DB_URI}/${DB_NAME}`
    );
    console.log("DB CONNECTED !! DB HOST");
 } catch (error) {
    console.log("Connection Failed.!!");
    console.error("MongoDB Error:", error.message);
}
};


export default connectDB;