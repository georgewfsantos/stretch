import ExperienceBar from "../components/ExperienceBar";
import Head from "next/head";

import Dashboard from "../components/Dashboard";
import { Container } from "./homeStyles";
import { CountDownProvider } from "../contexts/CountDownContext";
import { GetServerSideProps } from "next";
import { ChallengeProvider } from "../contexts/ChallengeContext";

interface HomeProps {
  level: number;
  currentExperience: number;
  completedChallenges: number;
}

export default function Home(props: HomeProps) {
  return (
    <ChallengeProvider
      level={props.level}
      currentExperience={props.currentExperience}
      completedChallenges={props.completedChallenges}
    >
      <Container>
        <Head>
          <title>Início | stretch</title>
        </Head>

        <CountDownProvider>
          <ExperienceBar />
          <Dashboard />
        </CountDownProvider>
      </Container>
    </ChallengeProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { level, currentExperience, completedChallenges } = context.req.cookies;
  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      completedChallenges: Number(completedChallenges),
    },
  };
};
