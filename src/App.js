import { Element } from "react-scroll";

import styled from "styled-components";

import Home from "./pages/home";
import AboutMe from "./pages/about-me";
import Services from "./pages/services";
import Testimonials from "./pages/testimonials";
import Contact from "./pages/contact";

const Container = styled.main`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
`;

function App() {
  return (
    <Container>
      <Element name="home">
        <Home />
      </Element>
      <Element name="about-me">
        <AboutMe />
      </Element>
      <Element name="services">
        <Services />
      </Element>
      <Element name="testimonials">
        <Testimonials />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
    </Container>
  );
}

export default App;
