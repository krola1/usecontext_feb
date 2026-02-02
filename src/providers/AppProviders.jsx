import { MessageProvider } from "../context/MessageContext";
import { ThemeProvider } from "../context/ThemeContext";
export default function AppProviders({ children }) {
  return (
    <MessageProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </MessageProvider>
  );
}
