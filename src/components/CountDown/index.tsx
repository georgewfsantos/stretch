import { useState, useEffect } from "react";
import { Container } from "./styles";

function CountDown() {
  const [time, setTime] = useState(25 * 60);
  const [active, setActive] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, 0).split("");
  const [secondLeft, secondRight] = String(seconds).padStart(2, 0).split("");

  const startCountDown = () => {
    setActive(true);
  };

  useEffect(() => {
    if (active && active > 0) {
      setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    }
  }, [active, time]);

  return (
    <Container>
      <div className="content">
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span className="colon">:</span>

        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>
      <button type="button" onClick={startCountDown}>
        Iniciar um ciclo
      </button>
    </Container>
  );
}

export default CountDown;
