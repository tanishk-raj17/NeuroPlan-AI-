// src/sections/Dashboard.jsx

function Dashboard() {
  return (
    <section className="py-24 px-6 bg-[#0f0f0f]">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            See How Neuroplan Works
          </h2>
          <p className="text-gray-400">
            Your personalized study system, powered by AI
          </p>
        </div>

        {/* Dashboard UI */}
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT: Features Text */}
          <div className="space-y-6">

            <div>
              <h3 className="text-xl font-semibold mb-2">📅 Smart Daily Planner</h3>
              <p className="text-gray-400">
                Automatically generated study schedule based on your goals and progress.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">📊 Progress Tracking</h3>
              <p className="text-gray-400">
                Visual insights that show how much you've improved.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">🤖 AI Suggestions</h3>
              <p className="text-gray-400">
                Get daily recommendations to improve faster.
              </p>
            </div>

          </div>

          {/* RIGHT: Fake Dashboard */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl">

            <h3 className="text-purple-400 mb-4">📊 Study Dashboard</h3>

            <div className="space-y-4">

              {/* Task */}
              <div className="flex justify-between bg-black/40 p-3 rounded-lg">
                <span>Math Revision</span>
                <span className="text-green-400">✔ Done</span>
              </div>

              <div className="flex justify-between bg-black/40 p-3 rounded-lg">
                <span>DSA Practice</span>
                <span className="text-yellow-400">⏳ Pending</span>
              </div>

              <div className="flex justify-between bg-black/40 p-3 rounded-lg">
                <span>Physics Concepts</span>
                <span className="text-blue-400">In Progress</span>
              </div>

            </div>

            {/* Progress Bar */}
            <div className="mt-6">
              <p className="text-sm text-gray-400 mb-2">Overall Progress</p>
              <div className="h-2 bg-gray-700 rounded-full">
                <div className="h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full w-3/4"></div>
              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Dashboard;