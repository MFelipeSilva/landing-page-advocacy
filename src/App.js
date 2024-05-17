import styled from "styled-components";

import Home from "./pages/home";
import AboutMe from "./pages/about-me";
import Services from "./pages/services";
import Testimonials from "./pages/testimonials";

const Container = styled.main`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
`;

function App() {
  return (
    <Container id="/">
      <Home />
      <AboutMe />
      <Services />
      <Testimonials />
    </Container>
  );
}

export default App;
