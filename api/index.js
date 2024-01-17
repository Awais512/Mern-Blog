import express from "express";
import mongoose from "mongoose";

//Routes importing
import userRoutes from "./routes/user.route.js";

import dotenv from "dotenv";
dotenv.config();

// Initialize express
const app = express();

// Database Connections
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Database connection is live...🚀"))
  .catch((error) => console.log(`Something went wrong. ERROR: ${error}`));

// Node Server Setup
app.listen(5000, () => console.log("Server is listening at prot 5000"));

app.use("/api/user", userRoutes);
