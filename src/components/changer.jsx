import React, { useState } from "react";
import "../App.css";

export default function Changer() {
  const colors = [
    "#D3E4CD",
    "#99A799",
    "#F2DDC1",
    "#E2C2B9",
    "#C37B89",
    "#D1E8E4",
    "#BCCC9A",
    "#BFA2DB",
    "#AEE1E1",
    "#E8E46E",
  ];
  const [colorName, setColorName] = useState("");

  const handleClick = (event, id) => {
    const mainBg = colors[id];
    setColorName(mainBg);
  };

  return (
    <main className="card" style={{ backgroundColor: colorName }}>
      <header className="App-header" style={{ fontWeight: "bold" }}>
        {colorName !== "" ? `Color Code: ${colorName}` : "Choose Color"}
      </header>
      <ul>
        <li>
          {colors.map((color, id) => (
            <span
              key={id}
              style={{
                backgroundColor: color,
                borderColor: color === colorName ? "#16C79A" : "white",
              }}
              className="circle"
              onClick={(event) => handleClick(event, id)}
            ></span>
          ))}
        </li>
      </ul>
    </main>
  );
}
