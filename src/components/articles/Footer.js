import React from "react";
import styled from "styled-components";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
const FooterContainer = styled.footer`
  background: linear-gradient(120deg, #0d1117, #161b22);
  color: #fff;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  flex-wrap: wrap;
`;

const FooterSection = styled.div`
  flex: 1;
  min-width: 200px;
  margin: 20px;
`;

const FooterHeader = styled.h3`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  color: #58a6ff;
`;

const FooterText = styled.p`
  margin: 5px 0;
  padding: 6px;
`;

const FooterLink = styled.a`
  width: 200px;
  color: #fff;
  text-decoration: none;
  margin: 5px 0;
  display: block;
  outline: none;
  padding: 1px;

  &:hover {
    color: lightblue;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  margin-top: 10px;

  a {
    color: #fff;
    margin: 0 10px;
    font-size: 20px;

    &:hover {
      color: lightblue;
    }
  }
`;
const LogoImage = styled.img`
  height: 40px;
  background: #f9f9f9;
  border-radius: 25%;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterHeader>
            <LogoImage
              src="https://res.cloudinary.com/dbcygr0pi/image/upload/v1737249931/img6_cfbqfk.jpg"
              loading="lazy"
              alt="LogoImg"
            />
          </FooterHeader>
          <FooterHeader>United States</FooterHeader>
          <FooterText>
            2300 Camp Oando nowway, Cof 143 #1008 dollins Park, GA 34537, United
            States
          </FooterText>
          <FooterText> +1 (917) 836 7151</FooterText>
        </FooterSection>
        <FooterSection>
          <FooterHeader>Services</FooterHeader>
          <FooterLink href="#">Make a Donation</FooterLink>
          <FooterLink href="#">Volunteer Opportunities</FooterLink>
          <FooterLink href="#">Sponsorship Plans</FooterLink>
          <FooterLink href="#">Our Programs</FooterLink>
          <FooterLink href="#">Host an Event </FooterLink>
        </FooterSection>

        <FooterSection>
          <FooterHeader>Quick Links</FooterHeader>
          <FooterLink href="/About">About</FooterLink>
          <FooterLink href="/Projects">Projects</FooterLink>
          <FooterLink href="/Contact">Contact</FooterLink>
          <FooterLink href="#">Careers</FooterLink>
          <FooterLink href="#">Blog</FooterLink>
        </FooterSection>
        <FooterSection>
          <FooterHeader>Legal</FooterHeader>
          <FooterLink href="#">Terms Of Use</FooterLink>
          <FooterLink href="#">Privacy Policy</FooterLink>
          <FooterLink href="#">Cookie Policy</FooterLink>
        </FooterSection>
      </FooterContent>
      <SocialIcons>
        <FooterLink
          style={{ width: "auto" }}
          href="https://web.facebook.com/Tobagoreads"
          aria-label="Facebook"
        >
          <FaFacebook />
        </FooterLink>
        <FooterLink
          style={{ width: "auto" }}
          href="https://www.twitter.com"
          aria-label="Twitter"
        >
          <FaTwitter />
        </FooterLink>
        <FooterLink
          style={{ width: "auto" }}
          href="https://www.linkedin.com"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </FooterLink>
        <FooterLink
          style={{ width: "auto" }}
          href="https://www.instagram.com"
          aria-label="Instagram"
        >
          <FaInstagram />
        </FooterLink>
      </SocialIcons>

      <div
        style={{
          borderTop: "1px solid rgb(0, 195, 255)",
          width: "100%",
          textAlign: "center",
        }}
      >
        <FooterText style={{ marginTop: "20px" }}>
          &copy; {new Date().getFullYear()} Tobago Reads. All rights reserved.
        </FooterText>
      </div>
    </FooterContainer>
  );
};

export default Footer;
