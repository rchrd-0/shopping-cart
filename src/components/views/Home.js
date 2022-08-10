import React from 'react';
import styled from 'styled-components';
import landing from '../../assets/images/landing.jpg';

const Home = () => {
  return (
    <Hero />
    // <div id="landing-page">
    //   <h1 className="content-header">landing page</h1>
    // </div>
  );
};

const Hero = styled.div`
  flex: 1;
  background-image: url(${landing});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export default Home;
