import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Database connection is live...🚀"))
  .catch((error) => console.log(`Something went wrong. ERROR: ${error}`));

const app = express();

app.listen(5000, () => console.log("Server is listening at prot 5000"));
