// src/pages/Signup.jsx

import { useState } from "react";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Signup Success ✅");
    } catch (err) {
      alert(err.message);
    }
  };

  const handleGoogle = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0f0f0f] text-white">

      <div className="bg-white/5 backdrop-blur-xl p-8 rounded-2xl w-full max-w-md border border-white/10 shadow-2xl">

        <h2 className="text-3xl font-bold text-center mb-6">
          Create Account
        </h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-4 rounded-lg bg-black/40 border border-gray-700 focus:outline-none"
          onChange={(e) => setEmail(e.target.value)}
        />

         <input
          type="Name"
          placeholder="Your Name"
          className="w-full p-3 mb-4 rounded-lg bg-black/40 border border-gray-700 focus:outline-none"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-4 rounded-lg bg-black/40 border border-gray-700 focus:outline-none"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleSignup}
          className="w-full py-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg font-semibold hover:scale-105 transition"
        >
          Signup
        </button>

        {/* Divider */}
        <div className="flex items-center gap-2 my-6">
          <hr className="flex-1 border-gray-600" />
          <span className="text-gray-400 text-sm">OR</span>
          <hr className="flex-1 border-gray-600" />
        </div>

        {/* Google Button */}
       <button
  onClick={handleGoogle}
  className="w-full flex items-center justify-center gap-3 py-3 bg-white text-black rounded-lg font-semibold hover:scale-105 transition"
>
  <img
    src="https://www.svgrepo.com/show/475656/google-color.svg"
    alt="google"
    className="w-5 h-5"
  />
  Continue with Google
</button>
      </div>
    </div>
  );
}

export default Signup;