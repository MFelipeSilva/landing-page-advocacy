import styled, { keyframes } from "styled-components";

import { Button } from "../../components/Button";

import { BottomArrow } from "../../components/icons";

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
  padding: 10em 0 0 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${banner_home});

  & > div {
    display: flex;
    gap: 65px;
    align-items: center;
    flex-direction: column;

    & > h1 {
      color: #ffffff;
      max-width: 878px;
      width: 90vw;
      font-size: clamp(35pt, 6vw, 58pt);
      font-weight: 700;
      text-align: center;
      font-variant-caps: all-small-caps;
    }

    & > h2 {
      color: #ffffff;
      max-width: 735px;
      width: 90vw;
      font-size: clamp(18px, 4vw, 24px);
      font-weight: 300;
      text-align: center;
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
      <BottomArrow />
    </Container>
  );
}

export default Home;
