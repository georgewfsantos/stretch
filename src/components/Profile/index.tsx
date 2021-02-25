import React, { useContext } from "react";
import { ChallengeContext } from "../../contexts/ChallengeContext";

import { Container } from "./styles";

function Profile() {
  const { level } = useContext(ChallengeContext);
  return (
    <Container>
      <img src="https:/github.com/georgewfsantos.png" alt="Me" />
      <div className="profile">
        <strong>My Full Name</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </Container>
  );
}

export default Profile;
