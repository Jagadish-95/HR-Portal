// pages/SignupPage.js
import React from 'react';

const SignupPage = () => {
  return (
    <main>
      <h1>Sign Up</h1>
      <form>
        <label>
          Username:
          <input type="text" name="username" />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" />
        </label>
        <br />
        <button type="submit">Sign Up</button>
      </form>
    </main>
  );
};

export default SignupPage;
