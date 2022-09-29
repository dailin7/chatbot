import React from "react";
import config from './config.js';
import MessageParser from './MessageParser.jsx';
import ActionProvider from './ActionProvider.jsx';
import Chatbot from "react-chatbot-kit";

const SupportWindow = () => {
  return (
    <div className="absolute bottom-1 right-1">
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  );
};
export default SupportWindow;