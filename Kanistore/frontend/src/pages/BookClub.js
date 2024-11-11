import React from 'react';
import { FaCalendarAlt, FaCamera, FaFileAlt, FaUsers } from 'react-icons/fa';

const BookClub = () => {
  const sections = [
    { name: 'Upcoming Events', icon: <FaCalendarAlt />, link: '/upcoming-events' },
    { name: 'Photos', icon: <FaCamera />, link: '/photos' },
    { name: 'Event Report', icon: <FaFileAlt />, link: '/event-report' },
    { name: 'Event Coordinators', icon: <FaUsers />, link: '/event-coordinators' },
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Book Club</h2>
      <div style={styles.sections}>
        {sections.map((section, index) => (
          <div key={index} style={styles.section}>
            <div style={styles.icon}>{section.icon}</div>
            <span>{section.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    textAlign: 'center',
    padding: '20px',
  },
  title: {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '30px',
  },
  sections: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '20px',
  },
  section: {
    width: '120px',
    height: '120px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    cursor: 'pointer',
    textAlign: 'center',
  },
  icon: {
    fontSize: '30px',
    marginBottom: '10px',
  },
};

export default BookClub;
