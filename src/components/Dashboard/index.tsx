import Profile from "../Profile";
import CompletedChallenges from "../CompletedChallenges";
import CountDown from "../CountDown";
import ChallengeBox from "../ChallengeBox";

import { Container } from "./styles";

function Dashboard() {
  return (
    <Container>
      <div className="left">
        <Profile />
        <CompletedChallenges />
        <CountDown />
      </div>

      <ChallengeBox />
    </Container>
  );
}

export default Dashboard;
