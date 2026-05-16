import {
  ShieldAlert,
  BrainCircuit,
  ArrowUpRight,
} from "lucide-react";

export default function WeaknessCard() {

  return (

    <div className="weakness-card">

      <div className="card-header">

        <h2>
          Weakness Detector
        </h2>

        <ShieldAlert size={20} />

      </div>

      <div className="weakness-content">

        <div className="weakness-highlight">

          <div className="weakness-icon">

            <BrainCircuit size={26} />

          </div>

          <div>

            <h3>
              Problem Solving
            </h3>

            <p>

              AI detected slower
              solving speed in DSA
              patterns.

            </p>

          </div>

        </div>

        <div className="weakness-progress">

          <div className="progress-label">

            <span>
              Improvement Needed
            </span>

            <span>
              72%
            </span>

          </div>

          <div className="progress-bar">

            <div className="progress-fill">

            </div>

          </div>

        </div>

        <button className="improve-btn">

          Improve with AI

          <ArrowUpRight size={18} />

        </button>

      </div>

    </div>
  );
}