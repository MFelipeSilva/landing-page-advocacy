import styled from "styled-components";

import Home from "./pages/home";

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
    </Container>
  );
}

export default App;
