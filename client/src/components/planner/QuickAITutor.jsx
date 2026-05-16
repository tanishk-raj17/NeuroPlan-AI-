function QuickAITutor() {

  return (

    <div className="quick-ai-card">

      <h2>

        Neuro AI Tutor

      </h2>

      <div className="quick-ai-message">

        Based on your current
        progress, revise recursion
        before moving to trees.

      </div>

      <input
        type="text"
        placeholder="Ask Neuro AI..."
        className="quick-ai-input"
      />

      <button className="quick-ai-btn">

        Ask AI

      </button>

    </div>

  );
}

export default QuickAITutor;