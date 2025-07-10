import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

async function connectDB() {
  await mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log(`Mongo DB connected ✅`))
    .catch((err) => console.log(`Mongo DB connection FailedFailed ❌`, err));
}

export default connectDB;
