import {
  Sparkles,
  Mic,
  SendHorizonal,
} from "lucide-react";

export default function TutorCard() {

  return (

    <div className="tutor-card">

      <div className="card-header">

        <h2>
          Neuro AI Tutor
        </h2>

        <Sparkles size={20} />

      </div>

      <div className="ai-chat-box">

        <div className="ai-message">

          <div className="ai-avatar">
            🧠
          </div>

          <div className="message-bubble">

            Based on your recent
            performance, I recommend
            revising recursion before
            moving to trees.

          </div>

        </div>

        <div className="user-message">

          <div className="message-bubble user">

            Generate today's roadmap.

          </div>

        </div>

      </div>

      <div className="ai-input-box">

        <button className="mic-btn">

          <Mic size={18} />

        </button>

        <input
          type="text"
          placeholder="Ask Neuro AI anything..."
        />

        <button className="send-btn">

          <SendHorizonal size={18} />

        </button>

      </div>

    </div>
  );
}