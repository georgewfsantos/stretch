import { Container } from "./styles";

function ChallengeBox() {
  const isChallengeActive = true;
  return (
    <Container>
      {isChallengeActive ? (
        <div className="active-challenge">
          <header>Ganhe 400 xp</header>

          <main>
            <img src="icons/body.svg" alt="Challenge" />
            <strong>Novo desafio</strong>
            <p>Levante-se para alongar ou se exercitar</p>
          </main>

          <footer>
            <button type="button" className="fail-button">
              Falhei
            </button>
            <button type="button" className="success-button">
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
