export default function AnalyticsCard() {

  return (

    <div className="analytics-card">

      <div className="card-header">

        <h2>
          Performance Analytics
        </h2>

      </div>

      <div className="analytics-stats">

        <div className="analytics-box">

          <div>

            <h3>87%</h3>

            <p>Focus Score</p>

          </div>

        </div>

        <div className="analytics-box">

          <div>

            <h3>12</h3>

            <p>Day Streak</p>

          </div>

        </div>

      </div>

      <div className="analytics-chart">

        <div className="chart-bar h1"></div>

        <div className="chart-bar h2"></div>

        <div className="chart-bar h3"></div>

        <div className="chart-bar h4"></div>

        <div className="chart-bar h5"></div>

        <div className="chart-bar h6"></div>

        <div className="chart-bar h7"></div>

      </div>

    </div>

  );
}