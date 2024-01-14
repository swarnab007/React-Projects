import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`";

    for (let i = 1; i <= length; i++) {
      let p = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(p);
    }

    setPassword(pass);
  }, [length, numAllowed, charAllowed, setPassword]);

  // copy feature
  const passwordRef = useRef(null);

  const copyPassword = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numAllowed, charAllowed, passwordGenerator]);

  return (
    <>
      <div
        className="bg-gray-800 max-w-md text-blue-500 w-full shadow-lg p-4 
       mx-auto my-8 rounded-xl"
      >
        <h1 className="text-3xl text-center mb-8">Password Generator</h1>
        <div className="flex shadow-lg rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="w-full text-xl px-3 py-1.5 text-orange-800"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPassword}
            className="bg-blue-500 text-white py-2 px-4 text-xl shrink-0 hover:bg-blue-900 "
          >
            copy
          </button>
        </div>
        <div className="flex text-sm gap-x-3">
          <div className="flex gap-x-2 items-center">
            <input
              type="range"
              id="length"
              value={length}
              min={6}
              max={70}
              className="cursor-pointer"
              onChange={(e) => setLength(e.target.value)}
            />
            <label htmlFor="label">Length({length})</label>
          </div>
          <div className="flex gap-x-2">
            <input
              type="checkbox"
              id="numAllowed"
              defaultChecked={numAllowed}
              onChange={() => {
                setNumAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="Noinput">Number</label>
            <input
              type="checkbox"
              id="charAllowed"
              defaultChecked={charAllowed}
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="charinput">Character</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
