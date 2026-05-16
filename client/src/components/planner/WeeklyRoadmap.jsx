function WeeklyRoadmap() {

  const roadmap = [

    "Complete React Dashboard UI",

    "Practice 20 DSA Problems",

    "Revise JavaScript Concepts",

    "Build Mini AI Project",

    "Improve Communication Skills",

  ];

  return (

    <div className="weekly-roadmap-card">

      <h2>

        Weekly AI Roadmap

      </h2>

      <div className="roadmap-list">

        {roadmap.map((item, index) => (

          <div
            className="roadmap-item"
            key={index}
          >

            <div className="roadmap-dot"></div>

            <p>

              {item}

            </p>

          </div>

        ))}

      </div>

    </div>

  );
}

export default WeeklyRoadmap;