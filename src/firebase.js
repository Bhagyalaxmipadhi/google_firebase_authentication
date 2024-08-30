import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDpTuwC5oTy82nSl2a-Vny8asguUDZPoyo",
  authDomain: "ysredu.firebaseapp.com",
  projectId: "ysredu",
  storageBucket: "ysredu.appspot.com",
  messagingSenderId: "283697125053",
  appId: "1:283697125053:web:4a953c60f5059b376289d4",
  measurementId: "G-HS11ESKS9S",
};

const firebaseApp = initializeApp(firebaseConfig);

const messaging = getMessaging(firebaseApp);
const analytics = getAnalytics(firebaseApp);

export { firebaseApp, messaging, analytics };
