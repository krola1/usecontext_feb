import Child from "./Child";

export default function Parent() {
  return (
    <div style={{ border: "solid green" }}>
      <h1>Parent</h1>
      <Child />
    </div>
  );
}
