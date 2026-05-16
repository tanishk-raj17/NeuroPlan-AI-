// src/sections/Demo.jsx

import { useState, useEffect } from "react";

function Demo() {
  const [text, setText] = useState("");

  // Typing effect (AI response)
  useEffect(() => {
    const message = "DSA means Data Structures and Algorithms. It helps you organize data and solve problems efficiently.";
    let i = 0;

    const interval = setInterval(() => {
      setText((prev) => prev + message.charAt(i));
      i++;
      if (i === message.length) clearInterval(interval);
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="demo" className="py-20 px-6 text-center text-white">

      <h2 className="text-3xl md:text-5xl font-bold mb-6">
        Your Personal AI Tutor
      </h2>

      <p className="text-gray-400 mb-10 max-w-xl mx-auto">
        Ask anything and get instant AI-powered explanations.
      </p>

      {/* Chat UI */}
      <div className="max-w-2xl mx-auto bg-white/5 border border-white/10 p-6 rounded-2xl text-left">

        {/* User */}
        <div className="mb-4">
          <p className="text-gray-400 text-sm">User</p>
          <div className="bg-black/40 p-3 rounded-lg">
            Explain DSA in simple terms
          </div>
        </div>

        {/* AI */}
        <div>
          <p className="text-purple-400 text-sm">AI</p>
          <div className="bg-black/40 p-3 rounded-lg">
            {text}
          </div>
        </div>

      </div>

    </section>
  );
}

export default Demo;