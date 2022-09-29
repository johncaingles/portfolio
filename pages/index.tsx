import { Footer } from "./../components/Footer";
import Hero from "./../components/Hero";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div className="text-slate-800">
      <Head>
        <title>John Caingles</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Footer />
    </div>
  );
};

export default Home;
