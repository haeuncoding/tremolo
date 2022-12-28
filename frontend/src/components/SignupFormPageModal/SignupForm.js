import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
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
      <h1 id="title">Welcome to Tremolo.</h1>
    <form onSubmit={handleSubmit}>
      <ul>
        {errors.map(error => <li key={error}>{error}</li>)}
      </ul>
      <label class="input-field" for="email">
        Email:
      </label>
      <br />
        <input
          name="email"
          id="email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          class="input-box"
          required
        />
      <br />
      <label class="input-field" for="username">
        Username:
      </label>
      <br />
      <input
        name="username"
        id="username"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        class="input-box"
        required
      />
      <br />
      <label class="input-field" for="password">
        Password:
      </label>
      <br />
        <input
          name="password"
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          class="input-box"
          required
        />
      <br />
      <label class="input-field">
        Confirm Password:
      </label>
      <br />
        <input
          name="confirm-password"
          id="confirm-password"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          class="input-box"
          required
        />
      <br />
      <button id="submit" type="submit" class="sign-up-button">Sign Up</button>
    </form>
    </div>
  );
}

export default SignupFormPage;