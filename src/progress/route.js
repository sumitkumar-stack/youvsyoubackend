import express from "express";
import ProgressLog from "./model.js"; // adjust path as needed

const router = express.Router();

/**
 * @route   POST /api/progress
 * @desc    Add a new progress log
 * @access  Public (you can add auth middleware later)
 */
router.post("/", async (req, res) => {
  try {
    const { userId, date, activityType, value, notes } = req.body;

    if (!userId || !date || !activityType || !value) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const progressLog = new ProgressLog({
      userId,
      date,
      activityType,
      value,
      notes,
    });

    const savedLog = await progressLog.save();
    res.status(201).json(savedLog);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

/**
 * @route   GET /api/progress
 * @desc    Get progress logs (optionally filter by userId)
 * @access  Public
 */
router.get("/", async (req, res) => {
  try {
    const { userId } = req.query;

    const filter = {};
    if (userId) {
      filter.userId = userId;
    }

    const logs = await ProgressLog.find(filter).populate("userId", "name email");
    res.status(200).json(logs);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

export default router;
