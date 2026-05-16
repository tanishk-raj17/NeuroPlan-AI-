function SmartPriority() {

  const priorities = [

    {
      subject: "DSA",
      level: "High Priority",
    },

    {
      subject: "React",
      level: "Medium Priority",
    },

    {
      subject: "JavaScript",
      level: "Revision",
    },

  ];

  return (

    <div className="priority-card">

      <h2>

        Smart Priorities

      </h2>

      <div className="priority-wrapper">

        {priorities.map((item, index) => (

          <div
            className="priority-item"
            key={index}
          >

            <h3>

              {item.subject}

            </h3>

            <p>

              {item.level}

            </p>

          </div>

        ))}

      </div>

    </div>

  );
}

export default SmartPriority;