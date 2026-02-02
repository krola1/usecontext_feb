import { useTheme } from "../context/ThemeContext";
import Child from "./Child";

export default function Parent() {
  const { theme } = useTheme();
  return (
    <div style={{ border: "solid green" }}>
      <h1 className={theme}>Parent</h1>
      <Child />
    </div>
  );
}
