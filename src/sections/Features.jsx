// src/sections/Features.jsx

function Features() {
  return (
    <section id="features" className="py-24 px-6 bg-[#0d0d0d]">

      <div className="max-w-7xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Powerful Features That Actually Work
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto mb-16">
          Neuroplan AI is not just a planner — it's a complete intelligent system that helps you stay consistent and improve daily.
        </p>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* AI Planner */}
          <div id="ai-planner" className="glass p-6 rounded-xl border border-white/10">
            <h3 className="text-xl font-semibold mb-3">🧠 AI Study Planner</h3>
            <p className="text-gray-400">
              Get a personalized daily study plan based on your goals, available time, and learning speed.
            </p>
          </div>

          {/* Analytics */}
          <div id="analytics" className="glass p-6 rounded-xl border border-white/10">
            <h3 className="text-xl font-semibold mb-3">📊 Smart Analytics</h3>
            <p className="text-gray-400">
              Track your progress and identify where you're improving and where you need focus.
            </p>
          </div>

          {/* Scheduler */}
          <div id="scheduler" className="glass p-6 rounded-xl border border-white/10">
            <h3 className="text-xl font-semibold mb-3">📅 Daily Scheduler</h3>
            <p className="text-gray-400">
              Organize your entire day with smart scheduling and reminders.
            </p>
          </div>

          {/* AI Tutor */}
          <div id="ai-tutor" className="glass p-6 rounded-xl border border-white/10">
            <h3 className="text-xl font-semibold mb-3">🤖 AI Tutor</h3>
            <p className="text-gray-400">
              Ask questions anytime and get instant, easy-to-understand answers.
            </p>
          </div>

          {/* Weakness */}
          <div id="weakness" className="glass p-6 rounded-xl border border-white/10">
            <h3 className="text-xl font-semibold mb-3">🧩 Weakness Detection</h3>
            <p className="text-gray-400">
              Automatically detects weak areas and ensures you improve them.
            </p>
          </div>

          {/* Auto Plan */}
          <div id="auto-plan" className="glass p-6 rounded-xl border border-white/10">
            <h3 className="text-xl font-semibold mb-3">⚡ Auto Plan Updates</h3>
            <p className="text-gray-400">
              Your plan evolves automatically as you progress — no manual changes needed.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Features;