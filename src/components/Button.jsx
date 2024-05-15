import styled from "styled-components";

import { IconWhatsapp } from "./icons";

const StyledButton = styled.button`
  display: flex;
  gap: 10px;
  padding: 20px;
  cursor: pointer;
  border-radius: 8px;
  background-color: #00111c;
  box-shadow: 0 1px 10px 8px rgba(0, 0, 0, 20%);
  align-items: center;
  justify-content: center;

  & > span {
    color: #ffffff;
    font-size: clamp(16px, 3vw, 20px);
    font-weight: 400;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const Button = () => {
  return (
    <StyledButton>
      <IconWhatsapp />
      <span>Converse com um especialista</span>
    </StyledButton>
  );
};
