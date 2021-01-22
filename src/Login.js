import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';
import { auth } from './firebase';
import './Login.css';

function Login() {

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [picture, setPicture] = useState('');
  const dispatch = useDispatch();

  const register = () => {
    if (!name) {
      alert('Please Enter Full Name');
    }

    auth.createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user.updateProfile({
          displayName: name,
          photoURL: picture
        })
        .then(() => {
          dispatch(login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: name,
            photoUrl: picture
          }));
        });
      }).catch(err => alert(err));
  };

  const loginToApp = (e) => {
    e.preventDefault();

    auth.signInWithEmailAndPassword(email, password)
    .then((userAuth) => {
      dispatch(login({
        email: userAuth.user.email,
        uid: userAuth.user.uid,
        displayName: name,
        photoUrl: picture
      }))
    }).catch(err => alert(err));

  }

  return (
    <div className="login">
      <img src="https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png?itok=q_lR0Vks" alt=""/>

      <form>
        <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Full Name (Required if registering)" />
        <input type="text" value={picture} onChange={e => setPicture(e.target.value)} placeholder="Profile Picture URL (Optional)" />
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
        <button type="submit" onClick={loginToApp}>Sign In</button>
      </form>
      <p>Not a member? <span className="login__register" onClick={register}>Register Now</span></p>
    </div>
  )
}

export default Login;