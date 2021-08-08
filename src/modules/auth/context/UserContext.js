import React, { useState, useEffect } from "react";

const context = React.createContext();

export default function UserContextProvider({ children }) {
  let [user, setUser] = useState(null);
  let [token, setToken] = useState(null);

  let login = (token) => {
    //send a fetch to api/User/Info
  };
  let logout = () => {};

  useEffect(() => {
    //Get token from localstorage, validate it
  }, [user]);

  return <>{children}</>;
}
