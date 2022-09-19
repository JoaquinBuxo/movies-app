import type { NextPage } from "next";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Grid from "../components/Grid/Grid";
import Card from "../components/Card/Card";
import Spinner from "../components/Spinner/Spinner";

const Home: NextPage = () => {
  return (
    <main className="relative h-screen overflow-y-scroll">
      <Header></Header>
      <Hero></Hero>
      <Grid></Grid>
      <Card></Card>
      <Spinner></Spinner>
    </main>
  );
};

export default Home;
