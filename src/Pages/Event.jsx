import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const Event = () => {
  const navigate = useNavigate();

 useEffect(() => {
    // This effect handles the browser's back button, navigating to the home page.
    const handlePopState = () => {
      navigate('/', { replace: true });
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [navigate]);

  // Styles to make the component responsive.
  const styles = `
    .event-container {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      background-color: #f0f2f5; /* A neutral background */
      padding: 1rem; /* Padding for smaller screens */
      box-sizing: border-box;
    }

    .img-wd {
      width: 100%; /* Makes the image fluid */
      max-width: 900px; /* Sets a max-width for larger screens (laptops) */
      height: auto; /* Maintains the image's aspect ratio */
      max-height: calc(100vh - 2rem); /* Ensures image fits viewport height without scrolling */
      object-fit: contain; /* Prevents image distortion while respecting height/width constraints */
      display: block; /* Removes any extra space below the image */
      border-radius: 0.75rem; /* Adds rounded corners for a modern look */
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); /* Adds a subtle shadow */
    }

    /* On mobile devices (screens smaller than 768px), we can adjust the padding. */
    @media (max-width: 768px) {
      .event-container {
        padding: 0.5rem;
      }
      .img-wd {
        max-height: calc(100vh - 1rem); /* Adjust for smaller padding on mobile */
      }
    }
  `;

  return (
    <>
      <style>{styles}</style>
      <div className="event-container">
        {/* You can replace "/WD.jpg" with your actual image URL.
        */}
        <img 
          className='img-wd' 
          src="/WD.jpg" 
          alt="Event poster" 
          onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/900x600?text=Image+Not+Available'; }}
        />
      </div>
    </>
  )
}

export default Event;

