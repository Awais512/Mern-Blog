import express from "express";
import mongoose from "mongoose";

//Routes importing
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";

import dotenv from "dotenv";
dotenv.config();

// Initialize express
const app = express();

app.use(express.json());

// Database Connections
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Database connection is live...🚀"))
  .catch((error) => console.log(`Something went wrong. ERROR: ${error}`));

// Node Server Setup
app.listen(5000, () => console.log("Server is listening at prot 5000"));

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
