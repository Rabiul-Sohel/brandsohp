import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../../firebase.config";

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const auth = getAuth(app);


  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  const userLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  }
  const userLogout = () => {
    return signOut(auth);
  }
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log('observing', currentUser)
      setUser(currentUser)
    })
    return () => {
      unSubscribe;
    }
  },[auth])
  const authInfo = {
    user,
    createUser,
    userLogin,
    userLogout
  }
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

AuthProvider.propTypes = {
  children: PropTypes.node
}