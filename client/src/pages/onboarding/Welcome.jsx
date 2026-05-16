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

export default function Welcome() {

  const navigate = useNavigate();

  return (

    <Background>

      <GlassCard>

        <ProgressBar step={1} />

        <h1
          style={{
            fontSize: "40px",
            fontWeight: "bold",
            marginBottom: "16px",
          }}
        >

          Welcome to

          <span
            style={{
              display: "block",
              color: "#8b5cf6",
            }}
          >
            Neuroplan AI
          </span>

        </h1>

        <p
          style={{
            color: "#9ca3af",
            marginBottom: "32px",
          }}
        >
          Build your intelligent study system
        </p>

        <GlowButton
          text="Get Started"

          onClick={() =>
            navigate("/onboarding/goal")
          }
        />

      </GlassCard>

    </Background>

  );
}