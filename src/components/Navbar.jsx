// src/components/Navbar.jsx

function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-lg bg-white/5 border-b border-white/10">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          Neuroplan AI
        </h1>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8 text-gray-300 text-sm">
          <a href="#features" className="hover:text-white transition">Features</a>
          <a href="#demo" className="hover:text-white transition">Demo</a>
          <a href="#how" className="hover:text-white">How it Works</a>
          <a href="#ai-planner" className="hover:text-white">AI Planner</a>
          <a href="#analytics" className="hover:text-white">Analytics</a>
          <a href="#scheduler" className="hover:text-white">Scheduler</a>
          <a href="#ai-tutor" className="hover:text-white">AI Tutor</a>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-4">

          {/* Login */}
          <a href="/login">
            <button className="px-4 py-1.5 rounded-lg border border-white/20 text-gray-300 hover:bg-white/10 transition">
              Login
            </button>
          </a>

          {/* Signup */}
          <a href="/signup">
            <button className="px-5 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg hover:scale-105 transition">
              SignUp
            </button>
          </a>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;