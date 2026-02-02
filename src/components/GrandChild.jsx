import { useMessage } from "../context/MessageContext";

export default function GrandChild() {
  const message = useMessage();
  return (
    <div style={{ border: "solid red" }}>
      <h1>GrandChild</h1>
      <h3>message: {message} </h3>
    </div>
  );
}
