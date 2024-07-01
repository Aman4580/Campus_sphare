// import express from "express";
// import {config} from 'dotenv';
// import cors from "cors";
// import {dbConnection} from "./database/dbConnection.js";
// import studentRouter from "./routes/studentRouter.js";
// import teacherRouter from "./routes/teacherRouter.js";
// import assignmentRouter from "./routes/assignmentRouter.js";

// import announcementRouter from "./routes/announcementRouter.js";
// import classRouter from "./routes/classRouter.js";
// import libraryRouter from "./routes/libraryRouter.js";
// import eventsRouter from "./routes/eventsRouter.js";
// import examRouter from "./routes/examRouter.js";
// import attendanceRouter from "./routes/attendanceRouter.js";
// import usersRouter from "./routes/usersRouter.js"
// import adminRegisterRouter from "./routes/adminRegisterRouter.js"
// import  { errorHandler } from "./middlewares/errorHandler.js";



// const app = express();
// config({path: "./config/config.env"});
 
// app.use( 
//     cors({
//         origin: [process.env.FRONTEND_URL],
//         methods: ["GET", "POST", "PUT", "DELETE"], 
    
//     }) 
// );

// app.use((err, req, res, next) => {
//     errorHandler(err, req, res, next);
//   });
 
// app.use(express.json());
// app.use(express.urlencoded({extended: true}));

// app.use("/api/v1/students", studentRouter);
// app.use("/api/v1/teachers", teacherRouter);
// app.use("/api/v1/assignments", assignmentRouter);

// app.use("/api/v1/announcements", announcementRouter);
// app.use("/api/v1/class", classRouter);
// app.use("/api/v1/library", libraryRouter);
// app.use("/api/v1/events", eventsRouter);
// app.use("/api/v1/exam", examRouter);
// app.use("/api/v1/attendance", attendanceRouter);

// app.use("/api/v1/users", usersRouter);
// app.use("/api/v1/register", adminRegisterRouter);

// dbConnection()
 
// export default app;
