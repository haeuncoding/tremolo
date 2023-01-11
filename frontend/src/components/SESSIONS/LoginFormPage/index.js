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
    return dispatch(sessionActions.login({ credential: 'Daemo', password: 'daemon' }))
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

  const handleDemoTwoSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential: 'Starby', password: 'starby' }))
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

  const handleDemoThreeSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential: 'Koel Jorte', password: 'chiseblass' }))
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
      <h1 className="login-screen" id="title"> Welcome Back. </h1>
      <form onSubmit={handleSubmit}>
        <ul>
          {errors.map(error => <li key={error}>{error}</li>)}
        </ul>
        <br />
        <label
          className="input-field"
          htmlFor="credential">
          Username or Email
        </label>
          <br />
          <input
            type="text"
            name="credential"
            value={credential}
            onChange={(e) => setCredential(e.target.value)}
            className="input-box"
            required
          />
          <br />
        <label
          className="input-field"
          htmlFor="password"
          >
          Password
          <br />
        </label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-box"
            required
          />
        <br />
        <button id="login-button" type="submit">Log In</button>
      </form>
      <form onSubmit={handleDemoSubmit}>
        <button id="demo-login-button" type="submit">D(a)emo Log In</button>
      </form>
      <form onSubmit={handleDemoTwoSubmit}>
        <button id="demo-login-button" type="submit">Starby Log In (Demo)</button>
      </form>
      <form onSubmit={handleDemoThreeSubmit}>
        <button id="demo-login-button" type="submit">Koel Jorte Log In (Demo)</button>
      </form>
    </div>
  );
}

export default LoginFormPage;