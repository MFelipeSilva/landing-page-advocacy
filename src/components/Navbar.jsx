import { useState } from "react";

import styled from "styled-components";

import { IconMenu, IconClose } from "./icons";

import logo from "../assets/logo-advocacy.png";

const StyledHeader = styled.header`
  display: flex;
  width: 100%;
  height: 100%;
  margin-top: 55px;
  align-items: center;
  justify-content: center;

  & > nav {
    display: flex;
    width: 70vw;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    ul {
      display: flex;
      gap: 14px;
      list-style: none;
      flex-direction: row;

      li > a {
        color: #ffffff;
        font-size: 22px;
        font-weight: 400;
        position: relative;
        padding-bottom: 2px;
        text-decoration: none;
        font-variant-caps: all-small-caps;
      }

      li > a::before {
        content: "";
        position: absolute;
        bottom: 0;
        left: 50%;
        width: 0;
        height: 2px;
        background-color: #ffffff;
        transition: width 0.3s;
        transform: translateX(-50%);
      }

      li > a:hover::before {
        width: 70%;
      }

      @media (max-width: 992px) {
        display: none;
      }
    }

    & > button {
      display: none;
      cursor: pointer;

      svg {
        color: #ffffff;
      }

      @media (max-width: 992px) {
        display: flex;
      }
    }
  }
`;

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <StyledHeader>
      <nav>
        <img src={logo} alt="logo" />
        <ul>
          <li>
            <a href="#about-me">Sobre mim</a>
          </li>
          <li>
            <a href="#services">Serviços</a>
          </li>
          <li>
            <a href="#testimonials">Depoimentos</a>
          </li>
          <li>
            <a href="#contact">Contato</a>
          </li>
        </ul>
        {isOpen ? (
          <button onClick={() => setIsOpen(!isOpen)}>
            <IconClose />
          </button>
        ) : (
          <button onClick={() => setIsOpen(!isOpen)}>
            <IconMenu />
          </button>
        )}
      </nav>
    </StyledHeader>
  );
};
