import { useContext } from "react";
import { ChallengeContext } from "../../contexts/ChallengeContext";
import { CountDownContext } from "../../contexts/CountDownContext";
import { Container } from "./styles";

function ChallengeBox() {
  const { activeChallenge, resetChallenge, completeChallenge } = useContext(
    ChallengeContext
  );
  const { resetCountDown } = useContext(CountDownContext);

  const handleCompletedChallenge = () => {
    completeChallenge();
    resetCountDown();
  };

  const handleChallengeFailure = () => {
    resetChallenge();
    resetCountDown();
  };

  return (
    <Container>
      {activeChallenge ? (
        <div className="active-challenge">
          <header>Ganhe {activeChallenge.amount} xp</header>

          <main>
            <img src={`icons/${activeChallenge.type}.svg`} alt="Challenge" />
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <button
              type="button"
              className="fail-button"
              onClick={handleChallengeFailure}
            >
              Falhei
            </button>
            <button
              type="button"
              className="success-button"
              onClick={handleCompletedChallenge}
            >
              Completei
            </button>
          </footer>
        </div>
      ) : (
        <div className="instruction">
          <strong>Finalize um ciclo para receber um desafio</strong>
          <p>
            <img src="icons/level-up.svg" alt="Level Up" />
            Avance de nível completando desafios.
          </p>
        </div>
      )}
    </Container>
  );
}

export default ChallengeBox;
