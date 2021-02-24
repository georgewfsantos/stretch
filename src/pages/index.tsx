import ExperienceBar from "../components/ExperienceBar";
import Head from "next/head";

import Dashboard from "../components/Dashboard";
import { Container } from "./homeStyles";

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Início | stretch</title>
      </Head>
      <ExperienceBar />
      <Dashboard />
    </Container>
  );
}
