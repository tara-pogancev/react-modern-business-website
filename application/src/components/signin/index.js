import React from "react";
import {
  SigninContainer,
  SigninWrapper,
  SigninP,
  SigninInput,
} from "./SigninElements";
import { Button } from "../ButtonElements";

const Signin = () => {
  return (
    <SigninContainer>
      <SigninWrapper className="py-5 px-5">
        <div className="my-auto">
          <h3 className="center-align mb-5">Sign In to your Account</h3>
          <form>
            <SigninP>Email</SigninP>
            <SigninInput type="text" placeholder="Enter your email..." />
            <SigninP>Password</SigninP>
            <SigninInput type="password" placeholder="Enter your password..." />
            <Button className="mt-5 mb-3">Continue</Button>
          </form>
          <p className="center-align">
            Forgot your password? <a href="/">Reset here</a>
          </p>
        </div>
      </SigninWrapper>
    </SigninContainer>
  );
};

export default Signin;
