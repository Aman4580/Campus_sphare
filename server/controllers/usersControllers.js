import { Admin } from "../models/adminRegisterSchema.js";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export const adminSignIn = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return res.status(400).json({ success: false, message: "Please provide email and password" });
    }
    const existingAdmin = await Admin.findOne({ email });

    if (!existingAdmin) {
      return res.status(401).json({ success: false, message: "Invalid email or password" });
    }

    const match = await bcrypt.compare(password, existingAdmin.password);
    if (match) {
      const token = jwt.sign({ id: existingAdmin._id, email: existingAdmin.email }, process.env.JWT_SECRET, { expiresIn: '15m' });

      existingAdmin.token = token;  // Assuming you want to store the token in the user object
      await existingAdmin.save(); // Save the token in the database

      return res.status(200).json({
        success: true,
        message: "Admin signed in successfully",
        token,  // Return the token in the response
      });
    } else {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }
  } catch (err) {
    next(err);
  }
};

export const studentSignIn = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return res.status(400).json({ success: false, message: "Please provide email and password" });
    }

    // Your sign-in logic for student goes here

    res.status(200).json({
      success: true,
      message: "Student signed in successfully",
    });
  } catch (err) {
    next(err);
  }
};

export const teacherSignIn = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return res.status(400).json({ success: false, message: "Please provide email and password" });
    }

    // Your sign-in logic for teacher goes here

    res.status(200).json({
      success: true,
      message: "Teacher signed in successfully",
    });
  } catch (err) {
    next(err);
  }
};
