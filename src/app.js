import React from "react";
import Nav from "./components/Nav.js";
import Body from "./components/Body.js";
import data from "./data";

console.log(data.imageUrl);

export default function App() {
  const loc = data.map((item) => {
    return <Body key={item.id} item={item} />;
  });
  return (
    <div>
      <Nav />
      {loc}
    </div>
  );
}
