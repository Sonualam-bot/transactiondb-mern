import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectMongoDB = async () => {
  try {
    const mongoUri = process.env.MONGO_URI;

    const connectDb = await mongoose.connect(mongoUri);
    console.log(`Connected to MONGO DB : ${connectDb.connection.host}`);
  } catch (error) {
    console.error(`Error connection to MongoDb: ${error.message}`);
    process.exit(1);
  }
};

export default connectMongoDB;
