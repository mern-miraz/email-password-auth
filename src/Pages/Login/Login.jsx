import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { useRef, useState } from "react";
import { auth } from "../../firebase.init";
import { Link } from "react-router";

const Login = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const emailRef = useRef();
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    setError("");
    setSuccess(false);

    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result);
        if (!result.user.emailVerified) {
          alert("Please Verify your Email");
          return;
        } else {
          setSuccess(true);
        }
      })
      .catch((error) => {
        if (error.code === "auth/invalid-credential") {
          setError("Wrong credential!");
          return;
        }
        setError(error.message);
        console.log(error);
      });
  };

  const handleForgotPassword = () => {
    const resetPassword = emailRef.current.value;
    if (!resetPassword) {
      alert("Please add your mail");
      return;
    }
    setError("");
    sendPasswordResetEmail(auth, resetPassword)
      .then(() => {
        alert("A password reset mail is sent. Please check your email.");
      })
      .then((error) => setError(error.message));
  };
  return (
    <div>
      <div className="card bg-base-100 w-full mx-auto mt-10 max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <form action="" onSubmit={handleLogin}>
            <label className="label">Email</label>
            <input
              ref={emailRef}
              type="email"
              name="email"
              className="input"
              placeholder="Email"
            />
            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Password"
            />
            <div onClick={handleForgotPassword}>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">Login</button>
          </form>

          <p>
            New to this website? Please
            <Link to="/register" className="text-blue-500 underline">
              Sign Up
            </Link>
          </p>

          {success && <p className="text-green-500">Login Successful</p>}
          {error && <p className="text-red-500">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default Login;
