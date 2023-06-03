import React, { Component, useState, useEffect } from "react";
import '../styles/App.css';

function App(){
  const [countdown, setCountdown] = useState(0);

  useEffect(() => {
    let countdownInterval = null;

    if (countdown > 0) {
      countdownInterval = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);
    }

    return () => {
      clearInterval(countdownInterval);
    };
  }, [countdown]);

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      const input = Math.floor(Number(event.target.value));
      const countDownFrom = Number.isInteger(input) ? input : 0;
      setCountdown(countDownFrom);
    }
  };
return (
    <div className="wrapper">
      <div id="whole-center">
        <h1>
          Reverse countdown for<input id="timeCount" onKeyDown={handleKeyDown} /> sec.
        </h1>
      </div>
      <div id="current-time">{countdown > 0 ? countdown : 0}</div>
    </div>
  )
}


export default App;
