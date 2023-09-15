import React, { useState, useRef } from "react";
import Header from "./Header";
import checkValidData from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignInForm, setSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const email = useRef(null);
  const password = useRef(null);
  const userName = useRef(null);
  const handleBtnClick = (event) => {
    event.preventDefault();
    //validate the form data //Sign /Sign up
    let message;
    if (isSignInForm) {
      message = checkValidData(
        email.current.value,
        password.current.value,
        "",
        false
      );
      setErrorMessage(message);
    } else {
      message = checkValidData(
        email.current.value,
        password.current.value,
        userName.current.value,
        true
      );
      setErrorMessage(message);
    }
    if (message) return;

    // sign in /sign up auth
    if (!isSignInForm) {
      //sing up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          updateProfile(user, {
            displayName: userName.current.value,
            photoURL: "https://avatars.githubusercontent.com/u/89977699?v=4",
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              navigate("/browse");
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
          // ..
        });
    } else {
      //sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode + " - " + errorMessage);
          setErrorMessage("User Not Found");
        });
      navigate("/browse");
    }
  };

  const toggleSignInForm = () => {
    setSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className=" "
          src="https://assets.nflxext.com/ffe/siteui/vlv3/dc1cf82d-97c9-409f-b7c8-6ac1718946d6/14a8fe85-b6f4-4c06-8eaf-eccf3276d557/IN-en-20230911-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="logo"
        />
      </div>
      <form className="w-4/12 absolute p-12  bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80">
        <h1 className=" font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={userName}
            type="text"
            placeholder="UserName"
            className="p-4 my-4 w-full bg-gray-700 rounded-md"
          />
        )}
        <input
          type="text"
          ref={email}
          placeholder="Email Address"
          className="p-4 my-4 w-full  bg-gray-700 rounded-md focus:outline-0"
        />
        <input
          type="password"
          ref={password}
          placeholder="Password"
          className="p-4 my-4 w-full  bg-gray-700 rounded-md"
        />
        <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
        <button
          className="p-4 my-6 bg-red-700 w-full rounded-lg cursor-pointer"
          onClick={handleBtnClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-3 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? `New to Netflix? Sign up now.`
            : "Already registered? Sign In Now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
