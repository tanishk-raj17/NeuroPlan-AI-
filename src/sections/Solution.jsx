// src/sections/Solution.jsx

function Solution() {
  return (
    <section className="py-20 px-6 bg-[#0f0f0f]">

      <div className="max-w-6xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          🚀 Meet Your Smart AI Study Partner
        </h2>

        <p className="text-gray-400 mb-12">
          Neuroplan AI solves your study problems with intelligent automation.
        </p>

        {/* Solution Grid */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* Solution 1 */}
          <div className="glass p-6 rounded-xl border border-gray-800">
            <h3 className="text-xl font-semibold mb-3">🧠 Personalized Study Plan</h3>
            <p className="text-gray-400">
              AI creates a custom plan based on your goals, time, and performance.
            </p>
          </div>

          {/* Solution 2 */}
          <div className="glass p-6 rounded-xl border border-gray-800">
            <h3 className="text-xl font-semibold mb-3">🔍 Weakness Detection</h3>
            <p className="text-gray-400">
              Automatically finds your weak areas and focuses more on them.
            </p>
          </div>

          {/* Solution 3 */}
          <div className="glass p-6 rounded-xl border border-gray-800">
            <h3 className="text-xl font-semibold mb-3">⚡ Smart Adaptation</h3>
            <p className="text-gray-400">
              Your plan updates daily based on your progress and learning speed.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Solution;