import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./src/config/db.js";
import userRoutes from "./src/users/route.js"


connectDB();

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/api/user", userRoutes);

app.get("/", (req, res) => {
  return res.send("Welcome to the You vs You API 🚀");
});

// Port
const PORT = process.env.PORT || 3999

app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
