import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { LOGO, SUPPORTED_LANGUAGE } from "../utils/constant";
import { toggleGptSearchView } from "../utils/gptSlice";
import {changeLanguage} from "../utils/configSlice";


const Header = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store)=>store.gpt.showGptSearch);


  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
        navigate("/error");

      });
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    //Unsubscribe when compoenent unmounts
    return () => unsubscribe();
  }, []);

  const handleGptSearchClick = () => {
    //toggle GPT Search button
    dispatch(toggleGptSearchView());
  }

  const handleLanguageChange = (e)=>{
    dispatch(changeLanguage(e.target.value));
  }

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between ">
      <img
        className="w-44 mx-auto md:mx-0"
        src={LOGO} alt="logo" />

      {user &&
        (<div className="flex p-2">
          {showGptSearch && (
            <select className="py-2 px-4 m-2 bg-gray-900 rounded-lg text-white" onChange={handleLanguageChange}>
            {SUPPORTED_LANGUAGE.map(lang => <option key={lang.identifier} value={lang.identifier} >{lang.name}</option>)}
          </select>)
          }
          <button className="py-2 px-4 m-2 bg-red-700 rounded-lg text-white" onClick={handleGptSearchClick}>{showGptSearch ? "Homepage" : "GPT Search"}</button>
          <img
            className="w-10 h-12 p-2"
            alt="userIcon" src={user?.photoURL}
          />
          <button
            onClick={handleSignOut}
            className="font-bold text-white ">Sign Out</button>
        </div>)}
    </div>

  )
}

export default Header
