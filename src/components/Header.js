import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
const Header = () => {
  const navigate = useNavigate();
  const store = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
        console.log(error);
      });
  };
  return (
    <div className="w-full absolute px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-44"
        src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
        alt="logo"
      />
      {store && (
        <div className="flex p-2 items-center justify-around">
          <img className="w-12 h-12 " src={store.photoURL} alt="userIcon" />
          <button
            className=" text-white text-lg font-bold"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
