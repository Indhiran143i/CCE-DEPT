import React, { useState } from 'react';

const Attendance = () => {
  // State to store the register number input
  const [registerNo, setRegisterNo] = useState('');

  // Function to handle input change
  const handleRegisterNoChange = (e) => {
    setRegisterNo(e.target.value);
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle submission logic here, e.g., sending the register number to an API
    console.log('Register No:', registerNo);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Enter Your Register Number</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.inputContainer}>
          <label htmlFor="registerNo" style={styles.label}>Register Number:</label>
          <input
            type="text"
            id="registerNo"
            value={registerNo}
            onChange={handleRegisterNoChange}
            style={styles.input}
            placeholder="Enter your register number"
          />
        </div>
        <button type="submit" style={styles.submitButton}>Submit</button>
      </form>
    </div>
  );
};

// Styles for the component
const styles = {
  container: {
    padding: '20px',
    textAlign: 'center',
  },
  title: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  inputContainer: {
    marginBottom: '20px',
  },
  label: {
    fontSize: '1rem',
    marginRight: '10px',
  },
  input: {
    padding: '10px',
    fontSize: '1rem',
    width: '200px',
    borderRadius: '4px',
    border: '1px solid #ddd',
  },
  submitButton: {
    padding: '10px 20px',
    fontSize: '1rem',
    cursor: 'pointer',
    borderRadius: '4px',
    backgroundColor: '#808080', // Grey color
    color: 'white',
    border: 'none',
  },
};

export default Attendance;
