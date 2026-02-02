import "./App.css";

import Parent from "./components/Parent";
import { useTheme } from "./context/ThemeContext";

function App() {
  const { toggleTheme } = useTheme();
  //state
  return (
    <>
      <button onClick={toggleTheme}>Toogle theme</button>
      <Parent />
    </>
  );
}

export default App;
