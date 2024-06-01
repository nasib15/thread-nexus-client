import React, { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import toast from "react-hot-toast";

const Register = () => {
  const { createUser, updateProfileName } = useContext(AuthContext);
  const [registerError, setRegisterError] = useState(null);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const pass = form.pass.value;
    const name = form.name.value;
    const image = form.image.value;

    // Create user
    createUser(email, pass)
      .then(() => {
        // Update user profile
        updateProfileName(name, image);
        toast.success("User registered successfully");
      })
      .catch((error) => {
        setRegisterError(error.message);
        toast.error(registerError);
        return;
      });
  };
  return <div></div>;
};

export default Register;
