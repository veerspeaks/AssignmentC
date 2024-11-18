import React from 'react';

// Footer component to display links and copyright information
function Footer() {
  return (
    <div className="footer">
      <a href="https://swapnabir.vercel.app/">My Portfolio</a>
      <a href="https://github.com/veerspeaks">My GitHub</a>
      <p>©2024 Swapnabir Dutta</p>
      <style jsx>{`
        .footer {
          text-align: center; // Center the content horizontally
          margin-top: 20px; // Add space above the footer
        }
        .footer a {
          margin: 0 20px; // Space between links
          text-decoration: none; // Remove underline from links
          color: #47663B; // Set link color
        }
        .footer p {
          margin-top: 10px; // Space above the copyright text
          color: #47663B; // Set text color
        }
      `}</style>
    </div>
  );
}

export default Footer;
