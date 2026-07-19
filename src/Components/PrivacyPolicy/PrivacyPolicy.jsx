// src/Components/PrivacyPolicy.jsx
import React from 'react';
import HeaderContact from '../HeaderContact/HeaderContact';

const PrivacyPolicy = () => {
  return (
    <div >
        <HeaderContact text="Privacy Policy for Kawaii Group"
    backgroundImage={require('../../Assets/location.png')}/>
      <div className="px-24 py-24 flex flex-col justify-center items-center">
      <h1>Privacy Policy for Kawaii Group</h1>
      <p><strong>Effective Date: January 1, 2024</strong></p>
      <p>Kawaii Group ("us", "we", or "our") operates the website <a href="http://www.kawaiibd.com">www.kawaiibd.com</a> (the "Service"). This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.</p>

      <h2>Information We Collect</h2>
      <p>We collect several different types of information for various purposes to provide and improve our Service to you.</p>
      
      <h3>Personal Data</h3>
      <ul>
        <li>Email address</li>
        <li>First name and last name</li>
        <li>Phone number</li>
        <li>Address, State, Province, ZIP/Postal code, City</li>
      </ul>

      <h3>Usage Data</h3>
      <p>We may also collect information on how the Service is accessed and used...</p>

      <h3>Cookies and Tracking Technologies</h3>
      <p>We use cookies and similar tracking technologies...</p>

      <h2>Why We Collect Information</h2>
      <ul>
        <li>To provide and maintain our Service</li>
        <li>To notify you about changes...</li>
        {/* Add more items as necessary */}
      </ul>

      <h2>Disclosure of Data</h2>
      <p>Kawaii Group may disclose your Personal Data in good faith...</p>

      <h2>Security of Data</h2>
      <p>The security of your data is important...</p>

      <h2>Your Data Protection Rights</h2>
      <ul>
        <li>The right to access...</li>
        {/* Add more rights as necessary */}
      </ul>

      <h2>Changes to This Privacy Policy</h2>
      <p>We may update our Privacy Policy from time to time...</p>

      <h2>Contact Us</h2>
      <p>If you have any questions about this Privacy Policy...</p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;