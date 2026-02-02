import { useMessage } from "../context/MessageContext";
import GrandChild from "./GrandChild";

export default function Child() {
  const message = useMessage();
  return (
    <div style={{ border: "solid blue" }}>
      <h1>Child</h1>
      <h3>{message}</h3>
      <GrandChild />
    </div>
  );
}
