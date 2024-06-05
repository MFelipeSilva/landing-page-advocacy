import { useState, useEffect } from "react";

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
      z-index: 3;
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
        font-size: 18px;
        font-weight: 400;
        position: relative;
        padding-bottom: 2px;
        letter-spacing: 1px;
        text-decoration: none;
        text-transform: uppercase;
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
      z-index: 3;
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

const StyledMenuBar = styled.div`
  display: none;
  position: fixed;
  width: 100%;
  top: 0;
  bottom: 0;
  z-index: 1;
  padding: 15em 0;
  background-color: #00111c;
  transform: translateY(${(props) => (props.isOpen ? "0" : "-100%")});
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;

  & > nav {
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;

    ul {
      display: flex;
      gap: 30px;
      list-style: none;
      text-align: center;
      flex-direction: column;

      li > a {
        position: relative;
        color: #ffffff;
        font-size: 22px;
        font-weight: 400;
        padding-bottom: 2px;
        letter-spacing: 1px;
        text-decoration: none;
        text-transform: uppercase;
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
    }
  }

  @media (max-width: 768px) {
    & {
      display: flex;
    }
  }
`;

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleScroll = () => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  };

  useEffect(() => {
    toggleScroll();
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

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
              href="about-me"
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
              href="services"
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
              href="testimonials"
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
              href="contact"
            >
              Contato
            </Link>
          </li>
        </ul>
        {isOpen ? (
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Menu fechado">
            <IconClose />
          </button>
        ) : (
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Menu aberto">
            <IconMenu />
          </button>
        )}
      </nav>
      <StyledMenuBar onClick={() => setIsOpen(false)} isOpen={isOpen}>
        <nav>
          <ul>
            <li>
              <Link
                to="about-me"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                href="about-me"
                onClick={() => setIsOpen(false)}
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
                href="services"
                onClick={() => setIsOpen(false)}
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
                href="testimonials"
                onClick={() => setIsOpen(false)}
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
                href="contact"
                onClick={() => setIsOpen(false)}
              >
                Contato
              </Link>
            </li>
          </ul>
        </nav>
      </StyledMenuBar>
    </StyledHeader>
  );
};
