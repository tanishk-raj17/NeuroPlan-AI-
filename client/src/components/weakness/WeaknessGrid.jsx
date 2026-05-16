function WeaknessGrid() {

  const topics = [

    "Arrays",

    "Recursion",

    "Trees",

    "Graphs",

    "React",

    "DBMS",

    "Node.js",

    "MongoDB",

  ];

  return (

    <div className="weakness-grid-card">

      <h2>

        Topic Analysis Grid

      </h2>

      <div className="weakness-grid">

        {topics.map((topic, index) => (

          <div
            className="grid-topic"
            key={index}
          >

            {topic}

          </div>

        ))}

      </div>

    </div>

  );
}

export default WeaknessGrid;