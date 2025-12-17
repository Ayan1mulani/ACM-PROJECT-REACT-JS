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

  // Data for the different domains
  const domains = [
    {
      title: "Technical Domain",
      desc: "Workshops, hackathons, coding contests, and development-focused sessions to enhance technical expertise."
    },
    {
      title: "Design Domain",
      desc: "UI/UX, graphics, branding, and creative digital design activities for events and projects."
    },
    {
      title: "Events Domain",
      desc: "Planning, coordinating, and executing impactful events and conferences."
    },
    {
      title: "Social Media Domain",
      desc: "Managing online presence, campaigns, outreach, and building community engagement."
    },
    {
      title: "Core Committee",
      desc: "Leaders and decision-makers who oversee and guide all activities."
    },
  ];

  // Styles for the component
  const styles = `
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');

    .what-we-do-container {
      padding: 50px 20px;
      background-color: #f8f9fa;
      min-height: 100vh;
      font-family: 'Poppins', sans-serif;
      box-sizing: border-box;
    }

    .header {
      text-align: center;
      margin-bottom: 50px;
    }

    .main-title {
      font-size: 2.5rem;
      font-weight: 700;
      color: #0A66C2;
      margin-bottom: 1rem;
    }

    .subtitle {
      font-size: 1.1rem;
      color: #555;
      max-width: 600px;
      margin: 0 auto;
    }

    .domains-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }

    .domain-card {
      background-color: #ffffff;
      border-radius: 16px;
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.05);
      padding: 2rem;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      border-top: 4px solid #2196f3;
    }

    .domain-card:hover {
      transform: translateY(-10px);
      box-shadow: 0 12px 32px rgba(0, 0, 0, 0.1);
    }

    .card-title {
      font-size: 1.5rem;
      font-weight: 600;
      color: #0A66C2;
      margin-bottom: 1rem;
    }

    .card-desc {
      color: #666;
      line-height: 1.6;
    }

    .footer {
      margin-top: 60px;
      text-align: center;
      font-size: 1rem;
    }

    .footer a {
      color: #0A66C2;
      text-decoration: none;
      font-weight: 600;
    }

    .footer a:hover {
      text-decoration: underline;
    }

    @media (max-width: 768px) {
      .main-title {
        font-size: 2rem;
      }
      .subtitle {
        font-size: 1rem;
      }
      .what-we-do-container {
        padding: 40px 15px;
      }
    }
  `;

  return (
    <>
      <style>{styles}</style>
      <div className="what-we-do-container">
        <div className="header">
          <h2 className="main-title">What We Do</h2>
          <p className="subtitle">
            At ACM-W MIT-ADT, we empower students through diverse domains of innovation, collaboration, and leadership.
          </p>
        </div>

        <div className="domains-grid">
          {domains.map((domain) => (
            <div className="domain-card" key={domain.title}>
              <h3 className="card-title">{domain.title}</h3>
              <p className="card-desc">{domain.desc}</p>
            </div>
          ))}
        </div>

        <div className="footer">
          <p>
            Learn more about our initiatives at{" "}
            <a href="https://women.acm.org/" target="_blank" rel="noopener noreferrer">
              https://women.acm.org/
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Event;

