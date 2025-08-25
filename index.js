import express from "express";
import dotenv from "dotenv";
// import connectDB from "./src/config/db.js";

dotenv.config();
// connectDB();

const app = express();

// Middleware
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  return res.send("Welcome to the You vs You API 🚀");
});

// Port
const PORT = 3999

app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
