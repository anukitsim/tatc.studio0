import React from 'react';

function UnderDevelopment() {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f9f9f9',
  };

  const headingStyle = {
    fontSize: '3rem',
    fontWeight: 'bold',
    color: '#555',
    textAlign: 'center',
    textShadow: '1px 1px #fff',
    margin: '1rem',
  };

  const spinnerStyle = {
    display: 'inline-block',
    border: '4px solid rgba(0, 0, 0, 0.1)',
    borderTopColor: '#555',
    borderRadius: '50%',
    width: '3rem',
    height: '3rem',
    animation: 'spin 1s linear infinite',
    margin: '1rem',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Development in process</h1>
      <div style={spinnerStyle}></div>
    </div>
  );
}

export default UnderDevelopment;
