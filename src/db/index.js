import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const options = {
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 10 * 1000,
};

const db = mongoose
  .connect(process.env.DB_CONNECTION, options)
  .then(() => {
    console.log("success");
  })
  .catch((error) => console.error(error));

  export default db;