import React, { useState } from "react";
import UserContext from "./UserContext";

// create context provider
const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    // passing values to children
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
