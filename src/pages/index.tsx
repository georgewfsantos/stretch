import ExperienceBar from "../components/ExperienceBar";
import Head from "next/head";

import Dashboard from "../components/Dashboard";
import { Container } from "./homeStyles";
import { CountDownProvider } from "../contexts/CountDownContext";

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Início | stretch</title>
      </Head>
      <CountDownProvider>
        <ExperienceBar />
        <Dashboard />
      </CountDownProvider>
    </Container>
  );
}
