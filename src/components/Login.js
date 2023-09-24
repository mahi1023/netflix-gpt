import React, { useState, useRef } from "react";
import Header from "./Header";
import checkValidData from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import {USER_AVATAR,BACKGROUND_IMG} from '../utils/constants'

const Login = () => {
  const [isSignInForm, setSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch()
  const email = useRef(null);
  const password = useRef(null);
  const userName = useRef(null);

  //on Sign In/ Sign Up Click
  const handleBtnClick = (event) => {
    event.preventDefault();
    //validate the form data //Sign In /Sign up
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

    // sign in /sign up auth(using firebase)
    if (!isSignInForm) {
      //sing up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up is sucess
          const user = userCredential.user;
          console.log(user);
          //here updating the display name and photo in fribase
          updateProfile(user, {
            displayName: userName.current.value,
            photoURL: USER_AVATAR,
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
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
           // An error occurred in sign up
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
        });
    } else {
      //sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in success
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
           // An error occurred in Sign in
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode + " - " + errorMessage);
          setErrorMessage("User Not Found");
        });
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
          className=" h-screen object-cover"
          src={BACKGROUND_IMG}
          alt="logo"
        />
      </div>
      <form className="w-full md:w-4/12 absolute p-12  bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80">
        <h1 className=" font-bold text-xl md:text-3xl py-4">
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
