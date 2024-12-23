import Student from "../model/student.model.js"
import Course from "../model/course.model.js"
import mongoose from "mongoose";


const addStudent = async (req,res) => {
    const {fullName,email,enrolledCourse} = req.body
    
    const student = await Student.create({
        fullName,
        email,
        enrolledCourse,
      });

const course = Course.findById(enrolledCourse,{
    $push : {enrolledStudent : student._id}
})

res.json({ message: "student added successfully" });

}

const getStudent = async (req,res) =>{
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: "Not valid Id" });
      }
      const student = await Student.findById(id).populate("enrolledCourse");
      if (!student) {
        res.status(404).json({
          message: "no todo found!",
        });
        return;
      }
      res.status(200).json(student);  
}


const getAllstudent = async (req,res) =>{
const page= req.query.page || 1
const limit= req.query.limit || 2
const skip = (page - 1) * limit
  try {
    // Fetch all students
    const allStudent = await Student.find({}).skip(skip).limit(limit);
    res.status(200).json({data:allStudent,
      length : allStudent.length
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch students" });
  }
}

export {addStudent,getStudent,getAllstudent}






