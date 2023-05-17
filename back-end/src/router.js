import express from "express";
import task from "./models/task.js";

const router = express.Router();

router.get("/", task.getData);

export default router;
