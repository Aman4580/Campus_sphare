import mongoose from "mongoose";




const announcementSchema = new mongoose.Schema({
    announcement: {
    type: [String], // Define as an array of strings
    required: true,
  },
});

export const Announcement = mongoose.model('Announcement', announcementSchema);





