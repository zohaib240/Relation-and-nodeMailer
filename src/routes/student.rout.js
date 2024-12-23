import express from "express";
import { addStudent , getStudent ,getAllstudent } from "../controllers/student.controller.js";

const router = express.Router();

router.post("/student", addStudent);
router.get("/student/:id",getStudent);
router.get("/students",getAllstudent);


export default router;