function SubjectTags() {

  const subjects = [

    "React",

    "DSA",

    "JavaScript",

    "Node.js",

    "MongoDB",

  ];

  return (

    <div className="subject-tags-card">

      <h2>

        Active Subjects

      </h2>

      <div className="subject-tags-wrapper">

        {subjects.map((subject, index) => (

          <div
            className="subject-tag"
            key={index}
          >

            {subject}

          </div>

        ))}

      </div>

    </div>

  );
}

export default SubjectTags;