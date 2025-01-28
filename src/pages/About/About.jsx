import React from "react";
import "./About.css";
import aboutImage from "../../assets/shopping.jpg"; 
import model1 from "../../assets/model1.png"
import model2 from "../../assets/model2.png"
import model3 from "../../assets/model3.png"
const About = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <span>Home</span> / <span>About</span>
      </div>
      <div className="about-content">
        <div className="about-text">
          <h1>Our Story</h1>
          <p>
            Launched in 2015, Exclusive is South Asia's premier online shopping
            marketplace with an active presence in Bangladesh. Supported by a
            wide range of tailored marketing, data, and service solutions,
            Exclusive has 10,500 sellers and 300 brands and serves 3 million
            customers across the region.
          </p>
          <p>
            Exclusive has more than 1 million products to offer, growing very
            fast. Exclusive offers a diverse assortment in categories ranging
            from consumer.
          </p>
        </div>
        <div className="about-image">
          <img src={aboutImage} alt="About" />
        </div>
      </div>
      <div className="about-stats">
        <div className="stat-item">
          <h2>10.5k</h2>
          <p>Sellers active on our site</p>
        </div>
        <div className="stat-item highlight">
          <h2>33k</h2>
          <p>Monthly Product Sale</p>
        </div>
        <div className="stat-item">
          <h2>45.5k</h2>
          <p>Customers active on our site</p>
        </div>
        <div className="stat-item">
          <h2>25k</h2>
          <p>Annual gross sale on our site</p>
        </div>
      </div>
      <div className="team-container">
      <h1>Meet Our Team</h1>
      <div className="team-carousel">
        <div className="team-card">
          <img src={model1} alt="Tom Cruise" />
          <h2>Tom Cruise</h2>
          <p>Founder & Chairman</p>
          <div className="social-icons">
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-linkedin"></i>
          </div>
        </div>
        <div className="team-card">
          <img src={model2} alt="Emma Watson" />
          <h2>Emma Watson</h2>
          <p>Managing Director</p>
          <div className="social-icons">
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-linkedin"></i>
          </div>
        </div>
        <div className="team-card">
          <img src={model3} alt="Will Smith" />
          <h2>Will Smith</h2>
          <p>Product Designer</p>
          <div className="social-icons">
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-linkedin"></i>
          </div>
        </div>
      </div>
      <div className="carousel-indicators">
        <span className="dot active"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </div>
    </div>
  );
};

export default About;
