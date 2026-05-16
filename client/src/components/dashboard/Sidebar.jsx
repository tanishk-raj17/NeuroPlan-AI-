import {
  LayoutDashboard,
  Brain,
  BookOpen,
  BarChart3,
  Target,
  ShieldAlert,
  StickyNote,
  Settings,
} from "lucide-react";

export default function Sidebar() {

  const menuItems = [
    {
      icon: <LayoutDashboard size={20} />,
      label: "Dashboard",
    },
    {
      icon: <BookOpen size={20} />,
      label: "AI Study Planner",
    },
    {
      icon: <Brain size={20} />,
      label: "AI Tutor",
    },
    {
      icon: <BarChart3 size={20} />,
      label: "Analytics",
    },
    {
      icon: <Target size={20} />,
      label: "Goals",
    },
    {
      icon: <ShieldAlert size={20} />,
      label: "Weakness Report",
    },
    {
      icon: <StickyNote size={20} />,
      label: "Notes",
    },
    {
      icon: <Settings size={20} />,
      label: "Settings",
    },
  ];

  return (

    <div className="sidebar">

      <div className="logo">

        <div className="logo-icon">
          🧠
        </div>

        <h2>NeuroPlan AI</h2>

      </div>

      <div className="menu">

        {menuItems.map((item, index) => (

          <div
            className={`menu-item ${
              index === 0 ? "active" : ""
            }`}
            key={index}
          >

            {item.icon}

            <span>{item.label}</span>

          </div>

        ))}

      </div>

      <div className="upgrade-card">

        <h3>Upgrade to Pro</h3>

        <p>
          Unlock unlimited AI features
          and smart insights.
        </p>

        <button>
          Upgrade Now
        </button>

      </div>

    </div>

  );
}