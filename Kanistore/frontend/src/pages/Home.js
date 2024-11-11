import React from 'react';
import { FaUserCheck, FaCalendarAlt, FaBook, FaComments, FaCode, FaPalette, FaTasks, FaClipboard } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Import Link for navigation

const Home = () => {

  const sections = [
    { name: 'Attendance', icon: <FaUserCheck />, link: '/attendance' },
    { name: 'All Events', icon: <FaCalendarAlt />, link: '/events' },
    { name: 'Book Club', icon: <FaBook />, link: '/book-club' },
    { name: 'Communication Club', icon: <FaComments />, link: '/communication-club' },
    { name: 'Coding Club', icon: <FaCode />, link: '/coding-club' },
    { name: 'Fine Arts Club', icon: <FaPalette />, link: '/fine-arts-club' },
    { name: 'Imposition', icon: <FaTasks />, link: '/imposition' },
    { name: 'Assignment', icon: <FaClipboard />, link: '/assignment' }, // New assignment section
  ];

  return (
    <div style={styles.container}>
      {sections.map((section, index) => (
        <Link key={index} to={section.link} style={styles.box}> {/* Wrap each box with Link */}
          <div style={styles.icon}>{section.icon}</div>
          <span>{section.name}</span>
        </Link>
      ))}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '20px',
    padding: '20px',
  },
  box: {
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
    textDecoration: 'none',  // Prevents the link text from being underlined
    color: 'inherit',  // Ensures the text color is inherited from parent styles
  },
  icon: {
    fontSize: '24px',
    marginBottom: '10px',
  },
};

export default Home;
