import express from "express";
import connectDB from "./src/db/index.js";
import dotenv from "dotenv";
import courseRoute from "./src/routes/course.rout.js";
import studentRoute from "./src/routes/student.rout.js";

dotenv.config();

const app = express(); // `app` ko pehle initialize karo

// Middleware
app.use(express.json());


app.get("/", (req, res) => {
  res.send("Hello World!");
});

//routes
app.use("/api/v1", courseRoute);
app.use("/api/v1", studentRoute);


// Database connection and server start
connectDB()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`⚙️  Server is running at port : ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGO DB connection failed !!! ", err);
  });

console.log("Server started...");