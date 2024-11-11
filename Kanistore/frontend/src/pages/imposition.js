import React, { useEffect, useState } from 'react';

const Imposition = () => {
  const [impositionData, setImpositionData] = useState(null);

  // Simulating fetching data from a database or API
  useEffect(() => {
    const fetchImpositionData = async () => {
      // Here, we simulate fetching data. Replace this with an actual API call.
      const dataFromDB = {
        name: 'John Doe',
        registerNo: '12345',
        subject: 'Mathematics', // New subject field
        impositionStatus: 'Pending', // Or 'Completed' based on database value
        submissionDate: '2024-11-10',
      };

      // Simulate delay like an API call
      setTimeout(() => {
        setImpositionData(dataFromDB);
      }, 1000);
    };

    fetchImpositionData();
  }, []);

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Imposition Details</h2>
      <div style={styles.details}>
        <div style={styles.detail}>
          <strong>Name:</strong> {impositionData ? impositionData.name : 'N/A'}
        </div>
        <div style={styles.detail}>
          <strong>Register No:</strong> {impositionData ? impositionData.registerNo : 'N/A'}
        </div>
        <div style={styles.detail}>
          <strong>Subject:</strong> {impositionData ? impositionData.subject : 'N/A'}
        </div>
        <div style={styles.detail}>
          <strong>Imposition Status:</strong> {impositionData ? impositionData.impositionStatus : 'N/A'}
        </div>
        <div style={styles.detail}>
          <strong>Submission Date:</strong> {impositionData ? impositionData.submissionDate : 'N/A'}
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
  },
  title: {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    width: '300px',
    textAlign: 'left',
  },
  detail: {
    fontSize: '1rem',
    fontWeight: 'normal',
    padding: '8px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    backgroundColor: '#f9f9f9',
  },
};

export default Imposition;
