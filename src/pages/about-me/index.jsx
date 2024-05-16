import styled from "styled-components";

import { IconBalance } from "../../components/icons";

import { Button } from "../../components/Button";

import photo_lawyer from "../../assets/photo-lawyer.png";

const Container = styled.section`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 10em 0;
  align-items: center;
  justify-content: center;

  & > div {
    display: flex;
    max-width: 1338px;
    width: 70vw;
    gap: 80px;
    align-items: center;
    justify-content: space-between;

    & > img {
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
      border-radius: 0 50px 0 50px;

      @media (max-width: 1360px) {
        width: 50%;
        height: 50%;
      }

      @media (max-width: 768px) {
        width: 90%;
      }
    }

    & > div {
      display: flex;
      max-width: 660px;
      min-width: 400px;
      gap: 30px;
      flex-direction: column;

      & > h2 {
        color: #000000;
        font-size: clamp(35px, 3vw, 54px);
        font-weight: 700;
        line-height: 1.5;
        text-transform: uppercase;
      }

      & > h3 {
        display: flex;
        gap: 10px;
        font-size: clamp(18px, 1.5vw, 20px);
        font-weight: 700;
        align-items: center;
      }

      & > p {
        font-size: clamp(17px, 1.5vw, 20px);
        font-weight: 400;
      }

      @media (max-width: 992px) {
        min-width: 0;
      }

      @media (max-width: 768px) {
        width: 90vw;
      }
    }

    @media (max-width: 1280px) {
      min-width: 0;
      width: 90vw;
    }

    @media (max-width: 768px) {
      width: 90vw;
      flex-direction: column;
    }
  }
`;

function AboutMe() {
  return (
    <Container>
      <div>
        <img src={photo_lawyer} alt="photo lawyer" />
        <div>
          <h2>Esteban Lakatos Júnior</h2>
          <h3>
            <IconBalance />
            Advogado inscrito na OAB/SP 294.61
          </h3>
          <p>
            Dr. Esteban Lakatos Júnior, advogado com mais de 20 anos de
            experiência, formado pela Universidade de São Paulo. Sou o fundador
            de um escritório full service, cuja carteira abrange mais de 500
            processos e clientes em vários estados do Brasil, em diversas áreas
            do direito, como criminal, família, cível, bancário, previdenciário
            e eleitoral. <br /> Meu escritório também se destaca no auxílio a
            clientes em questões relacionadas a fraudes bancárias, oferecendo
            suporte especializado para lidar com casos de diferentes naturezas.
            <br /> Além disso, ao longo dos anos, construímos uma reputação
            sólida baseada em resultados comprovados e um compromisso inabalável
            com a excelência no atendimento ao cliente.
          </p>
          <Button />
        </div>
      </div>
    </Container>
  );
}

export default AboutMe;
