import React, { useState } from 'react';
import './Home.css';
import CoreTeam from '../Team.jsx/CoreTeam';
import About from '../About/About';

const HomePage = () => {
  const [email, setEmail] = useState('');

  // Handle form submission
  const handleJoinClick = () => {
    if (email.trim() === '') {
      alert('Please enter your email.');
      return;
    }

    // Open the Google Form in a new tab
    window.open('https://forms.gle/zd6XUpfzKZapBNpP8', '_blank');
  };

  return (
    <div>
      <div className='home'>
        <div className='home-2'>
          <div className='first-section'>
            <h2>_______________</h2>
            <h6 className='head1'>Advancing Computing </h6>
            <h6 className='head1'>As a Science & Profession</h6>
            <p>Join ACM-W and start your journey in the field of computing.</p>
            <img className='img-2' src="/Home.svg" alt="Home Illustration" />
          </div>

          <div className='input-div'>
            <input
              type="email"
              className='input-1'
              placeholder='Enter Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className='btn-3' onClick={handleJoinClick}>JOIN ACM-W</button>
          </div>
        </div>

        <div className='second-section'></div>
      </div>

      <CoreTeam />
      <About />
    </div>
  );
};

export default HomePage;