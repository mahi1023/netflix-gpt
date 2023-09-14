import React, { useState,useRef } from "react";
import Header from "./Header";
import checkValidData from '../utils/validate'
const Login = () => {
  const [isSignInForm, setSignInForm] = useState(true);
  const [errorMessage,setErrorMessage] = useState(null);

  const email = useRef(null);
const password = useRef(null);
const userName = useRef(null);
const handleBtnClick = (event) =>{
    event.preventDefault();
    //validate the form data
    if(isSignInForm){
        const message = checkValidData(email.current.value,password.current.value,"",false);
     setErrorMessage(message);
    }
    else{
        const message = checkValidData(email.current.value,password.current.value,userName.current.value,true);
        setErrorMessage(message);
    }
     

    //Sign /Sign up
}

  const toggleSignInForm = () => {
    setSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img className=" "
          src="https://assets.nflxext.com/ffe/siteui/vlv3/dc1cf82d-97c9-409f-b7c8-6ac1718946d6/14a8fe85-b6f4-4c06-8eaf-eccf3276d557/IN-en-20230911-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="logo"
        />
      </div>
      <form className="w-4/12 absolute p-12  bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80">
        <h1 className=" font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input ref={userName}
            type="text"
            placeholder="UserName"
            className="p-4 my-4 w-full bg-gray-700"
          />
        )}
        <input
          type="text" ref={email}
          placeholder="Email Address"
          className="p-4 my-4 w-full  bg-gray-700"
        />
        <input
          type="password" ref={password}
          placeholder="Password"
          className="p-4 my-4 w-full  bg-gray-700"
        />
        <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg cursor-pointer" onClick={handleBtnClick}>
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
