import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Background from "../../components/onboarding/Background";
import GlassCard from "../../components/onboarding/GlassCard";
import ProgressBar from "../../components/onboarding/ProgressBar";
import GlowButton from "../../components/onboarding/GlowButton";

export default function StrengthWeakness() {

  const navigate = useNavigate();

  const subjects = [
    "React",
    "JavaScript",
    "DSA",
    "Node.js",
    "Communication",
    "English",
  ];

  const [strong, setStrong] = useState([]);
  const [weak, setWeak] = useState([]);

  const toggleStrong = (subject) => {

    if (strong.includes(subject)) {
      setStrong(strong.filter((item) => item !== subject));
    } else {
      setStrong([...strong, subject]);
    }
  };

  const toggleWeak = (subject) => {

    if (weak.includes(subject)) {
      setWeak(weak.filter((item) => item !== subject));
    } else {
      setWeak([...weak, subject]);
    }
  };

  return (
    <Background>

      <GlassCard>

        <ProgressBar step={5} />

        <h1 className="text-3xl font-bold mb-8">
          Your strengths & weak areas
        </h1>

        {/* Strong */}
        <div className="mb-8">

          <h2 className="text-lg font-semibold mb-4 text-green-400">
            Strong Skills
          </h2>

          <div className="flex flex-wrap gap-3">

            {subjects.map((subject) => (

              <button
                key={subject}
                onClick={() => toggleStrong(subject)}
                className={`px-4 py-2 rounded-xl border transition-all ${
                  strong.includes(subject)
                    ? "border-green-500 bg-green-500/10"
                    : "border-white/10 bg-white/5"
                }`}
              >
                {subject}
              </button>

            ))}

          </div>

        </div>

        {/* Weak */}
        <div className="mb-8">

          <h2 className="text-lg font-semibold mb-4 text-red-400">
            Weak Skills
          </h2>

          <div className="flex flex-wrap gap-3">

            {subjects.map((subject) => (

              <button
                key={subject}
                onClick={() => toggleWeak(subject)}
                className={`px-4 py-2 rounded-xl border transition-all ${
                  weak.includes(subject)
                    ? "border-red-500 bg-red-500/10"
                    : "border-white/10 bg-white/5"
                }`}
              >
                {subject}
              </button>

            ))}

          </div>

        </div>

        <GlowButton
          text="Generate AI Plan"
          onClick={() => navigate("/onboarding/analysis")}
        />

      </GlassCard>

    </Background>
  );
}