function WeaknessCard() {

  const topics = [

    {
      topic: "Recursion",
      score: "28%",
    },

    {
      topic: "React Hooks",
      score: "42%",
    },

    {
      topic: "DBMS Queries",
      score: "51%",
    },

  ];

  return (

    <div className="weakness-card-wrapper">

      {topics.map((item, index) => (

        <div
          className="weakness-card"
          key={index}
        >

          <h2>

            {item.topic}

          </h2>

          <p>

            Weakness Score

          </p>

          <div className="weakness-score">

            {item.score}

          </div>

        </div>

      ))}

    </div>

  );
}

export default WeaknessCard;