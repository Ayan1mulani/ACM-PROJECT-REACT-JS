import React, { useState } from 'react';

// --- IMPORTANT ---
// 1. All styles are now included in this file.
// 2. Replace the placeholder URL below with the Web App URL you get after deploying your Google Apps Script.
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwC5RTF1vvDu8EaqDMZqxBkLdhUj9CraifgwcG0zMW9hM8tiSKmTyzohc6wval8Wohm/exec";

// Component styles are defined here and injected via a <style> tag.
const styles = `
  .container {
    background-color: #f7fafc;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    min-height: 100vh;
    box-sizing: border-box;
  }

  .form-card {
    width: 100%;
    max-width: 28rem;
    padding: 2rem;
    background-color: #ffffff;
    border-radius: 1rem;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }

  .form-card > *:not([hidden]) ~ *:not([hidden]) {
      margin-top: 1.5rem;
  }

  .form-header {
    text-align: center;
  }

  .form-title {
    font-size: 1.875rem;
    font-weight: 800;
    color: #1a202c;
  }

  .form-subtitle {
    margin-top: 0.5rem;
    font-size: 0.875rem;
    color: #4a5568;
  }

  .join-form > *:not([hidden]) ~ *:not([hidden]) {
      margin-top: 1.25rem;
  }

  .input-wrapper {
    position: relative;
  }

  .input-field {
    width: 100%;
    padding: 0.75rem 1rem;
    color: #2d3748;
    background-color: #f9fafb;
    border: 1px solid #d1d5db;
    border-radius: 0.5rem;
    transition: all 0.2s ease-in-out;
    box-sizing: border-box;
  }
  
  .input-field::placeholder {
      color: #a0aec0;
  }

  .input-field:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.5);
  }

  .submit-button {
    width: 100%;
    padding: 0.75rem 1rem;
    font-weight: 600;
    color: #ffffff;
    background-color: #2563eb;
    border: none;
    border-radius: 0.5rem;
    cursor: pointer;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    transition: all 0.3s ease;
  }

  .submit-button:hover {
    background-color: #1d4ed8;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }

  .submit-button:focus {
    outline: none;
    box-shadow: 0 0 0 2px #ffffff, 0 0 0 4px #3b82f6;
  }

  .submit-button:disabled {
    background-color: #9ca3af;
    cursor: not-allowed;
    box-shadow: none;
  }

  .status-message {
    padding: 1rem;
    text-align: center;
    border-radius: 0.5rem;
    font-size: 0.875rem;
    font-weight: 500;
  }

  .status-error {
    background-color: #fee2e2;
    color: #991b1b;
  }

  .status-success {
    background-color: #dcfce7;
    color: #166534;
  }
`;

const Joinacm = () => {
  // State to manage the form's status (submitting, success/error message)
  const [status, setStatus] = useState({
    submitting: false,
    message: '',
    isError: false,
  });

  // Handles the form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default browser redirect
    setStatus({ submitting: true, message: '', isError: false });

    const formElement = e.target;
    const data = new FormData(formElement);

    // Send form data to the Google Apps Script
    fetch(SCRIPT_URL, {
      method: 'POST',
      body: data,
    })
    .then(res => res.json())
    .then(data => {
      if (data.result === 'success') {
        setStatus({ submitting: false, message: data.message, isError: false });
        formElement.reset(); // Clear the form fields on success
      } else {
        // Handle cases where the Apps Script returns an error
        throw new Error(data.message || 'An unknown error occurred.');
      }
    })
    .catch(error => {
      // Handle network errors or errors thrown from the script
      setStatus({ submitting: false, message: `Submission Failed: ${error.message}`, isError: true });
    });
  };

  return (
    <>
      <style>{styles}</style>
      <div className="container">
        <div className="form-card">
          <div className="form-header">
            <h2 className="form-title">Join ACM Student Chapter</h2>
            <p className="form-subtitle">Fill out the form below to become a member.</p>
          </div>

          <form className="join-form" onSubmit={handleSubmit}>
            {/* Form Input Fields */}
            <div className="input-wrapper">
              <input
                type="text"
                name="name"
                required
                className="input-field"
                placeholder="Full Name"
              />
            </div>
            <div className="input-wrapper">
              <input
                type="email"
                name="email"
                required
                className="input-field"
                placeholder="Email Address"
              />
            </div>
            <div className="input-wrapper">
              <input
                type="tel"
                name="contact"
                required
                className="input-field"
                placeholder="Contact Number"
              />
            </div>
            <div className="input-wrapper">
              <input
                type="text"
                name="department"
                required
                className="input-field"
                placeholder="Department"
              />
            </div>
            <div className="input-wrapper">
              <input
                type="text"
                name="year"
                required
                className="input-field"
                placeholder="Year (e.g., SE, TE, BE)"
              />
            </div>
            
            {/* Submit Button */}
            <div>
              <button
                type="submit"
                disabled={status.submitting}
                className="submit-button"
              >
                {status.submitting ? 'Submitting...' : 'Register Now'}
              </button>
            </div>
          </form>

          {/* Status Message Display */}
          {status.message && (
            <div className={`status-message ${
                status.isError ? 'status-error' : 'status-success'
              }`}
            >
              {status.message}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Joinacm;

