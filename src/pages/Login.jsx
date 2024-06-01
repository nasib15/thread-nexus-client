import React, { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {
  const { signInUser, googleSignIn, githubSignIn } = useContext(AuthContext);
  const [loginError, setLoginError] = useState(null);

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const pass = form.pass.value;

    // Sign in user
    signInUser(email, pass)
      .then(() => {
        toast.success("User logged in successfully");
        return;
      })
      .catch((error) => {
        setLoginError(error.message);
        toast.error(loginError);
        return;
      });
  };

  // Google Sign in
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(() => {
        toast.success("User logged in successfully");
        return;
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // Github Sign in
  const handleGithubSignIn = () => {
    githubSignIn()
      .then(() => {
        toast.success("User logged in successfully");
        return;
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return <div></div>;
};

export default Login;
