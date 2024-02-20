import React from 'react'
import './userfooter.css'

function UserFooter() {
  return (
    <div>
       <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2>About Us</h2>
          <p>
          "Discover timeless elegance at Classic Glory Jewelry. 
          Our curated collection showcases exquisite craftsmanship and contemporary design, 
          featuring stunning rings, necklaces, earrings, and bracelets crafted from the finest materials. 
          Find the perfect piece to celebrate life's precious moments with us."</p>
        </div>
        <div className="footer-section links">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="/home">HOME</a></li>
            <li><a href="/contact">CONTACT</a></li>
            <li><a href="/login">LOGIN</a></li>
            <li><a href="/signup">SIGNUP</a></li>
          </ul>
        </div>
        <div className="footer-section contact-form">
          <h2>Contact Us</h2>
          <form action="#">
            <p>123 Jewelry Street, Cityville</p>
            <p>Email: classicglory@example.com</p>
            <p>Phone: 123-456-7890</p>

          </form>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; 2024 Jewelry Website | CLASSIC GLORY
      </div>
    </footer>

    </div>
  )
}

export default UserFooter
