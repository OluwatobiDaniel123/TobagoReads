import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaBreadSlice } from "react-icons/fa";
import { IoSchoolSharp } from "react-icons/io5";
import { RiFirstAidKitFill } from "react-icons/ri";

const About = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (progress < 100) {
        setProgress((prev) => prev + 1);
      }
    }, 40);
    return () => clearInterval(interval);
  }, [progress]);

  return (
    <HeroSection>
      <Container>
        <TextContent>
          <Title>ABOUT US</Title>

          <Subtitle>
            At Tobago Reads, we are a passionate team driven by a mission to
            make the world a better place.
            <br />
            Dedicated to uplifting lives and fostering hope, we focus on
            providing essential support, resources, and opportunities to
            individuals and communities in need.
            <br />
            <br />
            Together, we can build a world where every individual has the chance
            to thrive. Join us in making a lasting impact!
          </Subtitle>

          <CTAContainer>
            <CTA to="/Projects">Explore Services</CTA>
            <SecondaryCTA to="/Contact">Get in Touch</SecondaryCTA>
          </CTAContainer>
          <ProgressBar>
            <Progress style={{ width: `${progress}%` }} />
          </ProgressBar>
        </TextContent>
        <ImageWrapper>
          <HeroImage
            src="https://res.cloudinary.com/dbcygr0pi/image/upload/v1737224874/img1_bs5nap.jpg"
            alt="Innovation and Technology"
          />
        </ImageWrapper>
      </Container>
      <Services>
        <ServiceCard>
          <Icon>
            <FaBreadSlice />
          </Icon>
          <CardTitle>Food & Basic Necessities</CardTitle>
          <CardDescription>
            Providing monetary support to individuals, families, or communities
            in need.
          </CardDescription>
        </ServiceCard>
        <ServiceCard>
          <Icon>
            <IoSchoolSharp />
          </Icon>
          <CardTitle>Education & Skill Development</CardTitle>
          <CardDescription>
            Funding or organizing schools for children in underserved
            communities.
          </CardDescription>
        </ServiceCard>
        <ServiceCard>
          <Icon>
            <RiFirstAidKitFill />
          </Icon>
          <CardTitle>Healthcare Services</CardTitle>
          <CardDescription>
            Free medical checkups, vaccination drives, and counseling services
            also Covering costs for surgeries, medications, or treatments.
          </CardDescription>
        </ServiceCard>
        <div>
          <CardTitle>Meet Our Volunteer's</CardTitle>
          <TeamSection>
            <TeamMember>
              <img
                src="https://res.cloudinary.com/dbcygr0pi/image/upload/v1736774363/WhatsApp_Image_2025-01-10_at_17.55-Photoroom_tafyqg.jpg"
                alt="Team Member"
              />
              <h4>Oluwatobi Daniel</h4>
              <p>Volunteer</p>
            </TeamMember>
            <TeamMember>
              <img
                src="https://res.cloudinary.com/dbcygr0pi/image/upload/v1736774363/WhatsApp_Image_2025-01-10_at_17.55-Photoroom_tafyqg.jpg"
                alt="Team Member"
              />
              <h4>John Smith</h4>
              <p>Volunteer</p>
            </TeamMember>
            <TeamMember>
              <img
                src="https://res.cloudinary.com/dbcygr0pi/image/upload/v1736774363/WhatsApp_Image_2025-01-10_at_17.55-Photoroom_tafyqg.jpg"
                alt="Team Member"
              />
              <h4>Emily Brown</h4>
              <p>Volunteer</p>
            </TeamMember>
          </TeamSection>
        </div>
      </Services>
    </HeroSection>
  );
};

export default About;
const TeamSection = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  // border: 2px solid pink;

  margin-top: 40px;
`;

const TeamMember = styled.div`
  text-align: center;
  max-width: 200px;
  padding: 20px;
  // border: 2px solid pink;

  img {
    border-radius: 50%;
    width: 100px;
    height: 100px;
    object-fit: cover;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  img:hover {
    transform: scale(1.1);
    box-shadow: 0 12px 50px rgba(0, 0, 0, 0.15);
  }

  h4 {
    font-size: 18px;
    margin-top: 20px;
    color: #555;
    font-weight: 600;
  }

  p {
    font-size: 16px;
    color: #888;
    font-weight: 800;
  }

  @media (max-width: 768px) {
    padding: 0;
  }
`;

const HeroSection = styled.section`
  background: linear-gradient(120deg, #0d1117, #161b22);

  color: #f5f7fa;
  padding: 80px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const TextContent = styled.div`
  max-width: 600px;
  text-align: left;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 15px;
  text-transform: uppercase;
  letter-spacing: 2px;
  // background: linear-gradient(90deg, #00d4ff, #007bff);
  background: linear-gradient(175deg, #1e3c72, #2a5298);

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  line-height: 1.2;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    // font-size: 1rem;
    line-height: 1.4;
    margin-bottom: 30px;
    text-align: left;
  }
`;

const CTAContainer = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const CTA = styled(Link)`
  padding: 12px 30px;
  background: #238636;
  color: #fff;
  font-weight: bold;
  border-radius: 5px;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background: #2ea043;
    transform: translateY(-3px);
  }
`;

const SecondaryCTA = styled(Link)`
  padding: 12px 30px;
  background: transparent;
  color: #58a6ff;
  font-weight: bold;
  border: 2px solid #58a6ff;
  border-radius: 5px;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background: #58a6ff;
    color: #fff;
  }
`;

const ProgressBar = styled.div`
  margin-top: 30px;
  width: 100%;
  height: 10px;
  background: #30363d;
  border-radius: 5px;
  overflow: hidden;
`;

const Progress = styled.div`
  height: 100%;
  background: #58a6ff;
  transition: width 0.4s ease;
`;

const ImageWrapper = styled.div`
  max-width: 500px;

  @media (max-width: 768px) {
    margin-top: 40px;
  }
`;

const HeroImage = styled.img`
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5);
`;

const Services = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  max-width: 1200px;
  width: 100%;
  flex-wrap: wrap;
  margin-top: 60px;
  padding: 10px 5px;
`;

const ServiceCard = styled.div`
  // background: #161b22;
  background: linear-gradient(175deg, #1e3c72, #2a5298);
  border: 1px solid #30363d;
  border-radius: 10px;
  padding: 20px;
  width: 300px;
  text-align: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }
`;

const Icon = styled.div`
  font-size: 3rem;
  margin-bottom: 10px;
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #58a6ff;
`;

const CardDescription = styled.p`
  font-size: 1rem;
  color: #c9d1d9;
  line-height: 1.6;
`;
