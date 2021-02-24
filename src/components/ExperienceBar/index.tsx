import React, { useContext } from "react";
import { ChallengeContext } from "../../contexts/ChallengeContext";

import { Container } from "./styles";

function ExperienceBar() {
  const { currentExperience, experienceToNextLevel } = useContext(
    ChallengeContext
  );

  const percentageToNextLevel =
    Math.round(currentExperience * 100) / experienceToNextLevel;

  return (
    <Container>
      <div className="bar-content">
        <span>0 xp</span>
        <div className="gray-line">
          <div
            className="progress"
            style={{ width: `${percentageToNextLevel}%` }}
          />
          <span
            className="experience-level"
            style={{ left: `${percentageToNextLevel}%` }}
          >
            {currentExperience} xp
          </span>
        </div>
        <span>{experienceToNextLevel} xp</span>
      </div>
    </Container>
  );
}

export default ExperienceBar;
