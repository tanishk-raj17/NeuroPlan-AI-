import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC4u0uFPsTysMyLgg0Pjz3lGPVIvIP59Rc",
  authDomain: "neuroplan-ai-95f0a.firebaseapp.com",
  projectId: "neuroplan-ai-95f0a",
  storageBucket: "neuroplan-ai-95f0a.firebasestorage.app",
  messagingSenderId: "112577802773",
  appId: "1:112577802773:web:75dda2231f072eca6c941c"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);