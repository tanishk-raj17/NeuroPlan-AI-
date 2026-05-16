import { BrowserRouter, Routes, Route } from "react-router-dom";

import { OnboardingProvider } from "./context/OnboardingContext";
import { PlannerProvider } from "./context/PlannerContext";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

import Welcome from "./pages/onboarding/Welcome";
import Goal from "./pages/onboarding/Goal";
import Subjects from "./pages/onboarding/Subjects";
import StudyTime from "./pages/onboarding/StudyTime";
import StrengthWeakness from "./pages/onboarding/StrengthWeakness";
import AIAnalysis from "./pages/onboarding/AIAnalysis";

import Dashboard from "./pages/Dashboard";
import StudyPlanner from "./pages/StudyPlanner";
import AITutor from "./pages/AITutor";
import WeaknessAnalyzer from "./pages/WeaknessAnalyzer";

function App() {
  return (
    <OnboardingProvider>
      <PlannerProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

            <Route path="/onboarding" element={<Welcome />} />
            <Route path="/onboarding/goal" element={<Goal />} />
            <Route path="/onboarding/subjects" element={<Subjects />} />
            <Route path="/onboarding/study-time" element={<StudyTime />} />
            <Route path="/onboarding/strength" element={<StrengthWeakness />} />
            <Route path="/onboarding/analysis" element={<AIAnalysis />} />

            <Route path="/dashboard" element={<Dashboard />} />

            <Route path="/study-planner" element={<StudyPlanner />} />

            <Route path="/ai-tutor" element={<AITutor />} />

            <Route path="/weakness-analyzer" element={<WeaknessAnalyzer />} />
            
          </Routes>
        </BrowserRouter>
      </PlannerProvider>
    </OnboardingProvider>
  );
}

export default App;