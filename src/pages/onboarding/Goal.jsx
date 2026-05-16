import { useState }
from "react";

import { useNavigate }
from "react-router-dom";

import Background
from "../../components/onboarding/Background";

import GlassCard
from "../../components/onboarding/GlassCard";

import ProgressBar
from "../../components/onboarding/ProgressBar";

import GlowButton
from "../../components/onboarding/GlowButton";

export default function Goal() {

  const navigate = useNavigate();

  const [selected, setSelected] =
    useState("");

  const goals = [

    "Placement Prep",

    "Web Development",

    "DSA",

    "College Study",

    "Productivity",

  ];

  return (

    <Background>

      <GlassCard>

        <ProgressBar step={2} />

        <h1
          style={{
            fontSize: "32px",
            fontWeight: "bold",
            marginBottom: "24px",
          }}
        >

          What is your goal?

        </h1>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            marginBottom: "32px",
          }}
        >

          {goals.map((goal) => (

            <button

              key={goal}

              onClick={() =>
                setSelected(goal)
              }

              style={{

                width: "100%",

                padding: "16px",

                borderRadius: "18px",

                border:
                  selected === goal
                    ? "1px solid #8b5cf6"
                    : "1px solid rgba(255,255,255,0.1)",

                background:
                  selected === goal
                    ? "rgba(139,92,246,0.15)"
                    : "rgba(255,255,255,0.05)",

                color: "white",

                cursor: "pointer",

              }}
            >

              {goal}

            </button>

          ))}

        </div>

        <GlowButton
          text="Next"

          onClick={() =>
            navigate("/onboarding/subjects")
          }
        />

      </GlassCard>

    </Background>

  );
}