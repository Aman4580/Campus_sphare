import express from 'express';


import { adminSignIn } from '../controllers/usersControllers.js';
import { adminRegister } from '../controllers/adminRegisterController.js';
import { studentSignIn, teacherSignIn } from "../controllers/usersControllers.js";
import { getAllStudents, createStudent } from "../controllers/studentController.js";
import { createTeacher, getAllTeachers } from "../controllers/teacherController.js";
import { getAllBooks, createBook } from "../controllers/libraryConroller.js";
import { getAllExams, addExam } from "../controllers/examController.js";
import { getAllEvents, createEvents } from "../controllers/eventsController.js";
import { getAllClasses, createClass } from "../controllers/classConroller.js";
import { markAttendance, getAllAttendance } from "../controllers/attendanceController.js";
import { createAssignment, getAllAssignments } from "../controllers/assignmentController.js";
import { getAllAnnouncements, createAnnouncement } from "../controllers/announcementConroller.js";


const router = express.Router();

router.post('/signin', adminSignIn);
router.post('/admin', adminRegister);

router.post('/student/signin', studentSignIn);
router.post('/teacher/signin', teacherSignIn);

router.get('/getall', getAllStudents);
router.post('/', createStudent);

router.post('/', createTeacher);
router.get('/getall', getAllTeachers);

router.get('/getall', getAllBooks);
router.post('/books', createBook);

router.get('/getall', getAllExams);
router.post('/', addExam);

router.get('/getall', getAllEvents);
router.post('/api/v1/events', createEvents);

router.get('/getall', getAllClasses);
router.post('/', createClass);

router.post('/', markAttendance);
router.get('/getall', getAllAttendance);

router.post("/", createAssignment);
router.get("/getall", getAllAssignments);

router.get('/getall', getAllAnnouncements);
router.post('/', createAnnouncement);

export default router;
