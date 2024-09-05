import React, { useEffect } from 'react';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from './utils/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { LOGO } from './utils/Contants';
import { addUser, removeUser } from './utils/userSlice';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
   const user = useSelector((store) => store.user);

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
    return()=>{unsubscribe()}
  }, []);
  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate("/");
    }).catch((error) => {
      //error
      navigate("/error");
    })
  }

  return (
    <div className='bg-black '>
      {/* <img className="w-44 " src={LOGO} alt="Netflix" /> */}




      {/* <img src={user.pathURL} alt="" /> */}
      {/* {user && <> */}
        <button className='bg-black border-white border-solid border caret-white text-white'
          onClick={handleSignOut}
        >Sign Out</button>
      {/* </>
      } */}

    </div>
  )
}

export default Header