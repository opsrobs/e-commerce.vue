import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyBNtxJtZHjuV1Xt0xWeIGPHf7GR7FaGNi4",
    authDomain: "social-auth-d9754.firebaseapp.com",
    projectId: "social-auth-d9754",
    storageBucket: "social-auth-d9754.appspot.com",
    messagingSenderId: "517549356672",
    appId: "1:517549356672:web:0a0c75bbbf858173455865",
    measurementId: "G-ZBH5HL1KJE"
  };

const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp