import Background
from "../../components/onboarding/Background";

import GlassCard
from "../../components/onboarding/GlassCard";

import ProgressBar
from "../../components/onboarding/ProgressBar";

import GlowButton
from "../../components/onboarding/GlowButton";

export default function AIAnalysis() {
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
        <GlowButton
          text="Go To Dashboard"
        />
      </GlassCard>
    </Background>
  );
}