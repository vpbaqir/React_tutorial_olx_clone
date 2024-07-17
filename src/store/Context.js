export const AutheContext = createContext(null);
import { firebaseConfig } from "../firebase/config";
import React, { createContext, useState } from "react";
import { firebaseAuth } from "../"; // Make sure to properly initialize firebaseAuth
export const FirebaseContext = createContext();

export default Context = ({ children }) => {
  const [user, setUser] = useState("hello");

  return (
    <FirebaseContext.Provider value={{ user }}>
      {children}
    </FirebaseContext.Provider>
  );
};
