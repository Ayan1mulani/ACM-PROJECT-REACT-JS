import React, { useRef, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Inauguration.css';

const events = [
  {
    title: 'ACM Inauguration',
    date: '31 January, 2025',
    description: 'Grand opening of ACM-W chapter with keynote speakers and inspiring talks about women in technology.',
    images: ['/I7.jpeg', '/I1.jpeg', '/I2.jpeg', '/I3.jpeg', '/I6.jpeg', '/I8.jpeg'],
    attendees: '200+',
    location: 'Main Auditorium'
  },
  {
    title: 'UI-Design Contest',
    date: '30 January, 2025',
    description: 'Showcase your creativity in UI/UX design with exciting prizes and recognition from industry experts.',
    images: ['/U1.jpeg', '/U2.jpeg', '/U4.jpeg', '/U5.jpeg', '/U6.jpeg', '/U7.jpeg'],
    attendees: '150+',
    location: 'Design Lab'
  },
  {
    title: 'Club Catalyst',
    date: '28 February, 2025',
    description: 'A dynamic platform for networking, sharing innovative ideas, and building meaningful connections.',
    images: ['/C1.jpeg', '/C2.jpeg', '/C3.jpeg','/A.jpeg'],
    attendees: '100+',
    location: 'Iod Lawn'
  },
];

const Inauguration = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    fade: true,
    cssEase: 'cubic-bezier(0.4, 0, 0.2, 1)'
  };

  const eventRefs = useRef([]);
  const location = useLocation();
  const navigate = useNavigate();

  // Handle component load
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Enhanced smooth scrolling
  useEffect(() => {
    if (isLoaded && location.state?.scrollTo) {
      const eventIndex = events.findIndex(
        (e) => e.title.toUpperCase() === location.state.scrollTo
      );

      if (eventIndex !== -1) {
        const targetElement = eventRefs.current[eventIndex];
        if (targetElement) {
          setTimeout(() => {
            targetElement.scrollIntoView({
              behavior: 'smooth',
              block: 'center',
              inline: 'nearest'
            });
          }, 500);
        }
      }
    }
  }, [location.state, isLoaded]);

  const handleGoBack = () => {
    navigate('/', { replace: true });
  };

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="modern-events-page">
      {/* Hero Section */}
      <div>

      </div>

      {/* Events Grid */}
      <div className="events-container">
        <div className="events-grid">
          {events.map((event, index) => (
            <div
              key={index}
              ref={(el) => (eventRefs.current[index] = el)}
              className="modern-event-card"
              id={`event-${index}`}
            >
              <div className="event-image-container">
                <Slider {...sliderSettings}>
                  {event.images.map((img, i) => (
                    <div key={i} className="slide-container">
                      <img
                        src={img}
                        alt={`${event.title} - Image ${i + 1}`}
                        className="modern-event-image"
                        loading="lazy"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          console.warn(`Failed to load image: ${img}`);
                        }}
                      />
                    </div>
                  ))}
                </Slider>
                <div className="event-overlay">
                  <span className="event-category">Past Event</span>
                </div>
              </div>
              
              <div className="modern-event-content">
                <div className="event-header">
                  <h2 className="modern-event-title">{event.title}</h2>
                  <div className="event-meta">
                    <span className="event-date">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                        <line x1="16" y1="2" x2="16" y2="6"/>
                        <line x1="8" y1="2" x2="8" y2="6"/>
                        <line x1="3" y1="10" x2="21" y2="10"/>
                      </svg>
                      {event.date}
                    </span>
                  </div>
                </div>
                
                <p className="modern-event-description">{event.description}</p>
                
                <div className="event-stats">
                  <div className="stat">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                      <circle cx="9" cy="7" r="4"/>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                    </svg>
                    <span>{event.attendees} attendees</span>
                  </div>
                  <div className="stat">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                    <span>{event.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Inauguration;