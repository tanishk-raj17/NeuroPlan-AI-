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

console.log("Background:", Background);

console.log("GlassCard:", GlassCard);

console.log("ProgressBar:", ProgressBar);

console.log("GlowButton:", GlowButton);

export default function StudyTime() {

  const navigate = useNavigate();

  const [hours, setHours] =
    useState(4);

  return (

    <Background>

      <GlassCard>

        <ProgressBar step={4} />

        <h1
          style={{
            fontSize: "30px",
            fontWeight: "bold",
            marginBottom: "30px",
          }}
        >

          How much time can you study daily?

        </h1>



        <div
          style={{

            textAlign: "center",

            fontSize: "60px",

            fontWeight: "bold",

            color: "#8b5cf6",

            marginBottom: "20px",

          }}
        >

          {hours}h

        </div>



        <input

          type="range"

          min="1"

          max="10"

          value={hours}

          onChange={(e) =>
            setHours(e.target.value)
          }

          style={{

            width: "100%",

            marginBottom: "32px",

            cursor: "pointer",

          }}
        />



        <GlowButton
          text="Next"

          onClick={() =>
            navigate("/onboarding/strength")
          }
        />

      </GlassCard>

    </Background>

  );
}