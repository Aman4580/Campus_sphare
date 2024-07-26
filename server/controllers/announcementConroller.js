import {Announcement} from "../models/announcementSchema.js";
// Create new announcements
export const createAnnouncement = async (req, res, next) => {
  const { announcement } = req.body;
  try {
    if (!announcement) {
      return res.status(400).json({ success: false, message: 'Please provide an announcement' });
    }
    // Create the announcement
    const newAnnouncement = await Announcement.create({ announcement });
    res.status(201).json({
      success: true,
      Announcement: newAnnouncement,
    });
  } catch (err) {
    console.error('Error creating announcement:', err);
    next(err); // Pass the error to the error handler
  }
};


export const getAllAnnouncements = async (req, res, next) => {
  try {
    const announcements = await Announcement.find();
    res.status(200).json({
    success: true,
    announcements,
  }); 
  } catch (err) {
    next(err);
  }
};



