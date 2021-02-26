import { useContext } from "react";
import { ChallengeContext } from "../../contexts/ChallengeContext";
import { Container, Content } from "./styles";

function LevelUpModal() {
  const { level, closeModal } = useContext(ChallengeContext);
  return (
    <Container>
      <Content>
        <header>{level}</header>

        <strong>Parabéns!!</strong>
        <p>Você alcançou um novo nível.</p>

        <button type="button" onClick={closeModal}>
          <img src="icons/close.svg" alt="Fechar modal" />
        </button>
      </Content>
    </Container>
  );
}

export default LevelUpModal;
