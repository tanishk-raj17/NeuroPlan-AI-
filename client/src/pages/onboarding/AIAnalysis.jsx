import { useNavigate }
from "react-router-dom";

import Background
from "../../components/onboarding/Background";

import GlassCard
from "../../components/onboarding/GlassCard";

import ProgressBar
from "../../components/onboarding/ProgressBar";

export default function AIAnalysis() {

  const navigate =
    useNavigate();

  return (

    <Background>

      <GlassCard>

        <ProgressBar step={6} />

        <h1
          style={{
            fontSize: "32px",
            fontWeight: "bold",
            marginBottom: "30px",
          }}
        >

          Your Neuroplan is Ready

        </h1>

        <div
          style={{
            color: "#9ca3af",
            marginBottom: "32px",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >

          <p>
            Analyzing your learning pattern...
          </p>

          <p>
            Detecting weak areas...
          </p>

          <p>
            Generating AI roadmap...
          </p>

        </div>

        <button

          onClick={() => {

            navigate(
              "/dashboard"
            );
          }}

          style={{

            width: "100%",

            padding: "14px",

            borderRadius: "16px",

            border: "none",

            background:
              "linear-gradient(to right, #3b82f6, #8b5cf6)",

            color: "white",

            fontWeight: "bold",

            cursor: "pointer",

          }}
        >

          Go To Dashboard

        </button>

      </GlassCard>

    </Background>
  );
}