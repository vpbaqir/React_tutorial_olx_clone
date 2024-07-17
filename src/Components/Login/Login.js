import React, { useContext, useState } from "react";
import { FirebaseContext } from "../../store/FirebaseContext";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom"; // Import Link for navigation

import Logo from "../../olx-logo.png";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);

  const handleLogin = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        history.push("/"); // Navigate to homepage after successful login
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo} alt="Logo" />
        <form onSubmit={handleLogin}>
          <label htmlFor="email">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="email"
            name="email"
            value={email} // Bind value to state variable
            onChange={(e) => setEmail(e.target.value)} // Update state on change
          />
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="password"
            name="password"
            value={password} // Bind value to state variable
            onChange={(e) => setPassword(e.target.value)} // Update state on change
          />
          <br />
          <br />
          <button type="submit">Login</button>
        </form>
        <Link to="/signup">Signup</Link> {/* Use Link for navigation */}
      </div>
    </div>
  );
}

export default Login;
