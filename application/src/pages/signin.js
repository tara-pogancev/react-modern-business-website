import React, { useState } from "react";
import Footer from "../components/footer";
import Signin from "../components/signin";
import { Navbar } from "./../components/navbar";
import { Sidebar } from "./../components/sidebar";

const SigninPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Signin />
      <Footer />
    </>
  );
};

export default SigninPage;
