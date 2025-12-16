import { useState, useEffect } from "react";

function PomodoroTimer() {
  const [time, setTime] = useState(25 * 60);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running) return;

    const timer = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [running]);

  function reset() {
    setRunning(false);
    setTime(25 * 60);
  }

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <div>
      <h2>
        {minutes}:{seconds < 10 ? "0" : ""}{seconds}
      </h2>

      <button onClick={() => setRunning(true)}>Start</button>
      <button onClick={() => setRunning(false)}>Pause</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default PomodoroTimer;
