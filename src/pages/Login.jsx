// src/pages/Login.jsx

import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { auth, db } from "../firebase";

import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

import {
  doc,
  getDoc,
  setDoc,
} from "firebase/firestore";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");



  // EMAIL LOGIN
  const handleLogin = async () => {

    try {

      const userCredential =
        await signInWithEmailAndPassword(
          auth,
          email,
          password
        );

      const user = userCredential.user;

      const docRef =
        doc(db, "users", user.uid);

      const docSnap =
        await getDoc(docRef);

      if (docSnap.exists()) {

        const data = docSnap.data();

        // CHECK ONBOARDING
        if (data.onboardingCompleted) {

          navigate("/");

        } else {

          navigate("/onboarding");

        }

      } else {

        navigate("/onboarding");

      }

    } catch (err) {

      alert(err.message);

    }
  };



  // GOOGLE LOGIN
  const handleGoogle = async () => {

    try {

      const provider =
        new GoogleAuthProvider();

      const result =
        await signInWithPopup(
          auth,
          provider
        );

      const user = result.user;

      const docRef =
        doc(db, "users", user.uid);

      const docSnap =
        await getDoc(docRef);

      // NEW USER
      if (!docSnap.exists()) {

        await setDoc(
          doc(db, "users", user.uid),
          {

            email: user.email,

            onboardingCompleted: false,

          }
        );

        navigate("/onboarding");

      } else {

        const data = docSnap.data();

        // OLD USER
        if (data.onboardingCompleted) {

          navigate("/");

        } else {

          navigate("/onboarding");

        }
      }

    } catch (err) {

      alert(err.message);

    }
  };



  return (

    <div className="
      min-h-screen
      flex
      items-center
      justify-center
      bg-[#050816]
      text-white
      px-6
    ">

      <div className="
        bg-white/5
        backdrop-blur-xl
        p-8
        rounded-3xl
        w-full
        max-w-md
        border
        border-white/10
        shadow-[0_0_40px_rgba(139,92,246,0.25)]
      ">

        <h2 className="
          text-4xl
          font-bold
          text-center
          mb-2
        ">
          Welcome Back
        </h2>

        <p className="
          text-center
          text-gray-400
          mb-8
        ">
          Continue your Neuroplan journey
        </p>



        {/* EMAIL */}
        <input
          type="email"
          placeholder="Email"

          className="
            w-full
            p-3
            mb-4
            rounded-xl
            bg-black/40
            border
            border-gray-700
            focus:border-purple-500
          "

          onChange={(e) =>
            setEmail(e.target.value)
          }
        />



        {/* PASSWORD */}
        <input
          type="password"
          placeholder="Password"

          className="
            w-full
            p-3
            mb-4
            rounded-xl
            bg-black/40
            border
            border-gray-700
            focus:border-purple-500
          "

          onChange={(e) =>
            setPassword(e.target.value)
          }
        />



        {/* LOGIN BUTTON */}
        <button
          onClick={handleLogin}

          className="
            w-full
            py-3
            rounded-xl
            font-semibold
            bg-gradient-to-r
            from-purple-500
            to-blue-500
            hover:scale-105
            transition
          "
        >
          Login
        </button>



        {/* DIVIDER */}
        <div className="
          flex
          items-center
          gap-2
          my-6
        ">
          <hr className="flex-1 border-gray-700" />

          <span className="
            text-sm
            text-gray-400
          ">
            OR
          </span>

          <hr className="flex-1 border-gray-700" />
        </div>



        {/* GOOGLE BUTTON */}
        <button

          onClick={handleGoogle}

          className="
            w-full
            flex
            items-center
            justify-center
            gap-3
            py-3
            bg-white
            text-black
            rounded-xl
            font-semibold
            hover:scale-105
            transition
          "
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

export default Login;