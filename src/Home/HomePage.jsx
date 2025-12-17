import React, { useState } from 'react';
import './Home.css';
import CoreTeam from '../Team.jsx/CoreTeam';
import About from '../About/About';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const [email, setEmail] = useState('');
    const navigate = useNavigate();




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
            <button className='btn-3' onClick={() => navigate("/join-acm-w")}>JOIN ACM-W</button>
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