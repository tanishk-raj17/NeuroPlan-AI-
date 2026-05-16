// src/sections/Hero.jsx

function Hero() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-16 pt-32 gap-10 text-white">

      {/* LEFT CONTENT */}
      <div className="max-w-xl">

        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          Stop Wasting Time. <br />
          <span className="text-purple-400">Let AI Plan Your Studies.</span>
        </h1>

        <p className="text-gray-300 mb-8 text-lg">
          Neuroplan AI analyzes your study behavior, detects weak areas, 
          and creates a personalized study system that adapts with you.
        </p>

        {/* Buttons */}
        <div className="flex gap-4">
          <a
            href="/signup"
            className="bg-gradient-to-r from-purple-500 to-blue-500 px-6 py-3 rounded-lg font-semibold hover:scale-105 transition"
          >
            🚀 Get Started Free
          </a>

          <a
            href="#demo"
            className="border border-gray-500 px-6 py-3 rounded-lg hover:bg-white/10 transition"
          >
            ▶ See How It Works
          </a>
        </div>

        {/* Trust Line */}
        <div className="mt-6 text-sm text-gray-400">
          ⭐ 4.9/5 trusted by 10,000+ students
        </div>

      </div>

      {/* RIGHT SIDE (Dashboard Preview) */}
      <div className="w-full md:w-1/2">

        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl">

          <h3 className="text-lg font-semibold mb-4 text-purple-400">
            Study Planner
          </h3>

          <div className="space-y-3">

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

          {/* Mini Graph */}
          <div className="mt-6">
            <p className="text-sm text-gray-400 mb-2">Progress</p>
            <div className="h-2 bg-gray-700 rounded-full">
              <div className="h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full w-3/4"></div>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;