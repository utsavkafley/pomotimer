const Timer = ({ timerStart, timerDuration }) => {
  const timerEnd = new Date(timerStart.getTime() + timerDuration * 60000);
  return (
    <h1>
      {String(timerDuration / 60).padStart(2, "0")}:
      {String(timerDuration % 60).padStart(2, "0")}
    </h1>
  );
};

export default Timer;
