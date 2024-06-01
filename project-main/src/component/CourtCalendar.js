import React, { useState } from 'react';
import './CourtCalendar.css'; // Import your CSS file
import Navbar from './Navbar'
const CourtCalendar = () => {
  const [events, setEvents] = useState([]); // Store calendar events
  const [eventTitle, setEventTitle] = useState(''); // Track event title input
  const [eventDate, setEventDate] = useState(''); // Track event date input

  // Function to add a new event to the calendar
  const handleEventSubmit = (e) => {
    e.preventDefault();
    const newEvent = { title: eventTitle, date: eventDate };
    addEvent(newEvent);
    setEventTitle(''); // Clear input after submission
    setEventDate(''); // Clear input after submission
  };

  // Function to add a new event to the calendar
  const addEvent = (event) => {
    setEvents([...events, event]);
  };

  // Function to render the list of events
  const renderEvents = () => {
    if (events.length === 0) {
      return <p>No events scheduled.</p>;
    }

    return (
      <ul>
        {events.map((event, index) => (
          <li key={index}>
            <strong>{event.title}</strong> - {event.date}
          </li>
        ))}
      </ul>
    );
  };

  return (

    <>
    <Navbar/>
    <div className="court-calendar">
      <h2>Court Calendar</h2>
      <div className="schedule-event">
        <h3>Schedule an Event</h3>
        <form onSubmit={handleEventSubmit}>
          <div className="form-field">
            <label htmlFor="eventTitle">Title:</label>
            <input
              type="text"
              id="eventTitle"
              value={eventTitle}
              onChange={(e) => setEventTitle(e.target.value)}
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="eventDate">Date:</label>
            <input
              type="date"
              id="eventDate"
              value={eventDate}
              onChange={(e) => setEventDate(e.target.value)}
              required
            />
          </div>
          <button type="submit">Schedule Event</button>
        </form>
      </div>
      <div className="upcoming-events">
        <h3>Upcoming Events</h3>
        {renderEvents()}
      </div>
    </div>
    
    </>
    
  );
};

export default CourtCalendar;
