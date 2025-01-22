import React from "react";
import styled from "styled-components";
import emailjs from "emailjs-com";
import { useRef, useState } from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const ContactPage = () => {
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
        message: "Sorry, there was an issue sending your message.",
      });
    } finally {
      setLoading(false);

      setTimeout(() => setAlertMessage(null), 4000);
    }
  };

  return (
    <ContactSection>
      <Container>
        <Header>
          <Title>Connect with Us and Make an Impact</Title>
          <Subtitle>
            Thank you for your generosity and commitment to our cause. Whether
            you have a question, want to collaborate, or simply wish to learn
            more, we’re here to assist you every step of the way.
          </Subtitle>
        </Header>

        <ContactDetails>
          <Detail>
            <h3>Contact Information</h3>
            <p>
              <strong>Phone:</strong> +1 (917) 836-7151
            </p>
            <p>
              <strong>Email:</strong> tobagoreads@yahoo.com
            </p>
            <p>
              <strong>Office Address:</strong> 2300 Camp Oando nowway, Cof 143
              #1008 dollins Park, GA 34537, United States
            </p>
          </Detail>

          <Detail>
            <h3>Connect on Social Media</h3>
            <SocialLinks>
              <a href="#">Facebook</a>
              <a href="#">Twitter</a>
              <a href="#">Instagram</a>
              <a href="#">LinkedIn</a>
            </SocialLinks>
          </Detail>
        </ContactDetails>

        <ContactForm>
          <h3>Get in Touch</h3>
          <p>
            We value every message and will respond promptly to your inquiry.
          </p>
          <Form ref={form} onSubmit={sendEmail}>
            <Input type="text" name="name" placeholder="Full Name" required />
            <Input
              type="email"
              name="email"
              placeholder="Email Address"
              required
            />
            <Textarea
              placeholder="Your Message"
              name="message"
              rows="6"
              required
            ></Textarea>
            <Button type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </Button>
          </Form>
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
        <QuoteSection>
          <Quote>
            "Your kindness and support fuel the hope and joy of countless lives.
            Together, we make the impossible, possible."
          </Quote>
          <Cite>– A Grateful Recipient</Cite>
        </QuoteSection>
      </Container>
    </ContactSection>
  );
};

export default ContactPage;

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

const ContactSection = styled.section`
  //   background: linear-gradient(135deg, #f7f9fc, #eef2f7);
  background: linear-gradient(135deg, #1e3c72, #2a5298);
  padding: 80px 20px;
  color: #333;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

const Header = styled.div`
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 15px;
  text-transform: uppercase;
  letter-spacing: 2px;
  background: linear-gradient(90deg, #00d4ff, #007bff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.8);
  max-width: 800px;
  margin: 0 auto;
`;

const ContactDetails = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
    align-items: start;
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
    color: rgba(255, 255, 255, 0.8);

    font-size: 1rem;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  a {
    color: rgba(255, 255, 255, 0.8);

    text-decoration: none;
    font-weight: bold;
    transition: color 0.3s ease;

    &:hover {
      color: darkblue;
    }
  }
`;

const ContactForm = styled.div`
  background: #fff;
  padding: 50px;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  text-align: center;

  h3 {
    margin-bottom: 15px;
    font-size: 2rem;
    color: #2c3e50;
  }

  p {
    margin-bottom: 30px;
    color: #777;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Input = styled.input`
  padding: 15px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #3498db;
  }
`;

const Textarea = styled.textarea`
  padding: 15px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #3498db;
  }
`;

const Button = styled.button`
  padding: 15px 30px;
  background: #3498db;
  color: #fff;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #2c3e50;
  }
`;

const QuoteSection = styled.div`
  text-align: center;
  font-style: italic;
  color: #555;
  padding: 20px;
  background: #eef2f7;
  border-radius: 10px;
`;

const Quote = styled.p`
  font-size: 1.3rem;
  margin-bottom: 10px;
  color: #333;
`;

const Cite = styled.cite`
  font-size: 1.1rem;
  color: #888;
`;
