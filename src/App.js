import styled from "styled-components";

import Home from "./pages/home";
import AboutMe from "./pages/about-me";

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
    </Container>
  );
}

export default App;
