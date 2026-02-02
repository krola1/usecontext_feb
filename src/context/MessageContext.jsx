/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext } from "react";
import { useState } from "react";

/// initialize context
const MessageContext = createContext();

//hook to reduce imports
export const useMessage = () => {
  return useContext(MessageContext);
};

// provider
export const MessageProvider = ({ children }) => {
  const [message, setMessage] = useState("halla");

  const providerObj = {
    message,
    setMessage,
  };

  return (
    <MessageContext.Provider value={providerObj}>
      {children}
    </MessageContext.Provider>
  );
};
