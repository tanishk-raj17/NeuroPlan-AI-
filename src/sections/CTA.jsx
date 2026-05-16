// src/sections/Cta.jsx

function Cta() {
  return (
    <section className="py-28 px-6 bg-[#0f0f0f] text-center">

      <div className="max-w-3xl mx-auto">

        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Stop Wasting Time. Start Studying Smart.
        </h2>

        <p className="text-gray-400 mb-10 text-lg">
          Join thousands of students using Neuroplan AI to plan better, stay consistent,
          and achieve their goals faster.
        </p>

        <a
          href="/signup"
          className="bg-gradient-to-r from-purple-500 to-blue-500 px-10 py-4 rounded-xl text-lg font-semibold shadow-lg hover:scale-105 transition inline-block"
        >
          🚀 Get Started Free
        </a>

        <p className="text-gray-500 mt-4 text-sm">
          No credit card required • Free to start
        </p>

      </div>

    </section>
  );
}

export default Cta;