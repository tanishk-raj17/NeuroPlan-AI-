function TimetableCard() {

  const tasks = [

    {
      time: "8:00 PM",
      title: "React Dashboard Practice",
      type: "Deep Focus",
      duration: "2 Hours",
    },

    {
      time: "10:15 PM",
      title: "Break + Walk",
      type: "Recovery",
      duration: "15 Min",
    },

    {
      time: "10:30 PM",
      title: "DSA Recursion Problems",
      type: "Problem Solving",
      duration: "1.5 Hours",
    },

    {
      time: "12:00 AM",
      title: "JavaScript Revision",
      type: "Revision",
      duration: "45 Min",
    },

  ];

  return (

    <div className="timetable-wrapper">

      {tasks.map((task, index) => (

        <div
          className="timetable-card"
          key={index}
        >

          <div className="task-time">

            {task.time}

          </div>

          <div className="task-content">

            <h2>

              {task.title}

            </h2>

            <p>

              {task.type}

            </p>

          </div>

          <div className="task-duration">

            {task.duration}

          </div>

        </div>

      ))}

    </div>

  );
}

export default TimetableCard;