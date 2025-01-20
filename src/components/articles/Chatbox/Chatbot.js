import React, { useState } from "react";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import config from "./Config";
import ActionProvider from "./ActionProvider";
import MessageParser from "./MessageParser";

const Chatbox = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChatbot = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div>
      {/* Toggle Button */}
      <button
        onClick={toggleChatbot}
        style={{
          position: "fixed",
          bottom: "10px",
          right: "10px",
          zIndex: 1000,
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "50%",
          width: "60px",
          height: "60px",
          cursor: "pointer",
          fontSize: "24px",
        }}
      >
        {isOpen ? "×" : "💬"}
      </button>

      {/* Chatbot */}
      {isOpen && (
        <div
          style={{
            position: "fixed",
            bottom: "80px",
            right: "10px",
            maxHeight: "500px",
            backgroundColor: "white",
            borderRadius: "10px",
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
            overflow: "hidden",
            zIndex: 999,
          }}
        >
          <Chatbot
            config={config}
            actionProvider={ActionProvider}
            messageParser={MessageParser}
          />
        </div>
      )}
    </div>
  );
};

export default Chatbox;
