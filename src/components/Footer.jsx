import styled from "styled-components";

import {
  IconFacebook,
  IconInstagram,
  IconLinkedIn,
  IconTwitter,
} from "./icons";

const StyledFooter = styled.footer`
  display: flex;
  width: 100%;
  height: 100%;
  gap: 130px;
  padding: 8em 0;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: #001a2c;

  & > div {
    display: flex;
    max-width: 649px;
    gap: 75px;
    flex-direction: row;

    @media (max-width: 768px) {
      width: 80vw;
      gap: 20px;
      justify-content: space-between;
    }
  }

  & > p {
    color: #ffffff;
    font-size: clamp(13px, 2vw, 20px);
    font-weight: 300;
    text-align: center;
    text-transform: uppercase;

    @media (max-width: 768px) {
      width: 85vw;
    }
  }
`;

const Icon = styled.div`
  display: flex;
  max-width: 106px;
  max-height: 106px;
  width: 15vw;
  height: 15vw;
  min-width: 50px;
  min-height: 50px;
  cursor: pointer;
  border-radius: 100%;
  align-items: center;
  justify-content: center;
  border: 2px solid #ffffff;

  & > svg {
    max-width: 60px;
    max-height: 60px;
    width: 6vw;
    height: 6vw;
    color: #ffffff;
  }
`;

export const Footer = () => {
  return (
    <StyledFooter>
      <div>
        <Icon>
          <IconFacebook />
        </Icon>
        <Icon>
          <IconInstagram />
        </Icon>
        <Icon>
          <IconTwitter />
        </Icon>
        <Icon>
          <IconLinkedIn />
        </Icon>
      </div>
      <p>Copyright © 2024 Esteban Lakatos. Todos os direitos reservados.</p>
    </StyledFooter>
  );
};
