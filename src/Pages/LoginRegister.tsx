import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../config/firebase";

const LoginRegister = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [createUserState, setCreateUserState] = useState(false);
  const [error, setError] = useState("");

  function onSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();
    if (createUserState && password !== confirmPassword) {
      setError("Passwords do not match.");
    }
  }

  const createUser = async () => {
    try {
      if (password === confirmPassword) {
        await createUserWithEmailAndPassword(auth, email, password);
      }
    } catch (error) {
      setError("Password should be at least 6 characters.");
      console.log(error);
    }
  };

  const signIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      setError("Valid email or password.");
      console.log(error);
    }
  };

  return (
    <section>
      <form
        onSubmit={onSubmit}
        className="w-full h-screen flex flex-col justify-center items-center gap-2"
      >
        {error ? <p className="text-red-500">{error}</p> : null}
        <label className="text-3xl" htmlFor="Email">
          Email
        </label>
        <input
          className="border-2 border-mainGreen rounded-xl pr-12 pl-2"
          required
          type="text"
          name="Email"
          id="Email"
          data-cy="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className="text-3xl" htmlFor="Password">
          Password
        </label>
        <input
          className="border-2 border-mainGreen rounded-xl pr-12 pl-2"
          required
          type="password"
          name="Password"
          id="Password"
          data-cy="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        {createUserState ? (
          <>
            <label className="text-3xl" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              className="border-2 border-mainGreen rounded-xl pr-12 pl-2"
              required
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </>
        ) : null}
        <button
          className="mt-2 px-8 py-1 text-white bg-mainGreen rounded-xl text-2xl"
          type="submit"
          data-cy="loginRegisterButton"
          onClick={() => {
            createUserState ? createUser() : signIn();
          }}
        >
          {createUserState ? "Register" : "Login"}
        </button>
        <p
          onClick={() => {
            setError("");
            setCreateUserState((prev) => !prev);
          }}
          className="text-mainGreen cursor-pointer text-2xl"
        >
          {createUserState ? "Already have an account?" : "Create Account"}
        </p>
      </form>
    </section>
  );
};

export default LoginRegister;
