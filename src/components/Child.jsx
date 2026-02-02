import { useMessage } from "../context/MessageContext";
import { useTheme } from "../context/ThemeContext";
import GrandChild from "./GrandChild";

export default function Child() {
  const { message, setMessage } = useMessage();
  const { theme } = useTheme();

  if (theme === "blue") return <h1>Blåååååå</h1>;

  return (
    <div style={{ border: "solid blue" }}>
      <h1 className={theme}>Child</h1>
      <h3 onClick={() => setMessage("hei på deg")}>{message}</h3>
      <GrandChild />
    </div>
  );
}
