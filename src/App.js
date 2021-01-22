import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import { selectUser } from './features/userSlice';
import Feed from './Feed';
import Header from './Header';
import Sidebar from './Sidebar';
import Login from './Login';
import { auth } from './firebase';
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';
import { logout } from './features/userSlice';
import Widgets from './Widgets';

function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  // This will keep logged in
  useEffect (() => {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        dispatch(login({
          email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL
        }))
      } else {
        dispatch(logout());
      }
    })
  }, []);

  return (
    <div className="app">

      <Header />

      {!user ? (<Login />) : (
        <div className="app__body">
          <Sidebar />
          <Feed />
          <Widgets />
        </div>
      )}

    </div>
  );
}

export default App;
