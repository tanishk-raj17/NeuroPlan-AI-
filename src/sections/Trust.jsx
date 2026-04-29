// src/sections/Trust.jsx

function Trust() {
  return (
    <section className="py-10 px-6 text-center border-t border-gray-800">

      {/* Rating */}
      <div className="flex justify-center items-center gap-2 mb-4">
        <span className="text-yellow-400 text-xl">⭐</span>
        <span className="text-lg font-semibold">4.9/5</span>
        <span className="text-gray-400">trusted by 10,000+ students</span>
      </div>

      {/* Logos */}
      <div className="flex justify-center items-center gap-8 flex-wrap opacity-70">

        <span className="text-gray-400 text-sm">Google</span>
        <span className="text-gray-400 text-sm">Microsoft</span>
        <span className="text-gray-400 text-sm">Amazon</span>
        <span className="text-gray-400 text-sm">Meta</span>
        <span className="text-gray-400 text-sm">Netflix</span>

      </div>

    </section>
  );
}

export default Trust;