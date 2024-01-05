import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("aqua");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap bottom-12 inset-x-0 justify-center p-3">
        <div className="flex flex-wrap justify-center gap-4 shadow-xl py-2 px-3 rounded-3xl bg-white">
          <button
            onClick={() => setColor("red")}
            className="outline-none px-4 py-1 text-white shadow-lg rounded-full"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            onClick={() => setColor("yellow")}
            className="outline-none px-4 py-1 text-black shadow-lg rounded-full"
            style={{ backgroundColor: "yellow" }}
          >
            Yellow
          </button>
          <button
            onClick={() => setColor("green")}
            className="outline-none px-4 py-1 text-white shadow-lg rounded-full"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
          <button
            onClick={() => setColor("blue")}
            className="outline-none px-4 py-1 text-white shadow-lg rounded-full"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>
          <button
            onClick={() => setColor("orange")}
            className="outline-none px-4 py-1 text-white shadow-lg rounded-full"
            style={{ backgroundColor: "orange" }}
          >
            Orange
          </button>
          <button
            onClick={() => setColor("gray")}
            className="outline-none px-4 py-1 text-black shadow-lg rounded-full"
            style={{ backgroundColor: "gray" }}
          >
            Gray
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
