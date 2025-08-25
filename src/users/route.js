import express from "express";
import Users from "./model.js";
const router = express.Router();

// POST - Create Challenge
router.post("/", async (req, res) => {
  try {
    const challenge = new Users(req.body);
    await challenge.save();
    res.status(201).json(challenge);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// GET - Fetch All Challenges
router.get("/", async (req, res) => {
  try {
    const challenges = await Users.find();
    res.json(challenges);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
