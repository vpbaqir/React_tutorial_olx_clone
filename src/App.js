import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import "./App.css";
import { AutheContext } from "./store/Context";

/**
 * ?  =====Import Components=====
 */
import Home from "./Pages/Home";

function App() {
  const { user } = useContext(AutheContext);
  useEffect(() => {
    console.log(user);
  }, [user]);
  return (
    <div>
      <Router>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Router>
    </div>
  );
}

export default App;
