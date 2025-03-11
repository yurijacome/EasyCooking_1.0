import React from 'react';
import Header from '../../components/header/header';
import { Container } from "./homeStyle.js";

const Home = () => {


  return (

    <div>

      <Header />
      <Container>
      <h1>Welcome to the Home Page</h1>
      <p>This is the home page of the application.</p>
      </Container>

    </div>

  );

};

export default Home;
