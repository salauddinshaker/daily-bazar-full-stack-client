import React, { useContext } from 'react';
import { firebaseConfig } from './firebase.config';
import firebase from 'firebase';
import { UserContext } from '../../App';


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
 }
 
const Login = () => {
    const [loggedInUser,setLoggedInUser] = useContext(UserContext);
    const googleProvider = new firebase.auth.GoogleAuthProvider();

    const signinWithGoogle = ()=>{

        firebase.auth().signInWithPopup(googleProvider)
  
  .then(res=> {
      const {displayName, email} = res.user;
      const signedInUser = {name:displayName,email};
      setLoggedInUser(signedInUser);
    console.log(loggedInUser.name, loggedInUser.email);
    
    
  }).catch(error => { 
    var errorCode = error.code;
    var errorMessage = error.message; 
    var email = error.email;   
    var credential = error.credential;
  
  })
}
    return (
        <div>
             <h1>Login.....</h1>
            <p>{loggedInUser.name}</p>
            <p>{loggedInUser.email}</p>
            <button onClick={signinWithGoogle}>Sign in</button>
        </div>
    );
};

export default Login;