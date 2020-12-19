import React from 'react';
import inputHook from '../hooks/inputHook';
import NavBar from '../nav/NavBar'

const Register = ({ setUser, getUser }) => {

  //GET THE USER INPUT SO WE CAN ISSUE A "GET" TO DB W/ getUser, AND THEN UPDATE APP STATE W/ setUser

  const [emailInput, updateEmail, resetEmail] = inputHook('');
  const [pwInput, updatePw, resetPw] = inputHook('');

  const formSubmit = e => {
    e.preventDefault();

    getUser(emailInput, pwInput);
    setUser(emailInput, pwInput);

    resetEmail();
    resetPw();
  };

  return (
    <div>
      <NavBar />
      <form onSubmit={formSubmit}>
        <h1>Login</h1>
        <input
          value={emailInput}
          onChange={updateEmail}
          placeholder='email'
        />
        <input
          type='password'
          value={pwInput}
          onChange={updatePw}
          placeholder='password'
        />
      </form>
    </div>
  );
};

export default Register;