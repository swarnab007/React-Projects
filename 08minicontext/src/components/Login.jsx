import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";

const Login = () => {
  const [username, setUserName] = useState('');
  const [pass, setPass] = useState('');

  const {setUser} = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({username, pass});
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <input type="text"
        className="p-4 mt-5 outline-2 border-slate-600 w-1/3"
        placeholder="Username"
        value={username}
        onChange={(e) => setUserName(e.target.value)}
      />
      <input type="text"
        className="p-4 mt-5 outline-2 border-slate-600 w-1/3"
        placeholder="Password"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
      />
      <button
        className="px-4 py-2 bg-green-400 mt-5 text-lg hover:bg-green-900 text-white"
        onClick={handleSubmit}
      >
        Log in
      </button>
    </div>
  );
};

export default Login;
