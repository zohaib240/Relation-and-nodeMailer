import Course from "../model/course.model.js"
import nodemailer from "nodemailer"

const addCourse = async (req, res) => {

 const {name , duration} = req.body
 if (!name) return res.status(400).json({ message: "name is required" });

 const course = await Course.create({name,duration})
 res.json({
    message: "course created",
  });

}

const getCourse = async (req,res) =>{
    const course = await Course.find({}).populate('enrolledStudent')
    res.json(course);

}


const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  secure: false, // true for port 465, false for other ports
  auth: {
    user: "carol.baumbach25@ethereal.email",
    pass: "3uDPxHucjx6mH2X52T",
  },
});


const sendEmail =async (req,res)=>{
  const info = await transporter.sendMail({
    from: '"Maddison Foo Koch 👻" <maddison53@ethereal.email>', // sender address
    to: "carol.baumbach25@ethereal.email", // list of receivers
    subject: "Hello brother ✔", // Subject line
    text: "hdsfidfdfiudf?", // plain text body
    html: "<djsfjdsiofjdiofjf</b>", // html body
  })
  res.send('Hello jani!')
  console.log("Message sent: %s", info.messageId);
}

export {addCourse,getCourse,sendEmail}