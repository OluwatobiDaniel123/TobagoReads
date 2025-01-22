import React, { useState } from "react";
import styled from "styled-components";
import PaystackPop from "@paystack/inline-js";

const DonateContainer = styled.div`
  align-items: center;
  text-align: center;
  padding: 60px 30px;
  background: url("https://res.cloudinary.com/dbcygr0pi/image/upload/v1737382927/vecteezy_woman-holding-red-heart-love-health-insurance-donation_16652611_njmc2u.jpg")
    no-repeat center center;
  background-size: cover;
  color: #fff;
`;
const FormContainer = styled.div`
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  background: linear-gradient(135deg, #e3f2fd, #ffffff);
  border-radius: 10px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 20px;
  color: #007bff;
`;

const Subtitle = styled.p`
  font-size: 1.1rem;
  margin-bottom: 30px;
  color: #555;
`;

const InputGroup = styled.div`
  margin-bottom: 20px;
  text-align: left;

  label {
    display: block;
    margin-bottom: 8px;
    font-size: 1rem;
    color: #333;
  }

  input,
  select {
    width: 100%;
    padding: 12px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 1rem;
    color: #333;
    background-color: #f9f9f9;

    &:focus {
      outline: none;
      border-color: #007bff;
      box-shadow: 0 0 4px rgba(0, 123, 255, 0.5);
    }
  }
`;

const RadioGroup = styled.div`
  margin-bottom: 20px;
  text-align: left;

  label {
    font-size: 1rem;
    color: #555;
    margin-right: 20px;
    cursor: pointer;

    input {
      margin-right: 10px;
    }
  }
`;

const DonateButton = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 15px 20px;
  border: none;
  border-radius: 50px;
  font-size: 1.2rem;
  cursor: pointer;
  text-transform: uppercase;
  width: 100%;
  font-weight: bold;
  transition: all 0.3s ease;

  &:hover {
    background-color: #0056b3;
    box-shadow: 0 4px 15px rgba(0, 91, 187, 0.3);
  }
`;

const SuccessMessage = styled.div`
  margin-top: 20px;
  padding: 15px;
  background-color: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: bold;
`;

const DonationForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    amount: "25",
    frequency: "One-Time",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const paystack = new PaystackPop();

    paystack.newTransaction({
      key: "pk_test_39c77ec63722966d5894708cc17252166da01be9",
      amount: formData.amount * 100,
      name: formData.fullName,
      email: formData.email,

      onSuccess(transaction) {
        console.log(transaction);
        setIsSubmitted(true);

        setFormData({ amount: "", fullName: "", email: "" });
      },

      onCancel() {
        console.log("You canceled the transaction.");
      },
    });
  };

  return (
    <DonateContainer>
      <FormContainer>
        <Title>Donate Now</Title>
        <Subtitle>
          Your generosity makes a difference in someone's life.
        </Subtitle>
        <form onSubmit={handleSubmit}>
          <InputGroup>
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
            />
          </InputGroup>
          <InputGroup>
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </InputGroup>
          <InputGroup>
            <label htmlFor="amount">Donation Amount</label>
            <select
              id="amount"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
            >
              <option value="10">$10</option>
              <option value="25">$25</option>
              <option value="50">$50</option>
              <option value="100">$100</option>
              <option value="250">$250</option>
              <option value="500">$500</option>
            </select>
          </InputGroup>
          <RadioGroup>
            <label>
              <input
                type="radio"
                name="frequency"
                value="One-Time"
                checked={formData.frequency === "One-Time"}
                onChange={handleChange}
              />
              One-Time
            </label>
            <label>
              <input
                type="radio"
                name="frequency"
                value="Monthly"
                checked={formData.frequency === "Monthly"}
                onChange={handleChange}
              />
              Monthly
            </label>
          </RadioGroup>
          <DonateButton type="submit">Donate</DonateButton>
        </form>
        {isSubmitted && (
          <SuccessMessage>
            Thank you, {formData.fullName}, for your donation of $
            {formData.amount}!
          </SuccessMessage>
        )}
      </FormContainer>
    </DonateContainer>
  );
};

export default DonationForm;
