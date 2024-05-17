import styled, { keyframes } from "styled-components";

import { Button } from "../../components/Button";

import { IconArrowBottom } from "../../components/icons";

import banner_home from "../../assets/banner-home.png";

const bounceAnimation = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-20px);
  }
  60% {
    transform: translateY(-10px);
  }
`;

const Container = styled.section`
  display: flex;
  width: 100%;
  min-height: 100vh;
  gap: 150px;
  padding-top: 13em;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${banner_home});

  & > div {
    display: flex;
    gap: 65px;
    text-align: center;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    & > h1 {
      color: #ffffff;
      max-width: 878px;
      width: 85vw;
      font-size: clamp(35px, 6vw, 54px);
      font-weight: 700;
      line-height: 1.5;
      text-transform: uppercase;
    }

    & > h2 {
      color: #ffffff;
      max-width: 735px;
      width: 85vw;
      font-size: clamp(17px, 3.5vw, 24px);
      font-weight: 300;
    }

    @media (max-width: 768px) {
      gap: 45px;
    }
  }

  & > svg {
    cursor: pointer;
    animation: ${bounceAnimation} 2s ease-in-out infinite;

    @media (max-width: 992px) {
      width: 80px;
      height: 80px;
    }

    @media (max-width: 768px) {
      width: 70px;
      height: 70px;
    }
  }

  @media (max-width: 768px) {
    gap: 130px;
  }
`;

function Home() {
  return (
    <Container>
      <div>
        <h1>
          Protegendo Seus Direitos: Expertise Jurídica para Todas as Necessidade
        </h1>
        <h2>
          Desde questões familiares até litígios comerciais, nossa equipe de
          advogados dedicados está aqui para oferecer orientação especializada e
          representação eficaz.
        </h2>
        <Button />
      </div>
      <IconArrowBottom />
    </Container>
  );
}

export default Home;
