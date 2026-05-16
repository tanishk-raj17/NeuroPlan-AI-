// src/sections/Problem.jsx

function Problem() {
  return (
    <section className="py-20 px-6 bg-[#0d0d0d]">

      <div className="max-w-6xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          😩 Struggling With Your Studies?
        </h2>

        <p className="text-gray-400 mb-12">
          Most students face these problems every day...
        </p>

        {/* Problems Grid */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* Problem 1 */}
          <div className="glass p-6 rounded-xl border border-gray-800">
            <h3 className="text-xl font-semibold mb-3">📚 Don’t know what to study</h3>
            <p className="text-gray-400">
              You waste hours deciding what to study instead of actually studying.
            </p>
          </div>

          {/* Problem 2 */}
          <div className="glass p-6 rounded-xl border border-gray-800">
            <h3 className="text-xl font-semibold mb-3">🧠 Forget topics quickly</h3>
            <p className="text-gray-400">
              You study today but forget everything in a few days.
            </p>
          </div>

          {/* Problem 3 */}
          <div className="glass p-6 rounded-xl border border-gray-800">
            <h3 className="text-xl font-semibold mb-3">📉 No progress tracking</h3>
            <p className="text-gray-400">
              You don’t know if you're improving or just wasting time.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Problem;