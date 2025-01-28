import React, { useEffect, useState } from 'react';
import speaker from "../../assets/speaker.png";
import "./Ad.css";

const Ad = () => {
  // Set the initial time (2 days in milliseconds)
  const ti = 2 * 24 * 60 * 60 * 1000;
  const [time, setTime] = useState(ti);

  useEffect(() => {
    // Check if there's a saved time in localStorage
    const savedTime = localStorage.getItem('countdownTime');
    if (savedTime) {
      setTime(parseInt(savedTime));
    }

    const interval = setInterval(() => {
      setTime((prevTime) => {
        const newTime = prevTime - 1000;
        localStorage.setItem('countdownTime', newTime); // Save the updated time
        return newTime;
      });
    }, 1000);

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  const getFormattedTime = (tim) => {
    let sec = Math.floor(tim / 1000);
    let min = Math.floor(sec / 60);
    let hou = Math.floor(min / 60);
    let day = Math.floor(hou / 24);
    let seconds = sec % 60;
    let minutes = min % 60;
    let hours = hou % 24;

    return { day, hours, minutes, seconds };
  };

  const { day, hours, minutes, seconds } = getFormattedTime(time);

  return (
    <div className='a-container'>
      <div className='a-content'>
        <span>
          <h4 style={{ color: "#00FF66" }}>Categories</h4>
          <p style={{ color: "white", fontSize: 40, fontFamily: "outfit", fontWeight: 400 }}>
            Enhance Your <br /> Music Experience
          </p>
          <div className="time-container">
            <div className="time-part">
              <span className="time-circle">{day}</span>
              <p>Days</p>
            </div>
            <div className="time-part">
              <span className="time-circle">{hours}</span>
              <p>Hours</p>
            </div>
            <div className="time-part">
              <span className="time-circle">{minutes}</span>
              <p>Minutes</p>
            </div>
            <div className="time-part">
              <span className="time-circle">{seconds}</span>
              <p>Seconds</p>
            </div>
          </div>
          <button className='ad-b'
            style={{
              background: "#00FF66",
              color: "white",
              padding: 20,
              border: "none",
              borderRadius: 5,
              fontWeight: 600,
              fontFamily: "outfit"
            }}
          >
            Buy Now!
          </button>
        </span>
        <span>
          <img src={speaker} width={700} alt="Speaker" />
        </span>
      </div>
    </div>
  );
};

export default Ad;
