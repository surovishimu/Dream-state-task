import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../Firebase/firebase.config";


export const AuthContext = createContext(null)


const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider);
    }

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signin = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }
    const handleUpdateProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }
    const logOut = () => {
        return signOut(auth)
    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setUser(user);
            console.log(user);
            setLoading(false)
        });
    }, [])

    const authentication = {
        googleLogin,
        createUser,
        signin,
        logOut,
        user,
        loading,
        handleUpdateProfile
    }
    return (
        <div>
            <AuthContext.Provider value={authentication}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;