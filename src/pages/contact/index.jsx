import styled from "styled-components";

import { Button } from "../../components/Button";

import { IconEmail, IconMarker, IconPhone } from "../../components/icons";

const Container = styled.section`
  display: flex;
  width: 100%;
  height: 100%;
  gap: 60px;
  padding: 10em 0;
  align-items: center;
  flex-direction: column;
  justify-content: center;

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
    display: flex;
    max-width: 1338px;
    width: 70vw;
    gap: 70px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    & > div {
      display: flex;
      max-width: 500px;
      gap: 50px;
      flex-direction: column;

      & > h3 {
        color: #000000;
        font-size: clamp(20px, 2vw, 22px);
        font-weight: 700;
      }

      & > div {
        display: flex;
        gap: 20px;
        flex-direction: column;

        & > p {
          display: flex;
          gap: 10px;
          font-size: clamp(15px, 2vw, 18px);
          font-weight: 400;
          align-items: center;

          & > svg {
            flex-shrink: 0;
          }
        }
      }
    }

    & > iframe {
      @media (max-width: 768px) {
        width: 85vw;
      }
    }

    @media (max-width: 1280px) {
      width: 85vw;
    }

    @media (max-width: 768px) {
      flex-direction: column;
    }
  }
`;

function Contact() {
  return (
    <Container id="contact">
      <h2>Contatos</h2>
      <div>
        <div>
          <h3>
            Clique no botão e fale conosco, faremos a análise do seu caso.
          </h3>
          <div>
            <p>
              <IconEmail /> estebanadvocacia@gmail.com
            </p>
            <p>
              <IconPhone /> (11) 11111-1111
            </p>
            <p>
              <IconMarker />
              R. Amaral Gama, 333 - 11 E 12 - Santana - SP, 00218-001
            </p>
          </div>
          <Button />
        </div>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117039.43258133324!2d-46.707676301660946!3d-23.5511167058672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef6320e88ea59%3A0x154f476fd0ed0fae!2sAL%20Advogados!5e0!3m2!1spt-BR!2sbr!4v1715979731662!5m2!1spt-BR!2sbr"
          width="600"
          height="450"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </Container>
  );
}

export default Contact;
