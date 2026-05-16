function RecoveryPlan() {

  const plan = [

    "Day 1 → Arrays",

    "Day 2 → Recursion",

    "Day 3 → Trees",

    "Day 4 → Graphs",

  ];

  return (

    <div className="recovery-plan">

      <h2>

        AI Recovery Plan

      </h2>

      <div className="plan-list">

        {plan.map((item, index) => (

          <div
            className="plan-item"
            key={index}
          >

            {item}

          </div>

        ))}

      </div>

    </div>

  );
}

export default RecoveryPlan;