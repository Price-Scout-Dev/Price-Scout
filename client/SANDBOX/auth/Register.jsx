import React from 'react';
import inputHook from '../hooks/inputHook';
import NavBar from '../nav/NavBar'

const Register = ({ setUser, postUser }) => {

  //GET THE USER INPUT SO WE CAN ISSUE A POST TO DB W/ postUser, AND THEN UPDATE APP STATE W/ setUser

  const [emailInput, updateEmail, resetEmail] = inputHook('');
  const [pwInput, updatePw, resetPw] = inputHook('');

  const formSubmit = e => {
    e.preventDefault();

    postUser(emailInput, pwInput);
    setUser(emailInput, pwInput);

    resetEmail();
    resetPw();
  };

  return (
    <div>
      <NavBar />
      <form onSubmit={formSubmit}>
        <h1>Register</h1>
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