import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../../store/session";
import './SignupForm.css';

function SignupFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(sessionActions.signup({ email, username, password }))
        .catch(async (res) => {
        let data;
        try {
          // .clone() essentially allows you to read the response body twice
          data = await res.clone().json();
        } catch {
          data = await res.text(); // Will hit this case if the server is down
        }
        if (data?.errors) setErrors(data.errors);
        else if (data) setErrors([data]);
        else setErrors([res.statusText]);
      });
    }
    return setErrors(['Confirm Password field must be the same as the Password field']);
  };

  return (
    <div id="signup-screen">
      <h1 className="title">Start your Tremolo journey here.</h1>
      <form className="signup-form" onSubmit={handleSubmit}>
        <ul id="signup-errors">
          {errors.map(error => <li key={error}>{error}</li>)}
        </ul>
        <br />
        <label className="input-field"
          htmlFor="email">
          Email:
        </label>
        <br />
          <input
            type="text"
            className="input-box"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        <br />
        <label className="input-field"
          htmlFor="username">
          Username:
        </label>
        <br />
          <input
            type="text"
            className="input-box"
            name="username"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        <br />
        <label className="input-field"
          htmlFor="password">
          Password:
        </label>
        <br />
          <input
            type="password"
            className="input-box"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        <br />
        <label className="input-field"
          htmlFor="password-confirm">
          Confirm Password:
        </label>
        <br />
          <input
            type="password"
            className="input-box"
            name="password-confirm"
            id="password-confirm"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        <br />
        <button type="submit" id="signup-button">Sign Up</button>
      </form>
    </div>
  );
}

export default SignupFormPage;