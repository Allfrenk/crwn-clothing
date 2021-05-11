import React, { useState } from "react";
import { connect } from "react-redux";

import "./sign-in.style.scss";
import CustonButton from "../custom-button/custom-button.component";

import {
  googleSignInStart,
  emailSignInStart,
} from "../../redux/user/user.action";

import FormInput from "../form-input/form-input.component";

/////////////////////////////////////////////////////////////////
// HOOKS IN UN FUNCTIONAL COMPONENT //
const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  // SETTA LO STATE DESTRUTTURANDO USECREDENTIAL
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });
  const { email, password } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();
    emailSignInStart(email, password);
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className="sign-in">
      <h2>I have already an account</h2>
      <span>Sign in with your email and passworld</span>

      <form onClick={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          value={email}
          handleChange={handleChange}
          label="email"
          required
        />
        <FormInput
          name="password"
          type="password"
          value={password}
          handleChange={handleChange}
          label="password"
          required
        />
        <div className="buttons">
          <CustonButton type="submit">SIGN IN</CustonButton>
          <CustonButton
            type="button"
            onClick={googleSignInStart}
            isGoogleSignIn="true"
          >
            Sign in with Google
          </CustonButton>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
