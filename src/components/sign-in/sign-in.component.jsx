import React from "react";

import "./sign-in.style.scss";
import CustonButton from "../custom-button/custom-button.component";

import { auth, signInWithGoogle } from "../../firebase/firebese.utils.js";

import FormInput from "../form-input/form-input.component";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = (e) => {
    const { value, name } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I have already an account</h2>
        <span>Sign in with your email and passworld</span>

        <form onClick={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            handleChange={this.handleChange}
            label="email"
            required
          />
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="password"
            required
          />
          <div className="buttons">
            <CustonButton type="submit">SIGN IN</CustonButton>
            <CustonButton
              type="button"
              onClick={signInWithGoogle}
              isGoogleSignIn="true"
            >
              Sign in with Google
            </CustonButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
