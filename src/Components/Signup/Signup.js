import React, { useState, useContext } from "react";
import Logo from "../../olx-logo.png";
import { useHistory } from "react-router-dom"; // Import useHistory
import "./Signup.css";
import { FirebaseContext } from "../../store/FirebaseContext";

export default function Signup() {
  const [Username, setUsername] = useState("");
  const [Email, setEmail] = useState("");
  const [Phone, setPhone] = useState("");
  const [Password, setPassword] = useState("");
  const { firebase } = useContext(FirebaseContext);
  const history = useHistory(); // Initialize useHistory hook

  const handleSubmit = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(Email, Password)
      .then((result) => {
        result.user.updateProfile({ displayName: Username }).then(() => {
          firebase
            .firestore()
            .collection("users")
            .add({
              username: Username,
              phone: Phone,
              email: Email,
              uid: result.user.uid,
              password: Password,
            })
            .then(() => {
              history.push("/login"); // Use history for navigation
            });
        });
      });
  };

  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo} alt="Logo" />
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            value={Username}
            onChange={(e) => setUsername(e.target.value)}
            id="fname"
            name="name"
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
            id="fname"
            name="email"
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            value={Phone}
            onChange={(e) => setPhone(e.target.value)}
            id="lname"
            name="phone"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
            id="lname"
            name="password"
          />
          <br />
          <br />
          <button type="submit">Signup</button>
        </form>
        <a href="/login">Login</a>
      </div>
    </div>
  );
}
