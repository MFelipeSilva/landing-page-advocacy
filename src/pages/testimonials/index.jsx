import { useState } from "react";

import styled from "styled-components";

import Slider from "react-slick";

import { testimonials } from "../../utils/testimonials";

import { IconArrowLeft, IconArrowRight } from "../../components/icons";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Container = styled.main`
  display: flex;
  width: 100%;
  height: 100%;
  gap: 30px;
  padding: 10em 0;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: #001a2c;

  & > h2 {
    display: flex;
    position: relative;
    color: #ffffff;
    font-size: clamp(35px, 3vw, 54px);
    font-weight: 700;
    line-height: 1.5;
    margin-bottom: 30px;
    justify-content: center;
    text-transform: uppercase;

    &::before {
      content: "";
      position: absolute;
      bottom: 0;
      width: 50%;
      height: 8px;
      background-color: #ffffff;
    }
  }

  & > div {
    display: flex;
    gap: 30px;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px) {
      width: 20vw;
    }
  }

  & > .slick-slider {
    display: flex;
    max-width: 950px;
    width: 70vw;
    cursor: grab;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    & > svg {
      cursor: pointer;
      font-size: 60px;
      background-color: red;
    }

    & > .slick-list {
      display: flex;

      & > .slick-track {
        display: flex;
        flex-direction: row;

        & > .slick-slide > div > div {
          display: flex !important;
        }
      }
    }

    @media (max-width: 1280px) {
      width: 85vw;
    }
  }
`;

const AvatarImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: opacity 0.5s;
  opacity: ${(props) => (props.isActive ? 1 : 0.4)};
`;

const ArrowButton = styled.button`
  cursor: pointer;
  background-color: transparent;

  & > svg {
    color: ${(props) =>
      props.disabled ? "rgba(255, 255, 255, 0.5)" : "rgba(255, 255, 255)"};
  }
`;

const Card = styled.div`
  display: flex;
  gap: 30px;
  text-align: center;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  & > h2 {
    color: #ffffff;
    font-size: clamp(20px, 3vw, 24px);
    font-weight: 500;
    text-transform: uppercase;
  }

  & > p {
    max-width: 556px;
    width: 100%;
    color: #ffffff;
    font-size: clamp(15px, 3.5vw, 18px);
    font-weight: 300;
  }

  @media (max-width: 992px) {
    & > p {
      width: 85vw;
    }
  }
`;

const NextArrow = ({ onClick, disabled }) => {
  return (
    <ArrowButton onClick={onClick} disabled={disabled}>
      <IconArrowRight />
    </ArrowButton>
  );
};

const PrevArrow = ({ onClick, disabled }) => {
  return (
    <ArrowButton onClick={onClick} disabled={disabled}>
      <IconArrowLeft />
    </ArrowButton>
  );
};

function Testimonials() {
  const [slideIndex, setSlideIndex] = useState(0);

  const settings = {
    dots: false,
    infinite: false,
    speed: 400,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow disabled={slideIndex === testimonials.length - 1} />,
    prevArrow: <PrevArrow disabled={slideIndex === 0} />,
    beforeChange: (_, next) => setSlideIndex(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <Container id="testimonials">
      <h2>Depoimentos</h2>
      <div>
        {testimonials.map((testimonial, index) => (
          <AvatarImage
            src={testimonial.avatar}
            alt="avatar"
            key={testimonial.id}
            isActive={index === slideIndex}
          />
        ))}
      </div>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <Card key={testimonial.id} isActive={index === slideIndex}>
            <h2>{testimonial.name}</h2>
            <p>{testimonial.text}</p>
          </Card>
        ))}
      </Slider>
    </Container>
  );
}

export default Testimonials;
