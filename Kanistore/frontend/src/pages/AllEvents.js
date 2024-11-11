import React from 'react';

const AllEvents = () => {
  // Simulating events data for different clubs
  const clubsData = [
    {
      clubName: 'Book Club',
      events: [
        { name: 'Book Reading Session', date: '2024-11-15' },
        { name: 'Author Meet and Greet', date: '2024-11-20' },
      ],
    },
    {
      clubName: 'Communication Club',
      events: [
        { name: 'Public Speaking Contest', date: '2024-11-18' },
      ],
    },
    {
      clubName: 'Coding Club',
      events: [
        { name: 'Hackathon 2024', date: '2024-12-05' },
        { name: 'AI Workshop', date: '2024-12-10' },
        { name: 'Code Challenge', date: '2024-12-12' },
      ],
    },
    {
      clubName: 'Fine Arts Club',
      events: [
        { name: 'Art Exhibition', date: '2024-11-22' },
        { name: 'Painting Workshop', date: '2024-11-25' },
      ],
    },
    // Add more clubs as needed
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>All Events Organized by Clubs</h2>
      {clubsData.map((club, index) => (
        <div key={index} style={styles.clubContainer}>
          <h3>{club.clubName}</h3>
          <div style={styles.eventList}>
            <div style={styles.eventCount}>Total Events: {club.events.length}</div>
            <ul>
              {club.events.map((event, eventIndex) => (
                <li key={eventIndex} style={styles.eventItem}>
                  {event.name} (Date: {event.date})
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
  },
  title: {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '30px',
    textAlign: 'center',
  },
  clubContainer: {
    marginBottom: '40px',
    padding: '15px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  eventList: {
    paddingLeft: '20px',
  },
  eventCount: {
    fontSize: '1rem',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  eventItem: {
    fontSize: '1rem',
    marginBottom: '5px',
  },
};

export default AllEvents;
