import {
  Search,
  Bell,
  Flame,
  Sparkles,
} from "lucide-react";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="search-bar">
        <Search size={18} />
        <input
          type="text"
          placeholder="Search anything..."
        />
      </div>
      <div className="topbar-right">
        <div className="streak-badge">
          <Flame size={18} />
          <span>12 Day Streak</span>
        </div>
        <div className="ai-badge">
          <Sparkles size={18} />
          <span>AI Active</span>
        </div>
        <div className="notification">
          <Bell size={20} />
          <div className="notification-dot">
            3
          </div>

        </div>

        <div className="profile-card">

          <img
            src="https://i.pravatar.cc/100"
            alt="profile"
          />
          <div>
            <h4>Tanishk</h4>
            <p>View Profile</p>
          </div>
        </div>
      </div>
    </div>
  );
}