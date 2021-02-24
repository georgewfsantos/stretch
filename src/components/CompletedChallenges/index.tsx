import React, { useContext } from "react";
import { ChallengeContext } from "../../contexts/ChallengeContext";

import { Container } from "./styles";

function CompletedChallenges() {
  const { completedChallenges } = useContext(ChallengeContext);
  return (
    <Container>
      <span className="left">Desafios completos</span>
      <span className="right">{completedChallenges}</span>
    </Container>
  );
}

export default CompletedChallenges;
