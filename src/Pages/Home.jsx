import React, { useState } from "react";
import emailjs from 'emailjs-com';
import './Home.css';
import backimage from './Images/back6.jpeg';
import html from './Images/HTML.png';
import css from './Images/CSS.png';
import javascript from './Images/JavaScript.png';
import python from './Images/Python.png';
import word from './Images/Word.png';
import excel from './Images/Excel.png';
import powerpoint from './Images/PowerPoint.png';
import solar from './Images/Solar.png';
import toolbag from './Images/ToolBag.png';
import keyboard from './Images/KeyboardProf.png';
import arduino from './Images/Arduino.png';
import cplus from './Images/C++.png';
import csharp from './Images/CSharp.png';
import mysql from './Images/MySQL.png';
import reactlogo from './Images/ReactLogo.png';

function Home() {
     // State for form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    details: '',
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'carvetech_request', // Replace with your EmailJS service ID
        'carvetech_request_id', // Replace with your EmailJS template ID
        formData,
        'carvetech2@gmail.com' // Replace with your EmailJS user ID
      )
      .then(
        (response) => {
          console.log('Email sent successfully!', response.status, response.text);
          alert('Your request has been sent!');
          setFormData({ name: '', email: '', address: '', details: '' });
        },
        (error) => {
          console.error('Failed to send email:', error);
          alert('Failed to send your request. Please try again.');
        }
      );
  };
    return (
        <div className="home-body">
        <div className="back-image-container">
        <img src={backimage} className="home-image" alt="home-image" />
        </div>
       
        <div className="home-text">
        <span className="body-text1">Technology</span>
        <span className="body-text2">...the Future of Engineering</span>
        </div>

        <p className="services">...Our Services</p>
      <div className="label-container2">
        <div className="label-title-container">
          <p className="label-title">FIELD SERVICES</p>
        </div>
        <div className="courses-set">
          <img src={toolbag} className="courses" alt="electrical" />
          <img src={solar} className="courses" alt="solar" />
        </div>
        <div className="label-section2">
          <p className="label-text2">Electrical Installation and Maintenance</p>
          <p className="label-text2">Solar Installation and Maintenance</p>
        </div>
      </div>

      <p className="services">...Our Training Courses</p>

      <div className="label-container">
        <div className="label-section">
          <p className="label-text">Microsoft Office Word</p>
          <p className="label-text">Microsoft Office Excel</p>
          <p className="label-text">Microsoft Office PowerPoint</p>
          <p className="label-text">Keyboard Proficiency</p>
        </div>

        <div className="courses-set">
          <img src={word} className="courses" alt="word" />
          <img src={excel} className="courses" alt="excel" />
          <img src={powerpoint} className="courses" alt="powerpoint" />
          <img src={keyboard} className="courses" alt="keyboard" />
        </div>
        <div className="label-title-container">
          <p className="label-title">OFFICE COURSES</p>
        </div>
      </div>

      <div className="label-container2">
        <div className="label-title-container">
          <p className="label-title">BASIC CODING COURSES</p>
        </div>
        <div className="courses-set">
          <img src={html} className="courses" alt="html" />
          <img src={css} className="courses" alt="css" />
          <img src={javascript} className="courses" alt="js" />
          <img src={python} className="courses" alt="python" />
          <img src={reactlogo} className="courses" alt="react" />
        </div>
        <div className="label-section2">
          <p className="label-text2">HTML</p>
          <p className="label-text2">CSS</p>
          <p className="label-text2">JavaScript</p>
          <p className="label-text2">Python</p>
          <p className="label-text2">React</p>
        </div>
      </div>

      <div className="label-container">
        <div className="label-section">
          <p className="label-text">C++</p>
          <p className="label-text">C#</p>
          <p className="label-text">Arduino</p>
          <p className="label-text">MySQL</p>
        </div>

        <div className="courses-set">
          <img src={cplus} className="courses" alt="cplus" />
          <img src={csharp} className="courses" alt="csharp" />
          <img src={arduino} className="courses" alt="arduino" />
          <img src={mysql} className="courses" alt="mysql" />
        </div>
        <div className="label-title-container">
          <p className="label-title">ADVANCED CODING COURSES</p>
        </div>
        </div>

        <div className="request-container">
        <span className="request-heading">Request a Quote</span>
        <div className="request-form">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter Name"
              className="text-area"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter Email"
              className="text-area"
              required
            />
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter Address"
              className="text-area"
              required
            />
            <textarea
              name="details"
              value={formData.details}
              onChange={handleChange}
              cols={30}
              rows={20}
              className="text-area"
              placeholder="...describe your request in details"
              required
            />
            <button type="submit" className="submit">
              Submit
            </button>
          </form>
        </div>
      </div>

    </div>   
    )
}
export default Home;
