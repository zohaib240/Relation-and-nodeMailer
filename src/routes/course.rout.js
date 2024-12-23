import express from "express";
import { addCourse, getCourse, sendEmail } from "../controllers/course.controller.js";

const router = express.Router();

router.post("/course", addCourse);
router.get("/course", getCourse);
router.get("/sendEmail", sendEmail);

export default router;