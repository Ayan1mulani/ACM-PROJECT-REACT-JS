import React, { useRef, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Inauguration.css';

const events = [
  {
    title: 'ACM Inauguration',
    date: '31 january, 2025',
    description: 'Grand opening of ACM-W chapter with keynote speakers.',
    images: ['/I7.jpeg', '/I1.jpeg', '/I2.jpeg', '/I3.jpeg', '/I6.jpeg', '/I8.jpeg'],
  },
  {
    title: 'UI-Design Contest',
    date: '30 january, 2025',
    description: 'Showcase your creativity in UI/UX design with exciting prizes.',
    images: ['/U1.jpeg', '/U2.jpeg', '/U4.jpeg', '/U5.jpeg', '/U6.jpeg', '/U7.jpeg'],

  },
  {
    title: 'Club Catalyst',
    date: '28 february, 2025',
    description: 'A platform for networking and sharing innovative ideas.',
    images: ['/C1.jpeg', '/C2.jpeg', '/C3.jpeg','/A.jpeg']

  },
];

const Inauguration = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const eventRefs = useRef([]);
  const location = useLocation();
  const navigate = useNavigate();

  // Ensure smooth scrolling to the event if passed via location
  useEffect(() => {
    if (location.state?.scrollTo) {
      const eventIndex = events.findIndex(
        (e) => e.title.toUpperCase() === location.state.scrollTo
      );

      // Check if the reference is available before calling scrollIntoView
      if (eventIndex !== -1) {
        const targetElement = eventRefs.current[eventIndex];

        if (targetElement) {
          setTimeout(() => {
            targetElement.scrollIntoView({
              behavior: 'smooth',
              block: 'center',
            });
          }, 300);
        }
      }
    }
  }, [location.state]);

  // Ensure back navigation always goes to Home
  const handleGoBack = () => {
    navigate('/', { replace: true });
  };

  // Handle swipe back or browser back gesture
  useEffect(() => {
    const handlePopState = () => {
      navigate('/', { replace: true });
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [navigate]);

  return (
    <div>
      <button onClick={handleGoBack} className="back-button">
        ⬅️ Go Back
      </button>

      <div className="inauguration-container">
        <h1 className="heading">Past Events</h1>

        {events.map((event, index) => (
          <div
            key={index}
            ref={(el) => (eventRefs.current[index] = el)}
            className="event-card"
          >
            <Slider {...sliderSettings}>
              {event.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={event.title}
                  className="event-image"
                  loading="lazy"
                />
              ))}
            </Slider>
            <div className="event-details">
              <h2>{event.title}</h2>
              <p className="event-date">{event.date}</p>
              <p>{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Inauguration;