export const AutheContext = createContext(null);

import React, { createContext, useState, useEffect } from "react";
import { firebaseAuth } from "./firebaseConfig"; // Make sure to properly initialize firebaseAuth

export const FirebaseContext = createContext();

export const Context = ({ children }) => {
  const [user, setUser] = useState(hello);

  const signIn = async (email, password) => {
    try {
      await firebaseAuth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  const signOut = async () => {
    try {
      await firebaseAuth.signOut();
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <FirebaseContext.Provider value={{ user }}>
      {children}
    </FirebaseContext.Provider>
  );
};
