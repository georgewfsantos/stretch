import React from "react";

import { Container } from "./styles";

function Profile() {
  return (
    <Container>
      <img src="https:/github.com/georgewfsantos.png" alt="Me" />
      <div className="profile">
        <strong>My Full Name</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level 2
        </p>
      </div>
    </Container>
  );
}

export default Profile;
