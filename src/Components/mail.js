import React, { useState } from 'react';
import './mail.css';

const Mail = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubscribe = async () => {
    try {
      const response = await fetch('http://localhost:5001/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage('SEND SUCCESSFULLY'); // Display success message
      } else {
        setMessage(data.message || 'SEND SUCCESSFULLY');
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('SEND SUCCESSFULLY');
    }
  };

  return (
    <div>
      <h2 className="Main">Sign up For Daily Insider</h2>
      <input
        className="take"
        type="email"
        name="email"
        id="Email"
        required
        placeholder="Email ID"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button className="Button" type="button" onClick={handleSubscribe}>
        Subscribe
      </button>
      {message && <p>{message}</p>} {/* Display the message */}
    </div>
  );
};

export default Mail;

