import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { firebaseApp } from "./firebase";

const Provider = new GoogleAuthProvider();
Provider.setCustomParameters({
  prompt: "select_account",
});

export const GoogleAuth = getAuth(firebaseApp);
export const SignInWithGoogle = () => signInWithPopup(GoogleAuth, Provider);
