import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase.init";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";

const Register = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [show, setShow] = useState(false);

  const handleAddValue = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const emailLowerCase = email.toLowerCase();
    const password = e.target.password.value;
    const checkbox = e.target.checkbox.checked;

    setSuccess(false);
    setError("");

    if (!checkbox) {
      setError("Please accept our terms and condition");
      return;
    }

    const validNumber = /(?=.*\d)/;
    const validSmallLetter = /(?=.*[a-z])/;
    const validCapitalLetter = /(?=.*[A-Z])/;
    const validCharacter = /.{8,}/;

    if (validCharacter.test(password) === false) {
      setError("Password must have 8 Character or longer");
      return;
    }
    if (validSmallLetter.test(password) === false) {
      setError("Password must have one Small letter");
      return;
    }
    if (validCapitalLetter.test(password) === false) {
      setError("Password must have one Capital letter");
      return;
    }
    if (validNumber.test(password) === false) {
      setError("Password must have any number (0-9)");
      return;
    }

    createUserWithEmailAndPassword(auth, emailLowerCase, password)
      .then((result) => {
        e.target.reset();
        setSuccess(true);
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          setError("Email already used!");
          return;
        }
      });
  };
  return (
    <div>
      <h2>This is Register</h2>
      <form onSubmit={handleAddValue}>
        <label className="input ">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <rect width="20" height="16" x="2" y="4" rx="2"></rect>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
            </g>
          </svg>
          <input
            type="email"
            name="email"
            placeholder="mail@site.com"
            required
          />
        </label>
        <br /> <br />
        <div className="relative">
          <label className="input">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
              </g>
            </svg>
            <input
              type={show ? "password" : "text"}
              name="password"
              required
              placeholder="Password"
            />

            <button onClick={() => setShow(!show)}>
              {show ? <FaEyeSlash /> : <FaEye />}
            </button>
          </label>
        </div>
        <fieldset className="fieldset bg-base-100 border-base-300 rounded-box w-64 mt-2">
          <label className="label">
            <input
              type="checkbox"
              name="checkbox"
              defaultChecked
              className="checkbox"
            />
            Remember me
          </label>
        </fieldset>
        <br />
        <input className="btn btn-primary" type="submit" value="Submit" />
      </form>

      {error && <p className="text-red-500">{error}</p>}
      {success && <p className="text-green-500">User Created Successful</p>}
    </div>
  );
};

export default Register;
