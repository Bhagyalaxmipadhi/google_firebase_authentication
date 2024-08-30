import { SignInWithGoogle } from "../signinwithgoogle";

const GoogleLogin = async () => {
  try {
    const response = await SignInWithGoogle();
    console.log("user", response.user);

    const idToken = await response.user.getIdToken();
    if (response.user) {
      return {
        stsTokenManager: response.user.stsTokenManager,
        email: response.user.email,
        displayName: response.user.displayName,
        idToken: idToken,
      };
    }
  } catch (error) {
    console.log("googlelogin.error", error.message);
    throw error; // Ensure errors are propagated
  }
};

export default GoogleLogin;
