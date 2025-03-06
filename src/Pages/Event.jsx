import React from 'react'
import { useEffect } from 'react';
import {  useNavigate } from 'react-router-dom';


const Event = () => {
  const navigate = useNavigate();

 useEffect(() => {
    const handlePopState = () => {
      navigate('/', { replace: true });
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [navigate]);
  return (
    <div className="event-container">
      <img className='img-wd' src="/WD.jpeg" alt="WOMENS DAY CELEBRATION" />
    </div>
  )
}

export default Event;