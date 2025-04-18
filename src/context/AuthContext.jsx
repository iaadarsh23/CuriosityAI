import { createContext, useContext, useEffect, useState } from "react";
import {
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	signInWithPopup,
	signOut,
	onAuthStateChanged,
} from "firebase/auth";
import { auth, googleProvider } from "../config/firebase";

const AuthContext = createContext();

export const useAuth = () => {
	return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			setUser(user);
			setLoading(false);
		});

		return unsubscribe;
	}, []);

	const signUp = async (email, password) => {
		try {
			const result = await createUserWithEmailAndPassword(
				auth,
				email,
				password
			);
			return result.user;
		} catch (error) {
			throw error;
		}
	};

	const signIn = async (email, password) => {
		try {
			const result = await signInWithEmailAndPassword(auth, email, password);
			return result.user;
		} catch (error) {
			throw error;
		}
	};

	const signInWithGoogle = async () => {
		try {
			const result = await signInWithPopup(auth, googleProvider);
			return result.user;
		} catch (error) {
			throw error;
		}
	};

	const logout = () => {
		return signOut(auth);
	};

	const value = {
		user,
		loading,
		signUp,
		signIn,
		signInWithGoogle,
		logout,
	};

	return (
		<AuthContext.Provider value={value}>
			{!loading && children}
		</AuthContext.Provider>
	);
};
