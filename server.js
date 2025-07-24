import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import authRoutes from "./routes/authRoutes.js";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173", // ✅ Your frontend URL
    credentials: true, // ✅ Allow cookies and headers
  })
);

app.use(express.json());

// Use auth routes under /api/auth
app.use("/api/auth", authRoutes);

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ Connected to MongoDB");
    app.listen(process.env.PORT || 5000, () =>
      console.log("🚀 Server started on port", process.env.PORT || 5000)
    );
  })
  .catch((err) => console.log("❌ MongoDB error:", err));
