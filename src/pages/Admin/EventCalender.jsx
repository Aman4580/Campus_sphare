// EventCalendar.js
import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
//import axios from 'axios';
import { createEvents } from '../../service/operations/authAPI';
import {
  EventCalendarContainer,
  Content,
  CalendarContainer,
  Events,
  Event,
  AddEventForm,
  EventInput,
  AddEventButton,
  ErrorText,
} from '../../styles/EventCalendarStyles';

const EventCalendar = () => {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState('');
  const [error, setError] = useState(null);

  // Function to fetch events from the backend
  // const fetchEvents = async () => {
  //   try {
  //     const response = await axios.get('http://localhost:4000/api/v1/events/getall');
  //     setEvents(response.data.events || []);
  //   } catch (error) {
  //     console.error('Error fetching events:', error);
  //     setError('Error fetching events');
  //   }
  // };

  // useEffect(() => {
  //   fetchEvents();
  // }, []);

  // Function to add a new event
  const addEvent = async (e) => {
    console.log("crerate event run successfully");
    e.preventDefault();
    
    try {
      const response = await createEvents({ event: newEvent });
      console.log("crerate event run successfully",response);
      setEvents([...events, response.data.event]);
      setNewEvent('');
    } catch (error) {
      console.error('Error adding event:', error);
      if (error.response && error.response.data && error.response.data.error) {
        setError(error.response.data.error);
      } else {
        setError('Error adding event loosly');
      }
    }
  };
  

  return (
    <EventCalendarContainer>
      <Sidebar />
      <Content>
        <h1>Events & Calendar</h1>
        <div>Current Time: {new Date().toLocaleString()}</div>
        <CalendarContainer>
          {/* Display Calendar Here */}
          {/* For example: <Calendar /> */}
          Calendar
        </CalendarContainer>
        <AddEventForm onSubmit={addEvent}>
          <h2>Add New Event</h2>
          <EventInput
            type="text"
            value={newEvent}
            onChange={(e) => setNewEvent(e.target.value)}
            placeholder="Enter Event"
          />
          <AddEventButton type="submit">Add Event</AddEventButton>
        </AddEventForm>
        {error && <ErrorText>{error}</ErrorText>}
        <Events>
          <h2>Events</h2>
          {events.map((event, index) => (
            <Event key={index}>{event}</Event>
          ))}
        </Events>
      </Content>
    </EventCalendarContainer>
  );
};

export default EventCalendar;
