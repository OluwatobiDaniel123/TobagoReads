import React, { useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import emailjs from "emailjs-com";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

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

const ContactSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 50px 20px;
  background: url("https://res.cloudinary.com/dbcygr0pi/image/upload/v1737226925/img5_tdn3lk.jpg")
    no-repeat center center;
  background-size: cover;
  color: #fff;
  animation: ${fadeIn} 1s ease-out;

  @media (max-width: 768px) {
    padding: 30px 15px;
  }
`;

const SectionOverlay = styled.div`
  background: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;

const HeroText = styled.div`
  margin-bottom: 2.5rem;

  h1 {
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 15px;
    text-transform: uppercase;
    letter-spacing: 2px;
    background: linear-gradient(90deg, #00d4ff, #007bff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
  }

  p {
    font-size: 1.25rem;
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.5;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2.5rem;
    }
  }
`;

const ContactContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  gap: 2rem;
`;

const ContactForm = styled.form`
  width: 100%;
  max-width: 500px;
  padding: 30px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  h2 {
    font-size: 2rem;
    color: #01326e;
    text-align: center;
    border-bottom: 2px solid #00c3ff;
    margin-bottom: 1.5rem;
    padding-bottom: 0.5rem;
  }

  input,
  textarea {
    width: 100%;
    padding: 1rem;
    font-size: 1rem;
    border-radius: 5px;
    border: 1px solid #ccc;
    background: #f9f9f9;
    transition: border-color 0.3s ease;
    color: #333;

    &:focus {
      outline: none;
      border-color: #00c3ff;
    }
  }

  textarea {
    resize: none;
    min-height: 120px;
  }
`;

const ContactButton = styled.button`
  background: linear-gradient(45deg, #007bff, #00d4ff);
  color: #fff;
  font-weight: 700;
  padding: 12px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }

  &:disabled {
    background: #aaa;
    cursor: not-allowed;
  }
`;

const StyledAlert = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  padding: 1rem 1.5rem;
  border-radius: 5px;
  color: ${(props) => (props.type === "success" ? "#155724" : "#721c24")};
  background-color: ${(props) =>
    props.type === "success" ? "#d4edda" : "#f8d7da"};
  border: 1px solid
    ${(props) => (props.type === "success" ? "#c3e6cb" : "#f5c6cb")};
  display: flex;
  align-items: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;

  svg {
    margin-right: 10px;
    font-size: 1.5rem;
  }

  button {
    background: none;
    border: none;
    font-size: 1.5rem;
    margin-left: 10px;
    cursor: pointer;
  }
`;

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [alertMessage, setAlertMessage] = useState(null);

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.sendForm(
        "service_qh08omd",
        "template_icla7gq",
        form.current,
        "uDj1nlX9BVEqunnYs"
      );
      setAlertMessage({
        type: "success",
        message: "Thank you! Your message has been sent successfully.",
      });
      form.current.reset();
    } catch (error) {
      console.error(error.text);
      setAlertMessage({
        type: "error",
        message: "Sorry, Network error.",
      });
    } finally {
      setLoading(false);

      setTimeout(() => setAlertMessage(null), 4000);
    }
  };

  return (
    <ContactSection>
      <SectionOverlay />
      <HeroText>
        <h1>We’re Here to Help</h1>
        <p>
          Do you have questions, suggestions, or want to support our cause?
          Reach out and let us know. Together, we can make a difference.
        </p>
      </HeroText>
      <ContactContainer>
        <ContactForm ref={form} onSubmit={sendEmail}>
          <h2>Contact Us</h2>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            placeholder="Write your message here..."
            required
          ></textarea>
          <ContactButton type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </ContactButton>
        </ContactForm>
        {alertMessage && (
          <StyledAlert type={alertMessage.type}>
            {alertMessage.type === "success" ? (
              <FaCheckCircle />
            ) : (
              <FaTimesCircle />
            )}
            {alertMessage.message}
            <button onClick={() => setAlertMessage(null)}>&times;</button>
          </StyledAlert>
        )}
      </ContactContainer>
    </ContactSection>
  );
};

export default Contact;
