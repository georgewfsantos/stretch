import { useContext } from "react";
import { CountDownContext } from "../../contexts/CountDownContext";
import { Container } from "./styles";

function CountDown() {
  const {
    minutes,
    hasFinished,
    isActive,
    resetCountDown,
    seconds,
    startCountDown,
  } = useContext(CountDownContext);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
  const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("");

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

      {hasFinished ? (
        <button disabled className="finished-cycle">
          Ciclo encerrado
        </button>
      ) : (
        <>
          {isActive ? (
            <button
              type="button"
              onClick={resetCountDown}
              className="reset-button"
            >
              Abandonar ciclo
            </button>
          ) : (
            <button type="button" onClick={startCountDown}>
              Iniciar um ciclo
            </button>
          )}
        </>
      )}
    </Container>
  );
}

export default CountDown;
