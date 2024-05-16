import styled from "styled-components";

import { services } from "../../utils/services";

const Container = styled.section`
  display: flex;
  width: 100%;
  height: 100%;
  gap: 60px;
  padding: 4em 0;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  & > h2 {
    display: flex;
    position: relative;
    color: #000000;
    font-size: clamp(35px, 3vw, 54px);
    font-weight: 700;
    line-height: 1.5;
    justify-content: center;
    text-transform: uppercase;

    &::before {
      content: "";
      position: absolute;
      bottom: 0;
      width: 50%;
      height: 8px;
      background-color: #00111c;
    }
  }

  & > div {
    display: grid;
    max-width: 1338px;
    width: 70vw;
    gap: 130px;
    row-gap: 60px;
    grid-template-columns: 1fr 1fr 1fr;

    @media (max-width: 1600px) {
      gap: 200px;
      row-gap: 60px;
      grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 1280px) {
      width: 85vw;
      gap: 100px;
      row-gap: 60px;
    }

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }
`;

const Card = styled.div`
  display: flex;
  width: 100%;
  height: 340px;
  gap: 34px;
  padding: 42px 20px;
  text-align: center;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: #00111c;
  border-radius: 0 50px 0 50px;

  & > h3 {
    color: #ffffff;
    font-size: 20px;
    font-weight: 500;
  }

  & > p {
    color: #ffffff;
    font-size: 16px;
    font-weight: 300;
  }
`;

function Services() {
  return (
    <Container id="services">
      <h2>Nossos serviços</h2>
      <div>
        {services.map((service) => (
          <Card>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </Card>
        ))}
      </div>
    </Container>
  );
}

export default Services;
