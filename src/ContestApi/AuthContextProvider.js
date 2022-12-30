import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/Firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);
const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);

    const googlProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const providerLogin = (provider) => {
        return signInWithPopup(auth, provider);
    }
    const googleLogin = () => {
        return providerLogin(googlProvider).then(data => {
            const res = data.user;
            console.log(res)
            const name = res.displayName;
            const email = res.email;
            const imageUrl = res.photoURL;
            fetch(`http://localhost:5000/user?email=${res.email}`)
                .then(res => res.json())
                .then(data => {
                    data.length === 0 && fetch('http://localhost:5000/user', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify({ name, email, imageUrl })
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.acknowledged) {
                                ;
                            }
                        })
                })
        })
            .catch(e => console.log(e));
    }
    const githubLogin = () => {
        providerLogin(githubProvider);
    }

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }


    const updateUserProfile = (name, photoURL) => {
        return updateProfile(auth.currentUser, { displayName: name, photoURL: photoURL })
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });

        return () => {
            unsubscribe();
        }

    }, [])

    const AuthInfo = { user, createUser, signIn, logOut, loading, updateUserProfile, providerLogin, googleLogin, githubLogin };
    return (
        <div>
            <AuthContext.Provider value={AuthInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthContextProvider;