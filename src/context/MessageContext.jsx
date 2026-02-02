/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext } from "react";

const MessageContext = createContext();

export const useMessage = () => {
  return useContext(MessageContext);
};

export const MessageProvider = ({ children }) => {
  const messeage = "hei på dei";

  return (
    <MessageContext.Provider value={messeage}>
      {children}
    </MessageContext.Provider>
  );
};
