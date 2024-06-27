import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../config/firebase.js";
import { useNavigate } from "react-router-dom";

function LogInPage() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [username, setUsername] = useState(null);

  const navigate = useNavigate();

  const handleSignup = async (event) => {
    event.preventDefault();
    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      alert("Invalid Email");
      setEmail(null);
    }
    if (username.length > 10) {
      alert("Username must be between 1 to 10 characters");
      setUsername(null);
    }
    if (password.length < 8) {
      alert("Password must have at least 8 characters");
      setPassword(null);
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      console.log(user);
      console.log("User Signup Successfully");
      if (user) {
        navigate("/login");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="signup-container">
      <h1 className="title text-4xl text-center uppercase p-10">sign up</h1>
      <form
        className="signup-container flex flex-col items-center"
        onSubmit={handleSignup}
      >
        <label
          className="username text-2xl text-center uppercase p-5"
          htmlFor="username"
        >
          username
        </label>
        <input
          id="username"
          name="username"
          type="text"
          placeholder="username"
          onChange={(event) => setUsername(event.target.value)}
          required
        />
        <label
          className="email text-2xl text-center uppercase p-5"
          htmlFor="email"
        >
          email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="email"
          onChange={(event) => setEmail(event.target.value)}
          required
        />
        <label
          className="password text-2xl text-center uppercase p-5"
          htmlFor="password"
        >
          password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="password"
          onChange={(event) => setPassword(event.target.value)}
          required
        />
        <button className="signup-button text-2xl p-10" type="submit">
          submit
        </button>
      </form>
    </div>
  );
}

export default LogInPage;
