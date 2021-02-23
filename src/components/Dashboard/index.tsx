import Profile from "../Profile";
import CompletedChallenges from "../CompletedChallenges";
import CountDown from "../CountDown";

import { Container } from "./styles";

function Dashboard() {
  return (
    <Container>
      <div className="left">
        <Profile />
        <CompletedChallenges />
        <CountDown />
      </div>

      <div className="right"></div>
    </Container>
  );
}

export default Dashboard;
