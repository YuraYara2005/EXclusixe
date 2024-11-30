import React, { useEffect, useState } from "react";
import Speaker from '../../assets/images/JBL.png'
import  './enhance.css'; // For custom CSS styles

const Enhance = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 5,
    hours: 23,
    minutes: 0,
    seconds: 0,
  });

  // Countdown logic
  useEffect(() => {
    const countdown = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;
        if (seconds > 0) seconds--;
        else {
          seconds = 59;
          if (minutes > 0) minutes--;
          else {
            minutes = 59;
            if (hours > 0) hours--;
            else {
              hours = 23;
              if (days > 0) days--;
              else clearInterval(countdown);
            }
          }
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  return (
    <div className="container bg-black text-white my-5  py-5">
      <div className="row align-items-center">
        {/* Left Section */}
        <div className="col-md-6 text-center text-md-start">
          <small className="text-uppercase enhance-text ms-3">Categories</small>
          <h1 className="display-4 fw-bold">Enhance Your Music Experience</h1>
          <div className="countdown d-flex justify-content-center justify-content-md-start my-4">
            {["days", "hours", "minutes", "seconds"].map((unit, index) => (
              <div key={index} className="circle mx-2">
                <span className="number">
                  {String(timeLeft[unit]).padStart(2, "0")}
                </span>
                <small className="unit text-uppercase">{unit}</small>
              </div>
            ))}
          </div>
          <button className="btn enhance-btn btn-lg">Buy Now</button>
        </div>

        {/* Right Section */}
        <div className="col-md-6 text-center">
          <img
            src={Speaker} // Replace with your image path
            alt="Speaker"
            className="img-fluid shadow-custom"
          />
        </div>
      </div>
    </div>
  );
};

export default Enhance;
