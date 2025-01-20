import React, { useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import emailjs from "emailjs-com";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const Container = styled.div`
  padding: 40px;
  background: #f4f4f4;
`;

const Form = styled.form`
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  font-size: 28px;
  color: #333;
  border-bottom: 2px solid rgb(0, 195, 255);
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const CheckboxContainer = styled.div`
  margin: 10px 0;
`;

const CheckboxLabel = styled.label`
  display: block;
  margin: 5px 0;
`;

const BudgetContainer = styled.div`
  margin: 10px 0;
`;

const Button = styled.button`
  background: linear-gradient(45deg, #007bff, #00d4ff);
  color: white;
  width: 100%;

  padding: 10px 20px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.04);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }
`;

const slideIn = keyframes`
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideOut = keyframes`
  0% {
    transform: translateX(0);
    opacity: 1;
  }
  100% {
    transform: translateX(100%);
    opacity: 0;
  }
`;

// const StyledAlert = styled.div`
//   position: fixed;
//   top: 20px;
//   right: 20px;
//   background-color: ${(props) =>
//     props.type === "success" ? "#d4edda" : "#f8d7da"};
//   color: ${(props) => (props.type === "success" ? "#155724" : "#721c24")};
//   border: 1px solid
//     ${(props) => (props.type === "success" ? "#c3e6cb" : "#f5c6cb")};
//   border-radius: 5px;
//   padding: 0.6rem 0.6rem;
//   display: flex;
//   align-items: center;
//   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//   animation: ${(props) => (props.animateOut ? slideOut : slideIn)} 0.5s ease;
//   z-index: 1000;

//   svg {
//     margin-right: 10px;
//     font-size: 1.5rem;
//   }

//   button {
//     background: none;
//     border: none;
//     color: ${(props) => (props.type === "success" ? "#155724" : "#721c24")};
//     font-size: 1.9rem;
//     margin-left: 15px;
//     cursor: pointer;
//   }
// `;
const StyledAlert = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  background-color: ${(props) =>
    props.type === "success" ? "#e3fcec" : "#ffe8e8"};
  color: ${(props) => (props.type === "success" ? "#2e7d32" : "#d32f2f")};
  border: 1px solid
    ${(props) => (props.type === "success" ? "#a5d6a7" : "#ef9a9a")};
  border-radius: 8px;
  padding: 0.8rem 1rem;
  display: flex;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  animation: ${(props) => (props.animateOut ? slideOut : slideIn)} 0.5s ease;
  z-index: 1000;

  svg {
    margin-right: 10px;
    font-size: 1.5rem;
  }

  button {
    background: none;
    border: none;
    color: ${(props) => (props.type === "success" ? "#2e7d32" : "#d32f2f")};
    font-size: 1.5rem;
    margin-left: 15px;
    cursor: pointer;
    transition: transform 0.2s ease;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

const QuickForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    whatsapp: "",
    businessName: "",
    websiteUrl: "",
    helpWith: [],
    comments: "",
    budget: "",
    referral: "",
  });

  const form = useRef();
  const [loading, setLoading] = useState(false);

  const [alertMessage, setAlertMessage] = useState(null);
  const [animateOut, setAnimateOut] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        helpWith: checked
          ? [...prev.helpWith, value]
          : prev.helpWith.filter((item) => item !== value),
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await emailjs.sendForm(
        "service_qh08omd",
        "template_icla7gq",
        form.current,
        "uDj1nlX9BVEqunnYs"
      );
      console.log(result.text);
      setAlertMessage({
        type: "success",
        message: "Quote sent successfully!",
      });
      form.current.reset();
    } catch (error) {
      console.error(error.text);
      setAlertMessage({ type: "error", message: "Failed to send Quote" });
    } finally {
      setLoading(false);
      setTimeout(() => {
        // setAnimateOut(true);
        setTimeout(() => setAlertMessage(null), 300);
      }, 3000);
    }
  };

  return (
    <Container>
      <Title>Request a Quote</Title>
      <Form ref={form} onSubmit={handleSubmit}>
        <Input
          type="text"
          name="fullName"
          placeholder="Enter your Full Name"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
        <Input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <Input
          type="tel"
          name="whatsapp"
          placeholder="WhatsApp Number"
          value={formData.whatsapp}
          onChange={handleChange}
        />

        <CheckboxContainer>
          <h4>What do you need help with?</h4>
          {[
            "I need a brand New Website",
            "I want to redesign my current website",
            "I want my website on Google First Page (SEO)",
            "I want to setup online store",
            "I want to run Google Ads & Google Shopping",
            "I need a new Logo Design",
            "Point of Sale Software",
            "Affiliate Marketing System",
            "Inventory Software",
            "Investment Website",
            "Social & Digital Marketing",
            "I need help with Website Maintenance and Hosting",
            "Mobile & Web Apps",
            "Other (Specify below)",
          ].map((item) => (
            <CheckboxLabel key={item}>
              <input
                type="checkbox"
                value={item}
                checked={formData.helpWith.includes(item)}
                onChange={handleChange}
              />
              {item}
            </CheckboxLabel>
          ))}
        </CheckboxContainer>

        <TextArea
          name="comments"
          placeholder="Comment other things you need help with"
          value={formData.comments}
          onChange={handleChange}
        />

        <BudgetContainer>
          <h4>Your Budget</h4>
          {[
            "$0 - $450",
            "$500 - $1,000",
            "$1,000 - $2,000",
            "$2,000 - $5,000",
            "$5,000 - $10,000",
            "$20,000 - $50,000",
            "Don't have a budget",
          ].map((item) => (
            <CheckboxLabel key={item}>
              <input
                type="radio"
                name="budget"
                value={item}
                checked={formData.budget === item}
                onChange={handleChange}
              />
              {item}
            </CheckboxLabel>
          ))}
        </BudgetContainer>

        <Input
          type="text"
          name="referral"
          placeholder="How did you hear from us?"
          value={formData.referral}
          onChange={handleChange}
        />

        <Button type="submit" disabled={loading}>
          {loading ? "Sending..." : " GET FREE QUOTE"}
        </Button>
      </Form>

      {alertMessage && (
        <StyledAlert type={alertMessage.type} animateOut={animateOut}>
          {alertMessage.type === "success" ? (
            <FaCheckCircle />
          ) : (
            <FaTimesCircle />
          )}
          {alertMessage.message}
          <button onClick={() => setAlertMessage(null)}>&times;</button>
        </StyledAlert>
      )}
    </Container>
  );
};

export default QuickForm;
