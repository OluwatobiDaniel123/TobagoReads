import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import styled, { keyframes } from "styled-components";

// Slider settings
const settings = {
  fade: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  arrows: false,
  pauseOnHover: false,
};

// Animations
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const gradientShift = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

// Styled components
const Image = styled.img`
  width: 100%;
  height: 100vh;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

const Slide = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
`;

const TextContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  text-align: center;
  background: rgba(0, 0, 0, 0.7);
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  // animation: ${fadeIn} 1.5s ease-out;

  @media (max-width: 768px) {
    width: 90%;
    padding: 1.5rem;
  }
`;

const GradientText = styled.h2`
  font-size: 2.8rem;
  font-weight: bold;
  text-transform: uppercase;
  background: linear-gradient(45deg, #ff7e5f, #feb47b);
  background-size: 400% 400%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${gradientShift} 6s ease infinite, ${fadeIn} 1.5s ease-out;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SubText = styled.p`
  font-size: 1.2rem;
  margin: 1rem 0;
  line-height: 1.6;
  color: #fff;
  animation: ${fadeIn} 1.5s ease-out;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const CallToAction = styled(Link)`
  display: inline-block;
  margin-top: 1.5rem;
  padding: 1rem 1.8rem;
  font-size: 1rem;
  font-weight: bold;
  text-transform: uppercase;
  color: #fff;
  background: linear-gradient(45deg, #ff7e5f, #feb47b);
  background-size: 300% 300%;
  text-decoration: none;
  border-radius: 25px;
  box-shadow: 0px 4px 15px rgba(255, 126, 95, 0.5);
  transition: all 0.3s ease-in-out;
  animation: ${fadeIn} 2s ease-out;

  &:hover {
    background-position: 100% 0;
    box-shadow: 0px 6px 20px rgba(255, 126, 95, 0.7);
    transform: translateY(-3px);
  }

  &:active {
    transform: translateY(1px);
    box-shadow: 0px 2px 10px rgba(255, 126, 95, 0.3);
  }

  @media (max-width: 768px) {
    width: 100%;

    font-size: 0.9rem;
    padding: 0.6rem 1.5rem;
  }
`;

// Text content for the slider
const textContent = [
  {
    heading: "Join Hands to Make a Difference",
    subtext: "Every small contribution creates a big impact.",
    LinkText: "Donate Now",
    link: "/donate",
    image:
      "https://res.cloudinary.com/dbcygr0pi/image/upload/v1737372290/vecteezy_high-five-team-work-as-a-team-together-air-hands-bless-the_7102916_rq4bux.jpg",
  },
  {
    heading: "We’re Here to Help",
    subtext: "Reach out to learn how you can contribute or get support.",
    LinkText: "Contact Us",
    link: "/contact",
    image:
      "https://res.cloudinary.com/dbcygr0pi/image/upload/v1737372285/vecteezy_silhouette-of-hands-on-sunset-background-help-concept-hope_14000939_zwqjjc.jpg",
  },
  {
    heading: "Discover Our Projects",
    subtext: "Explore the lives we’ve touched and how we bring hope.",
    LinkText: "Explore More",
    link: "/explore",
    image:
      "https://res.cloudinary.com/dbcygr0pi/image/upload/v1737224874/img1_bs5nap.jpg",
  },
];

// Fade component
const Fade = () => {
  return (
    <div style={{ height: "100vh" }} className="slider-container">
      <Slider {...settings}>
        {textContent.map((item, index) => (
          <Slide key={index}>
            <Image src={item.image} alt={`Slide ${index + 1}`} />
            <Overlay />
            <TextContainer>
              <GradientText>{item.heading}</GradientText>
              <SubText>{item.subtext}</SubText>
              <CallToAction to={item.link}>{item.LinkText}</CallToAction>
            </TextContainer>
          </Slide>
        ))}
      </Slider>
    </div>
  );
};

export default Fade;
