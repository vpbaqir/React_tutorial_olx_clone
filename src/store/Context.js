import React, { createContext, useState } from "react";
import { firebaseConfig, FirebaseAuth } from "../firebase/Config"; // Ensure this path and case is correct

export const AutheContext = createContext(null);
export const FirebaseContext = createContext(null);

const Context = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <FirebaseContext.Provider value={{ FirebaseAuth, firebaseConfig }}>
      <AutheContext.Provider value={{ user, setUser }}>
        {children}
      </AutheContext.Provider>
    </FirebaseContext.Provider>
  );
};
export { firebaseConfig, FirebaseAuth };
export default Context;
