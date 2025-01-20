class ActionProvider {
  constructor(createChatbotMessage, setStateFunc) {
    this.createChatbotMessage = createChatbotMessage;
    this.setState = setStateFunc;
  }

  handleHello = () => {
    const message = this.createChatbotMessage(
      "Hello! How can I assist you today? You can choose from the following services:"
    );
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));

    // Suggest services to the user
    this.suggestServices();
  };

  suggestServices = () => {
    const message = this.createChatbotMessage(
      "Here are some services I can help you with: \n1. Brand New Website \n2. Redesign Current Website \n3. SEO \n4. Google Ads & Shopping \n5. Logo Design \n6. Website Maintenance & Hosting \n... and more. Please choose a service by typing it."
    );
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };

  handleServiceRequest = (service) => {
    const message = this.createChatbotMessage(
      `You selected: ${service}. Let's get started on that! Could you provide some more details?`
    );
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };

  handleDefault = () => {
    const message = this.createChatbotMessage(
      "I'm sorry, I didn't understand that. Could you pick a service from the list?"
    );
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };
}

export default ActionProvider;
