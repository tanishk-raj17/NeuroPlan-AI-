// src/sections/Testimonials.jsx

function Testimonials() {
  return (
    <section className="py-24 px-6 bg-[#0d0d0d]">

      <div className="max-w-6xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          What Students Are Saying
        </h2>

        <p className="text-gray-400 mb-16">
          Real users. Real results.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* Testimonial 1 */}
          <div className="glass p-6 rounded-xl border border-white/10 text-left">
            <p className="text-gray-300 mb-4">
              "Neuroplan AI completely changed how I study. I finally feel consistent!"
            </p>
            <h4 className="font-semibold">— Rahul, JEE Aspirant</h4>
          </div>

          {/* Testimonial 2 */}
          <div className="glass p-6 rounded-xl border border-white/10 text-left">
            <p className="text-gray-300 mb-4">
              "The AI planner is insane. It tells me exactly what to do daily."
            </p>
            <h4 className="font-semibold">— Priya, College Student</h4>
          </div>

          {/* Testimonial 3 */}
          <div className="glass p-6 rounded-xl border border-white/10 text-left">
            <p className="text-gray-300 mb-4">
              "I improved my coding consistency because of this system."
            </p>
            <h4 className="font-semibold">— Aman, Developer</h4>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Testimonials;