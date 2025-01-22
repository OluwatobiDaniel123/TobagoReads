import React from "react";
import styled, { keyframes } from "styled-components";
import CountUp from "react-countup";
import {
  FaHandsHelping,
  FaHeart,
  FaChartLine,
  FaGlobeAfrica,
} from "react-icons/fa";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const HighlightsSection = styled.section`
  padding: 80px 40px;
  text-align: center;
  background: linear-gradient(135deg, #1e3c72, #2a5298);
  color: #ffffff;
  animation: ${fadeIn} 1s ease-in-out;

  @media (max-width: 768px) {
    padding: 60px 20px;
  }
`;

const HeaderWrapper = styled.div`
  margin-bottom: 60px;

  h1 {
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 15px;
    text-transform: uppercase;
    letter-spacing: 2px;
    background: linear-gradient(90deg, #00d4ff, #007bff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  h2 {
    font-size: 1.6rem;
    font-weight: 400;
    color: rgba(255, 255, 255, 0.8);
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2.5rem;
    }

    h2 {
      font-size: 1.3rem;
    }
  }
`;

const HighlightsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 10px;

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  }
`;

const HighlightCard = styled.div`
  position: relative;
  background: url("https://res.cloudinary.com/dbcygr0pi/image/upload/v1737226925/img5_tdn3lk.jpg")
    no-repeat center center;
  background-size: cover;
  border-radius: 15px;
  overflow: hidden;
  padding: 30px;
  text-align: center;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
  transition: transform 0.4s ease, box-shadow 0.4s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 25px rgba(0, 0, 0, 0.3);
  }

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    transition: background 0.4s ease;
    z-index: 0;
  }

  &:hover::before {
    background: rgba(0, 0, 0, 0.3);
  }

  h3,
  p {
    position: relative;
    z-index: 1;
    color: #fff;
  }

  h3 {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 10px;
  }

  p {
    font-size: 1rem;
    color: rgba(255, 255, 255, 0.8);
  }

  @media (max-width: 768px) {
    padding: 20px;
    h3 {
      font-size: 1.8rem;
    }
    p {
      font-size: 0.9rem;
    }
  }
`;

const HighlightCard1 = styled.div`
  position: relative;
  background: url("https://res.cloudinary.com/dbcygr0pi/image/upload/v1737384180/vecteezy_ai-generated-diversity-ethnic-kids_36234784_xtv3mf.jpg")
    no-repeat center center;
  background-size: cover;
  border-radius: 15px;
  overflow: hidden;
  padding: 30px;
  text-align: center;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
  transition: transform 0.4s ease, box-shadow 0.4s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 25px rgba(0, 0, 0, 0.3);
  }

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    transition: background 0.4s ease;
    z-index: 0;
  }

  &:hover::before {
    background: rgba(0, 0, 0, 0.3);
  }

  h3,
  p {
    position: relative;
    z-index: 1;
    color: #fff;
  }

  h3 {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 10px;
  }

  p {
    font-size: 1rem;
    color: rgba(255, 255, 255, 0.8);
  }

  @media (max-width: 768px) {
    padding: 20px;
    h3 {
      font-size: 1.8rem;
    }
    p {
      font-size: 0.9rem;
    }
  }
`;

const IconWrapper = styled.div`
  font-size: 5rem;
  background: linear-gradient(135deg, #007bff, #00d4ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const HighlightContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    font-size: 2.4rem;
    font-weight: bold;
    margin: 10px 0;
    color: #ffffff;
    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  p {
    font-size: 1.2rem;
    color: rgba(255, 255, 255, 0.8);
  }
`;

const Divider = styled.div`
  width: 130px;
  height: 5px;
  margin: 20px auto;
  background: linear-gradient(90deg, #007bff, #00d4ff);
  border-radius: 5px;
`;

const CompanyHighlights = () => {
  return (
    <HighlightsSection>
      <HeaderWrapper>
        <h1>Our Impact</h1>
        <Divider />
        <h2>Empowering Communities and Changing Lives</h2>
      </HeaderWrapper>
      <HighlightsGrid>
        <HighlightCard>
          <IconWrapper>
            <FaHandsHelping />
          </IconWrapper>
          <HighlightContent>
            <h3>
              <CountUp end={1000000} />+
            </h3>
            <p>Donations Received</p>
          </HighlightContent>
        </HighlightCard>
        <HighlightCard1>
          <IconWrapper>
            <FaHeart style={{ color: "red" }} />
          </IconWrapper>
          <HighlightContent>
            <h3>
              <CountUp end={5000} />+
            </h3>
            <p>Lives Changed</p>
          </HighlightContent>
        </HighlightCard1>
        <HighlightCard>
          <IconWrapper>
            <FaChartLine style={{ color: "#00BCD4" }} />
          </IconWrapper>
          <HighlightContent>
            <h3>
              <CountUp end={150} />+
            </h3>
            <p>Projects Completed</p>
          </HighlightContent>
        </HighlightCard>
        <HighlightCard>
          <IconWrapper>
            <FaGlobeAfrica style={{ color: "lightblue" }} />
          </IconWrapper>
          <HighlightContent>
            <h3>
              <CountUp end={20} />+
            </h3>
            <p>Countries Served</p>
          </HighlightContent>
        </HighlightCard>
      </HighlightsGrid>
    </HighlightsSection>
  );
};

export default CompanyHighlights;
