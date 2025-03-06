import React, { useState, useEffect, useRef } from 'react';
import './Core.css';

const CoreTeam = () => {
  const teamData = [
    { image: '/4.jpeg', name: 'JANHAVI KAMDI', position: 'CHAIR PERSON' },
    { image: '/7.jpeg', name: 'ADITI CHITNIS', position: 'VICE PRESIDENT' },
    { image: '/1.jpeg', name: 'SHAMIKA SALVI', position: 'SOCIAL MEDIA HEAD' },
    { image: '/6.jpeg', name: 'SANIYA', position: 'DESIGN TEAM LEAD / WEB MASTER' },
    { image: '/2.jpeg', name: 'VAISHNAVI', position: 'DOCUMENTATION HEAD' },
    { image: '/5.jpeg', name: 'PRACHI', position: 'MEMBERSHIP CHAIR' },
    { image: '/3.jpeg', name: 'MAHIMA', position: 'TREASURER HEAD' },
    { image: '/55.jpeg', name: 'KEEM POHARE', position: 'SECRATARY' },

  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const sliderContainerRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  useEffect(() => {
    const updateWidth = () => {
      if (sliderContainerRef.current) {
        setContainerWidth(sliderContainerRef.current.offsetWidth);
      }
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);

    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % teamData.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [teamData.length]);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const deltaX = touchEndX.current - touchStartX.current;
    if (deltaX > 50) {
      // Swipe right
      setCurrentIndex((prevIndex) => (prevIndex - 1 + teamData.length) % teamData.length);
    } else if (deltaX < -50) {
      // Swipe left
      setCurrentIndex((prevIndex) => (prevIndex + 1) % teamData.length);
    }
  };

  const slideWidth = containerWidth / 3; // Each slide is 1/3 of the container
  const translateX = -(currentIndex * slideWidth - containerWidth / 2 + slideWidth / 2);

  return (
    <div className="coreTeam">
      <div className="Text">
        <h3>CORE-TEAM</h3>
      </div>

      <div
        className="slider-container"
        ref={sliderContainerRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="slider-content"
          style={{
            transform: `translateX(${translateX}px)`,
            transition: 'transform 0.7s ease-in-out',
          }}
        >
          {teamData.map((member, index) => (
            <div
              className={`slide ${index === currentIndex ? 'active' : ''}`}
              key={index}
              style={{ width: `${slideWidth}px` }}
            >
              <img className="img-33" src={member.image} alt={member.name} loading="lazy" />
              <div className="member-info">
                <p className="name">{member.name}</p>
                <p className="position">{member.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoreTeam;
