
import { getAuth } from 'firebase/auth'
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyCZM67O4oWWzXPmz-N9biVPWkhlRxs6eFE",
  authDomain: "login-signup-da8f8.firebaseapp.com",
  projectId: "login-signup-da8f8",
  storageBucket: "login-signup-da8f8.appspot.com",
  messagingSenderId: "4666323619",
  appId: "1:4666323619:web:daecb8e5efeed19aa1c516"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth()
export {app,auth}