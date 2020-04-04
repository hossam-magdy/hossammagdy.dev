import React from "react";
import Head from "next/head";

const TEXT = `(This will be built with some decent frontend tech ;) … later;`;

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Hossam Magdy</title>
      </Head>
      <pre>{TEXT}</pre>
    </>
  );
};

export default Home;
