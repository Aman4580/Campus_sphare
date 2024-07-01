
import {Admin } from "../models/adminRegisterSchema.js";
import { handleValidationError } from "../middlewares/errorHandler.js";
import bcrypt from 'bcrypt';

export const adminRegister= async (req, res, next) => {
  console.log(req.body);
  const { email, password  } = req.body;
  console.log("email correct and password correct is this",email,password);
  try {
      if (!email || !password  ) {
        handleValidationError("Please Fill Form!", 400);
  }

    // Check if the admin already exists in the database
    const existingAdmin = await Admin.findOne({ email });
    if (existingAdmin) {
      return res.status(400).json({ success: false, message: "Admin already exists" });
    }

    
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    const admin = new Admin({ email, password: hashedPassword });
    await admin.save();
  res.status(200).json({
    success: true,
    message: "Admin Created!",
  });
  } catch (err) {
    next(err);
  }
};

export const studentRegister= async (req, res, next) => {
  console.log(req.body);
  const { email, password  } = req.body;
  try {
      if (!email || !password  ) {
        handleValidationError("Please Fill Form!", 400);
  }

    // Check if the admin already exists in the database
    const existingAdmin = await Admin.findOne({ email });
    if (existingAdmin) {
      return res.status(400).json({ success: false, message: "Admin already exists" });
    }

    
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    const admin = new Admin({ email, password: hashedPassword });
    await admin.save();
  res.status(200).json({
    success: true,
    message: "Admin Created!",
  });
  } catch (err) {
    next(err);
  }
};


