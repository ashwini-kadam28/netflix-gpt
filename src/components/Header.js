import React, { useEffect } from 'react';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from './utils/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { LOGO } from './utils/Contants';
import { addUser, removeUser } from './utils/userSlice';
import { toggleGptSerachView } from './utils/gptSlice';
import { SUPPORTED_LANGUAGES } from './utils/Contants';
import { changeLanguage } from './utils/configSlice';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector(store => store.gpt.showGptSearch);

  useEffect(() => {

    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties       
        const { uid, userName, displayName, photoURL } = user;
        dispatch(addUser({ uid, userName, displayName, photoURL }));
        navigate("/browse");
      } else {
        // User is signed out
        navigate("/");
        dispatch(removeUser());
      }
    });
    return () => { unsubscribe() }
  }, []);

  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate("/");
    }).catch((error) => {
      //error
      navigate("/error");
    })
  }

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value))
  }

  const handleGptSearchBtn = () => {
    dispatch(toggleGptSerachView());
  }

  return (
    <div className='bg-black flex  justify-between'>
      <img className="w-44 " src={LOGO} alt="Netflix" />




      {/* <img src={user.pathURL} alt="" /> */}
      {/* {user && <> */}
      <div >
        {showGptSearch &&
          <select onClick={(e) => handleLanguageChange(e)}>
            {SUPPORTED_LANGUAGES.map((key) => (
              <option key={key.identifier} value={key.identifier} >{key.name}</option>
            ))}
          </select>
        }
        <button className='py-1 px-2 mx-2 my-2 bg-purple-800 text-white rounded-lg'
          onClick={handleGptSearchBtn}
        >
          {showGptSearch ? 'Homepage' : 'GPT Search'}</button>
        <button className='bg-black border-white border-solid border caret-white text-white'
          onClick={handleSignOut}
        >Sign Out</button>
      </div>
      {/* </>
      } */}

    </div>
  )
}

export default Header