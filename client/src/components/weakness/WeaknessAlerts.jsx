function WeaknessAlerts() {

  const alerts = [

    "You skipped recursion practice 3 times.",

    "Graph problems accuracy dropped this week.",

    "Low focus detected after midnight study sessions.",

  ];

  return (

    <div className="weakness-alerts">

      <h2>

        AI Alerts

      </h2>

      <div className="alerts-list">

        {alerts.map((alert, index) => (

          <div
            className="alert-item"
            key={index}
          >

            ⚠️ {alert}

          </div>

        ))}

      </div>

    </div>

  );
}

export default WeaknessAlerts;