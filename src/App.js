import { BrowserRouter, Routes, Route }
  from "react-router-dom";

import Home from "./pages/Home";

import Login from "./pages/Login";

import Signup from "./pages/Signup";

import Welcome from "./pages/onboarding/Welcome";

import Goal from "./pages/onboarding/Goal";

import Subjects from "./pages/onboarding/Subjects";

import StudyTime from "./pages/onboarding/StudyTime";

import StrengthWeakness from "./pages/onboarding/StrengthWeakness";

import AIAnalysis from "./pages/onboarding/AIAnalysis";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/signup"
          element={<Signup />}
        />

        <Route
          path="/onboarding"
          element={<Welcome />}
        />

        <Route
          path="/onboarding/goal"
          element={<Goal />}
        />

        <Route
          path="/onboarding/subjects"
          element={<Subjects />}
        />

        <Route
          path="/onboarding/study-time"
          element={<StudyTime />}
        />

        <Route
          path="/onboarding/strength"
          element={<StrengthWeakness />}
        />

        <Route
          path="/onboarding/analysis"
          element={<AIAnalysis />}
        />

      </Routes>

    </BrowserRouter>

  );
}

export default App;