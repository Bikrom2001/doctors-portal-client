import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/Firebase.config';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';


export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // google login
    const signInWithGoogle =() => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const updateUser = (userInfo) => {
        return updateProfile(user, userInfo);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    const emailForgetPassword = (email) => {
        return sendPasswordResetEmail(auth, email);
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('user observing');
            setUser(currentUser);
            setLoading(false);

        });

        return () => unsubscribe();
    }, [])

    const authInfo = {
        createUser,
        signIn,
        user,
        logOut,
        updateUser,
        loading,
        signInWithGoogle,
        emailForgetPassword
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;