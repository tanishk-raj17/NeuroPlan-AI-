import {
  Clock3,
  CircleCheckBig,
  PlayCircle,
} from "lucide-react";

export default function StudyPlan() {

  const tasks = [

    {
      title: "React Dashboard UI",
      time: "2 Hours",
      completed: true,
    },

    {
      title: "DSA Problem Solving",
      time: "1.5 Hours",
      completed: false,
    },

    {
      title: "JavaScript Revision",
      time: "1 Hour",
      completed: false,
    },

  ];

  return (

    <div className="study-plan">

      <div className="section-header">

        <div>

          <h2>
            AI Study Plan
          </h2>

          <p>
            Optimized for maximum
            productivity
          </p>

        </div>

        <button className="start-focus-btn">

          <PlayCircle size={18} />

          Start Focus Mode

        </button>

      </div>

      <div className="task-list">

        {tasks.map((task, index) => (

          <div
            className="task-card"
            key={index}
          >

            <div className="task-left">

              <div
                className={`task-check ${
                  task.completed
                    ? "completed"
                    : ""
                }`}
              >

                <CircleCheckBig size={18} />

              </div>

              <div>

                <h3>
                  {task.title}
                </h3>

                <p>

                  AI Recommended
                  Session

                </p>

              </div>

            </div>

            <div className="task-time">

              <Clock3 size={16} />

              <span>
                {task.time}
              </span>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}