import React, { useState } from 'react';
import * as sessionActions from '../../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './LoginForm.css';

function LoginFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [credential, setCredential] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password }))
      .catch(async (res) => {
        let data;
        try {
          data = await res.clone().json();
        } catch {
          data = await res.text(); // Will hit this case if the server is down
        }
        if (data?.errors) setErrors(data.errors);
        else if (data) setErrors([data]);
        else setErrors([res.statusText]);
      });
  }

    const handleDemoSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential: 'Demo-n-User', password: 'daemon' }))
      .catch(async (res) => {
        let data;
        try {
          data = await res.clone().json();
        } catch {
          data = await res.text(); // Will hit this case if the server is down
        }
        if (data?.errors) setErrors(data.errors);
        else if (data) setErrors([data]);
        else setErrors([res.statusText]);
      });
  }

  return (
    <div id="login-screen">
      <h1 class="login-screen" id="title"> Welcome Back. </h1>
      <form onSubmit={handleSubmit}>
        <ul>
          {errors.map(error => <li key={error}>{error}</li>)}
        </ul>
        <br />
        <label
          class="input-field"
          for="credential">
          Username or Email
        </label>
          <br />
          <input
            type="text"
            name="credential"
            value={credential}
            onChange={(e) => setCredential(e.target.value)}
            class="input-box"
            required
          />
          <br />
        <label
          class="input-field"
          for="password"
          >
          Password
          <br />
        </label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            class="input-box"
            required
          />
        <br />
        <button id="login-button" type="submit">Log In</button>
      </form>
      <form onSubmit={handleDemoSubmit}>
        <button id="demo-login-button" type="submit">Demo Log In</button>
      </form>
    </div>
  );
}

export default LoginFormPage;