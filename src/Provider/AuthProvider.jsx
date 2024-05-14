import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile, signInWithPopup, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import axios from 'axios';



export const AuthContext = createContext(null);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider(); 
const githubProvider = new GithubAuthProvider(); 

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider); 
    };

    const signInWithGitHub = () => {
        setLoading(true);
        return signInWithPopup(auth, githubProvider); 
    };

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    };

    const updateUserProfile = async ({displayName, photoURL, bio, phoneNumber}) => {
        setLoading(true);
        try {
            await updateProfile(auth.currentUser, { displayName, photoURL, bio, phoneNumber });
            const updatedUser = { ...auth.currentUser, displayName, photoURL, bio, phoneNumber };
            setUser(updatedUser);
            setLoading(false);
        } catch (error) {
            console.error("Error updating user profile:", error.message);
            setLoading(false);
        }
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
            // if user exists then issue a token
            if (currentUser) {
                const userEmail = currentUser.email;
                const loggedUser = { email: userEmail };
                axios.post('http://localhost:5000/jwt', loggedUser, { withCredentials: true })
                    .then(res => {
                        console.log('token response', res.data);
                    })
                    .catch(error => {
                        console.error('Error issuing token:', error);
                    });
            } else {
                // No user, perform logout
                axios.post('http://localhost:5000/logout', {}, { withCredentials: true })
                .then(res => {
                    console.log(res.data);
                })
                .catch(error => {
                    console.error('Error logging out:', error);
                });
            
                    
            }
        });
        return () => {
            unsubscribe();
        };
    }, []);
    

    const authInfo = {
        loading,
        user,
        createUser,
        signIn,
        logOut,
        updateUserProfile,
        signInWithGoogle,
        signInWithGitHub,
    };

    return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;