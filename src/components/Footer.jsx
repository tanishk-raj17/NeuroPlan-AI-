// src/components/Footer.jsx ✅

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-white/5 backdrop-blur-lg">
      
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">

        {/* Logo + About */}
        <div>
          <h2 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Neuroplan AI
          </h2>
          <p className="text-gray-400 mt-4 text-sm">
            An AI-powered system that helps you plan, track, and improve your studies with smart automation.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="text-gray-400 space-y-2 text-sm">
            <li><a href="#features" className="hover:text-white">Features</a></li>
            <li><a href="#demo" className="hover:text-white">Demo</a></li>
            <li><a href="/login" className="hover:text-white">Login</a></li>
            <li><a href="/signup" className="hover:text-white">Signup</a></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="font-semibold mb-3">Connect</h3>
          <div className="flex gap-4 text-gray-400 text-xl">
            <span>🌐</span>
            <span>🐦</span>
            <span>💼</span>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="text-center text-gray-500 text-sm pb-6">
        © 2026 Neuroplan AI • All rights reserved
      </div>

    </footer>
  );
}

export default Footer;