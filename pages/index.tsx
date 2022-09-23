import type { NextPage } from "next";

import { useFetchMovies } from "../api/fetchHooks";

import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Grid from "../components/Grid/Grid";
import Card from "../components/Card/Card";
import Spinner from "../components/Spinner/Spinner";

import { useState } from "react";

const Home: NextPage = () => {
  const [query, setQuery] = useState("");

  const { data, fetchNextPage, isLoading, isFetching, error } = useFetchMovies(query);

  console.log(data)

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
