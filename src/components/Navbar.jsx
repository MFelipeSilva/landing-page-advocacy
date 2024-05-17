import { useState } from "react";

import { Link } from "react-scroll";

import styled from "styled-components";

import { IconMenu, IconClose } from "./icons";

import logo from "../assets/logo-advocacy.png";

const StyledHeader = styled.header`
  display: flex;
  position: absolute;
  width: 100%;
  top: 0;
  margin-top: 55px;
  align-items: center;
  justify-content: center;

  & > nav {
    display: flex;
    max-width: 1338px;
    min-width: 1100px;
    width: 70vw;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    & > img {
      max-width: 162px;
      max-height: 49px;
      object-fit: contain;
    }

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

      @media (max-width: 768px) {
        display: none;
      }
    }

    & > button {
      display: none;
      cursor: pointer;
      background-color: transparent;

      @media (max-width: 768px) {
        display: flex;
      }
    }

    @media (max-width: 1280px) {
      min-width: 0;
      width: 85vw;
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
            <Link
              to="about-me"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Sobre mim
            </Link>
          </li>
          <li>
            <Link
              to="services"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
            >
              Serviços
            </Link>
          </li>
          <li>
            <Link
              to="testimonials"
              spy={true}
              smooth={true}
              offset={-120}
              duration={500}
            >
              Depoimentos
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              Contato
            </Link>
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
