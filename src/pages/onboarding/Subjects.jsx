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

export default function Subjects() {

  const navigate = useNavigate();

  const [selected, setSelected] =
    useState([]);

  const subjects = [

    "HTML",

    "CSS",

    "JavaScript",

    "React",

    "Node.js",

    "DSA",

  ];



  const toggleSubject = (subject) => {

    if (selected.includes(subject)) {

      setSelected(
        selected.filter(
          (item) => item !== subject
        )
      );

    } else {

      setSelected([
        ...selected,
        subject
      ]);
    }
  };



  return (

    <Background>

      <GlassCard>

        <ProgressBar step={3} />

        <h1
          style={{
            fontSize: "32px",
            fontWeight: "bold",
            marginBottom: "24px",
          }}
        >

          Select Subjects

        </h1>



        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "14px",
            marginBottom: "32px",
          }}
        >

          {subjects.map((subject) => (

            <button

              key={subject}

              onClick={() =>
                toggleSubject(subject)
              }

              style={{

                padding:
                  "12px 18px",

                borderRadius:
                  "16px",

                border:
                  selected.includes(subject)
                    ? "1px solid #8b5cf6"
                    : "1px solid rgba(255,255,255,0.1)",

                background:
                  selected.includes(subject)
                    ? "rgba(139,92,246,0.15)"
                    : "rgba(255,255,255,0.05)",

                color: "white",

                cursor: "pointer",

              }}
            >

              {subject}

            </button>

          ))}

        </div>



        <GlowButton
          text="Next"

          onClick={() =>
            navigate("/onboarding/study-time")
          }
        />

      </GlassCard>

    </Background>

  );
}