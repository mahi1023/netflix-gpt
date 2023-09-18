import React, { useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { LOGO_URL } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { changeLanguage } from "../utils/configSlice";
import lang from "../utils/languageConstants";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //gettin User Details from userStore
  const store = useSelector((store) => store.user);

  //getting gptSearch toogle from store
  const showGptSearch = useSelector((store) => store.gptSearch.showGptSearch);

  //getting selected language from store
  const language = useSelector((store) => store.config?.lang);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        // navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
        console.log(error);
      });
  };
  //onAuthStateChanged () is from firebase to tract sign in/out state changes and run whenever there is state change
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    //unsubscribe when component will unmount
    return () => unsubscribe();
  }, []);

  const handleGptSearchClick = () => {
    // Toggle GPT search
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (event) => {
    dispatch(changeLanguage(event.target.value));
  };

  return (
    <div className="w-full absolute px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-44" src={LOGO_URL} alt="logo" />
      {/* if user data is avaible in store then only display sing out */}
      {store && (
        <div className="flex p-2 items-center justify-around">
          {showGptSearch && (
            <select
              onChange={handleLanguageChange}
              className="p-2 bg-gray-900 text-white m-2"
            >
              {SUPPORTED_LANGUAGES.map((obj) => {
                return (
                  <option
                    className=""
                    key={obj.identifier}
                    value={obj.identifier}
                  >
                    {obj.language}
                  </option>
                );
              })}
            </select>
          )}

          <button
            className="py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-md cursor-pointer"
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? "Home" : "GPT Search"}
          </button>
          <img className="w-12 h-12 " src={store.photoURL} alt="userIcon" />
          <button
            className=" text-white text-lg font-bold px-2"
            onClick={handleSignOut}
          >
            {lang[language].singOut}
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
