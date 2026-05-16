// src/sections/How.jsx

function How() {
  return (
    <section className="py-24 px-6 bg-[#0f0f0f]">

      <div className="max-w-6xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          How Neuroplan Works
        </h2>

        <p className="text-gray-400 mb-16">
          A simple 4-step system to transform your study routine
        </p>

        {/* Steps */}
        <div className="grid md:grid-cols-4 gap-8">

          {/* Step 1 */}
          <div className="glass p-6 rounded-xl border border-white/10">
            <h3 className="text-lg font-semibold mb-2">1️⃣ Set Your Goal</h3>
            <p className="text-gray-400">
              Tell the AI what you want to achieve.
            </p>
          </div>

          {/* Step 2 */}
          <div className="glass p-6 rounded-xl border border-white/10">
            <h3 className="text-lg font-semibold mb-2">2️⃣ AI Creates Plan</h3>
            <p className="text-gray-400">
              Get a personalized daily study roadmap.
            </p>
          </div>

          {/* Step 3 */}
          <div className="glass p-6 rounded-xl border border-white/10">
            <h3 className="text-lg font-semibold mb-2">3️⃣ Study & Track</h3>
            <p className="text-gray-400">
              Follow your plan and track your progress.
            </p>
          </div>

          {/* Step 4 */}
          <div className="glass p-6 rounded-xl border border-white/10">
            <h3 className="text-lg font-semibold mb-2">4️⃣ AI Improves You</h3>
            <p className="text-gray-400">
              The system adapts and makes you better daily.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default How;