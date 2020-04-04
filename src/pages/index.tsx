import React from "react";

const TEXT = `This will be built with some decent frontend tech ;) … later;

Thanks for passing by,
Cheers :)`;

const Home: React.FC = () => {
  return <pre>${TEXT}</pre>;
};

export default Home;
