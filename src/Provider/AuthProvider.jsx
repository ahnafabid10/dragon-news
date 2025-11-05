import React, { createContext, useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth";
import app from '../firebase/Firebase.config'
import { createUserWithEmailAndPassword } from 'firebase/auth';

export const AuthContext = createContext()
export const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const createUser = (email,password) =>{

        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email,password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut =() =>{
        return signOut(auth)
    }

    useEffect (() =>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
            setUser(currentUser)
        });
        return ()=>{
            unsubscribe()
        }
    }, [])

    const authData = {
        user, 
        setUser,
        createUser,
        logOut,
        signIn
        
    }

    return <AuthContext value={authData}>
        {children}
    </AuthContext>
};

export default AuthProvider;