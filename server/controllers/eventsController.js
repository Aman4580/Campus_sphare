import {  Events } from "../models/eventsSchema.js";


// Backend (Node.js) - Assuming this is part of your router setup
export const createEvents = async (req, res, next) => {
  console.log(req.body);
  const { events } = req.body;
  console.log("events is this",events);
  
  try {
    if (!events) {
      return res.status(400).json({ success: false, error: "Please Fill Form!" });
    }
    // Assuming Events is your database model or schema
    await Events.create({ events });
    
    return res.status(200).json({
      success: true,
      message: "Event Created Successfully!",
    });
  } catch (err) {
    next(err);
  }
};


export const getAllEvents = async (req, res, next) => {
  try {
   const event = await Events.find();
  res.status(200).json({
    success: true,
    event,
  });   
}  catch (err) {
  next(err);
}
};
 
