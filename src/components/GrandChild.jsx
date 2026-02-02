import { useMessage } from "../context/MessageContext";
import { useTheme } from "../context/ThemeContext";

export default function GrandChild() {
  const { message } = useMessage();
  const { theme } = useTheme();

  return (
    <div style={{ border: "solid red" }}>
      <h1 className={theme}>GrandChild</h1>
      <h3>message: {message} </h3>
    </div>
  );
}
