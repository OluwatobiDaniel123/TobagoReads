import services from "./Services"; // Assuming services is imported from another file

class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    const lowerCaseMessage = message.toLowerCase();

    // Check if the message matches any service
    const matchedService = services.find((service) =>
      lowerCaseMessage.includes(service.toLowerCase())
    );

    if (matchedService) {
      this.actionProvider.handleServiceRequest(matchedService);
    } else if (lowerCaseMessage.includes("hello")) {
      this.actionProvider.handleHello();
    } else {
      this.actionProvider.handleDefault();
    }
  }
}

export default MessageParser;
