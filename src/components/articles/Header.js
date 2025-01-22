import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { IoClose, IoMenuOutline } from "react-icons/io5";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const HeaderContainer = styled.div`
  background-color: white;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 1000;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
`;

const Box = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 6px;
`;

const LogoImage = styled.img`
  height: 40px;
  background: #f9f9f9;
  border-radius: 25%;
  box-shadow: 0 0 0 0.5px lightblue;
`;

const HeaderUl = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  align-items: center;
  gap: 15px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavItem = styled.li`
  position: relative;
  font-size: 16px;
  display: inline-block;

  a {
    text-decoration: none;
    color: ${(props) => (props.isActive ? "#007bff" : "#333")};
    font-weight: ${(props) => (props.isActive ? "700" : "600")};
    padding: 8px 15px;
    border-radius: 5px;
    border-bottom: ${(props) =>
      props.isActive ? "2px solid rgb(0, 195, 255)" : "#333"};
    transition: all 0.3s ease;

    &:hover {
      color: #fff;
      background-color: #007bff;
      transform: translateY(-2px);
    }
  }

  &:hover > div {
    display: block;
    opacity: 1;
    transform: translateY(0); // Animate dropdown
  }
`;

const DropdownContent = styled.div`
  // display: none;
  position: absolute;
  top: 140%;
  right: -110px;
  padding: 10px 20px;
  background-color: #fff;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.2);
  width: 555px;
  z-index: 999;
  border-radius: 5px;
  // opacity: 0;
  transform: translateY(-10px);
  transition: opacity 0.3s ease, transform 0.3s ease;
`;

const DropdownItem = styled(Link)`
  width: 335px;
  display: block;
  color: #333;
  padding: 10px 20px;
  text-decoration: none;
  &:hover {
    background-color: #007bff;
    color: white;
  }
`;

const NavIcon = styled.div`
  @media (min-width: 769px) {
    display: none;
  }

  svg {
    font-size: 40px;
    color: #333;
    cursor: pointer;
  }
`;

const SideNav = styled.div`
  position: fixed;
  top: 0;
  left: ${({ show }) => (show ? "0" : "-100%")};
  width: 70%;
  height: 100vh;
  background-color: #333;
  color: white;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.5);
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  transition: left 0.3s ease;
  z-index: 999;
`;

const SideNavItem = styled(Link)`
  color: ${(props) => (props.isActive ? "#007bff" : "white")};
  font-weight: ${(props) => (props.isActive ? "700" : "500")};
  border-bottom: ${(props) =>
    props.isActive ? "1px solid rgb(0, 195, 255)" : "#333"};
  text-decoration: none;
  font-size: 18px;
  padding: 10px 15px;
  border-radius: 5px;
  transition: all 0.3s ease;
  &:hover {
    background-color: #007bff;
    color: white;
  }
`;

const QuoteButton = styled.button`
  background: linear-gradient(45deg, #007bff, #00d4ff);
  color: white;
  padding: 10px 20px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }
`;

const DropdownDiv = styled.div`
  display: flex;
  padding: 20px 0;
  gap: 10px;
  margin-bottom: 20px;
  align-items: center;
  background: rgba(0, 0, 0, 0.05);
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.1);
`;

const FooterLink = styled.a`
  width: 200px;
  color: blue;
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
  align-items: center;

  a {
    color: blue;
    margin: 0 10px;
    font-size: 20px;

    &:hover {
      // color: lightblue;
    }
  }
`;

const Detail = styled.div`
  flex: 1;
  h3 {
    font-size: 1.6rem;
    margin-bottom: 15px;
    color: #58a6ff;
  }
  p {
    margin: 8px 0;
    font-size: 1rem;
    line-height: 1.3rem;
  }
  span {
    line-height: 1.3rem;
  }
`;
const Header = () => {
  const location = useLocation();
  const [activeNav, setActiveNav] = useState(location.pathname);
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    setActiveNav(location.pathname);
  }, [location]);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <HeaderContainer>
      <Box>
        <Link to="/">
          <LogoImage
            src="https://res.cloudinary.com/dbcygr0pi/image/upload/v1737249931/img6_cfbqfk.jpg"
            loading="lazy"
            alt="Logo"
          />
        </Link>

        <HeaderUl>
          {["/", "/Projects", "/About", "/Contact"].map((path, index) => (
            <NavItem key={index} isActive={activeNav === path}>
              <Link to={path}>{path === "/" ? "Home" : path.slice(1)}</Link>

              {path === "/Projects" && (
                <DropdownContent>
                  <DropdownItem to="/portfolio#projects">
                    Our Projects Our Projects Our Projects
                  </DropdownItem>
                  <DropdownItem to="/portfolio#case-studies">
                    Case Studies
                  </DropdownItem>
                </DropdownContent>
              )}

              {path === "/About" && (
                <DropdownContent>
                  <h4>About Us</h4>
                  <DropdownDiv>
                    <div>
                      <LogoImage
                        src="https://res.cloudinary.com/dbcygr0pi/image/upload/v1737249931/img6_cfbqfk.jpg"
                        loading="lazy"
                        alt="Logo"
                      />
                      <span>Lagos state ikeja</span>
                    </div>

                    <span>
                      hello Phone: 123-456-7890 Phone: 123-456-7890 Phone:
                      123-456-7890 Phone: 123-456-7890 Phone: 123-456-7890
                      Phone: 123-456-7890 Phone: 123-456-7890 Phone:
                      123-456-7890 Phone: 123-456-7890 Phone: 123-456-7890
                      Phone: 123-456-7890 Phone: 123-456-7890 Phone:
                      123-456-7890 Phone: 123-456-7890 Phone: 123-456-7890
                    </span>
                  </DropdownDiv>
                  <DropdownItem to="/about#team">Meet the Team</DropdownItem>
                  <DropdownItem to="/about#our-story">Our Story</DropdownItem>
                  <DropdownItem to="/about#values">Our Values</DropdownItem>
                </DropdownContent>
              )}

              {path === "/Contact" && (
                <DropdownContent>
                  <Detail>
                    <h3>Contact Information</h3>
                    <p>
                      <strong>Phone:</strong> +1 (917) 836-7151
                    </p>
                    <p>
                      <strong>Email:</strong> tobagoreads@yahoo.com
                    </p>
                    <p>
                      <strong>Office Address:</strong> 2300 Camp Oando nowway,
                      Cof 143 #1008 dollins Park, GA 34537, United States
                    </p>

                    <span>
                      Thank you for your generosity and commitment to our cause.
                      Whether you have a question, want to collaborate, or
                      simply wish to learn more, we’re here to assist you every
                      step of the way.
                    </span>
                  </Detail>

                  <SocialIcons>
                    <FooterLink
                      style={{ width: "auto" }}
                      href="https://www.facebook.com"
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
                    {/* <Link to="/Donate"> */}
                    <QuoteButton>Donate Now</QuoteButton>
                    {/* </Link> */}
                  </SocialIcons>
                </DropdownContent>
              )}
            </NavItem>
          ))}
          <Link to="/Donate">
            <QuoteButton>Donate Now</QuoteButton>
          </Link>
        </HeaderUl>

        <NavIcon onClick={toggleNav}>
          {showNav ? <IoClose /> : <IoMenuOutline />}
        </NavIcon>
      </Box>

      <SideNav show={showNav}>
        <Link to="/">
          <LogoImage
            src="https://res.cloudinary.com/dbcygr0pi/image/upload/v1737249931/img6_cfbqfk.jpg"
            loading="lazy"
            alt="Logo"
          />
        </Link>
        {["/", "/Projects", "/About", "/Contact"].map((path, index) => (
          <SideNavItem
            key={index}
            to={path}
            isActive={activeNav === path}
            onClick={() => setShowNav(false)}
          >
            {path === "/" ? "Home" : path.slice(1)}
          </SideNavItem>
        ))}
        <Link to="/donate">
          <QuoteButton>Donate Now</QuoteButton>
        </Link>
      </SideNav>
    </HeaderContainer>
  );
};

export default Header;
