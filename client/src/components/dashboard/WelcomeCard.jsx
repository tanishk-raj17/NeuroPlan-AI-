import {
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

export default function WelcomeCard() {

  return (

    <div className="welcome-card">

      <div className="welcome-left">

        <div className="ai-tag">

          <Sparkles size={16} />

          <span>
            AI Personalized Learning
          </span>

        </div>

        <h1>

          Welcome back,
          <span> Tanishk 👋</span>

        </h1>

        <p>

          Your AI study engine has
          prepared today's optimized
          roadmap based on your
          learning behavior and
          weak areas.

        </p>

        <div className="welcome-buttons">

          <button className="primary-btn">

            Continue Learning

          </button>

          <button className="secondary-btn">

            View Analytics

            <ArrowUpRight size={18} />

          </button>

        </div>

      </div>

      <div className="welcome-right">

        <div className="brain-circle">

          🧠

        </div>

      </div>

    </div>
  );
}