'use client'

import { useContext, createContext, useEffect, useState } from "react";
import { signInWithPopup, signOut, onAuthStateChanged, GoogleAuthProvider, FacebookAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, OAuthProvider } from "firebase/auth";
import { auth } from "../firebase";
import { useRouter } from "next/navigation";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const router = useRouter();
    const googleSignIn = () => {
        const googleprovider = new GoogleAuthProvider();
        signInWithPopup(auth, googleprovider)
            .then(() => { router.push("/dashboard") })
    }

    const appleSignIn = () => {
        const appleprovider = new OAuthProvider('apple.com');
        signInWithPopup(auth, appleprovider);
    }

    const facebookSignIn = () => {
        const facebookprovider = new FacebookAuthProvider();
        signInWithPopup(auth, facebookprovider);
    }

    const createUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setUser(userCredential.user);
            })
            .catch((error) => {
                console.log(error.code);
                console.log(error.message);
            });
    }

    const signInUser = (email, password) => {
        signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        signOut(auth)
            .then(() => { router.push("/") })

    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => unsubscribe();
    }, [user])

    return (
        <AuthContext.Provider value={{ user, googleSignIn, appleSignIn, facebookSignIn, logOut, createUser, signInUser }}>
            {children}
        </AuthContext.Provider>
    )
};

export const UserAuth = () => {
    return useContext(AuthContext)
};