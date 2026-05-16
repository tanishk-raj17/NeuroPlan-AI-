function RecommendedFixes() {

  const fixes = [

    "Practice recursion daily",

    "Revise React Hooks",

    "Solve DBMS query exercises",

    "Reduce multitasking",

  ];

  return (

    <div className="recommended-fixes">

      <h2>

        AI Recommended Fixes

      </h2>

      <div className="fixes-list">

        {fixes.map((fix, index) => (

          <div
            className="fix-item"
            key={index}
          >

            {fix}

          </div>

        ))}

      </div>

    </div>

  );
}

export default RecommendedFixes;