import React, { useContext } from 'react';
import { firebaseConfig } from './firebase.config';
import firebase from 'firebase';
import { UserContext } from '../../App';
import './Login.css'
import { useHistory, useLocation } from 'react-router-dom';


if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  

  const googleProvider = new firebase.auth.GoogleAuthProvider();

  const signinWithGoogle = () => {

    firebase.auth().signInWithPopup(googleProvider)
      .then(res => {
        const { displayName, email } = res.user;
        const signedInUser = { name: displayName, email };
        setLoggedInUser(signedInUser);
        history.replace(from);
        console.log(loggedInUser.name, loggedInUser.email);

      }).catch(error => {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;

      })
  }



  return (
    <div className="login-here">

      <div>
        <p style={{ color: 'blue' }}>{loggedInUser.name}</p>
        <button className="signin-buton" onClick={signinWithGoogle}>Sign in with google</button>
      </div>

    </div>
  );
};

export default Login;