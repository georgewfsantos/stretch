import React from "react";

import { Container } from "./styles";

function ExperienceBar() {
  return (
    <Container>
      <div className="bar-content">
        <span>0 xp</span>
        <div className="gray-line">
          <div className="progress" />
          <span className="experience-level">300 xp</span>
        </div>
        <span>600 xp</span>
      </div>
    </Container>
  );
}

export default ExperienceBar;
