// src/sections/USP.jsx

function USP() {
  return (
    <section className="py-24 px-6 bg-[#0f0f0f]">

      <div className="max-w-4xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Not Just a Study Tool
        </h2>

        {/* Highlight Line */}
        <p className="text-xl md:text-2xl text-purple-400 font-semibold mb-8">
          It's an AI-powered thinking system that grows with you.
        </p>

        {/* Description */}
        <p className="text-gray-400 max-w-2xl mx-auto">
          Unlike traditional apps that only track your tasks, Neuroplan AI understands your learning behavior,
          adapts to your progress, and continuously improves your study strategy.
        </p>

      </div>

    </section>
  );
}

export default USP;