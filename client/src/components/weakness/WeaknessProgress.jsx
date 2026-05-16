function WeaknessProgress() {

  return (

    <div className="weakness-progress">

      <h2>

        Weakness Recovery Progress

      </h2>

      <div className="progress-item">

        <span>

          Recursion

        </span>

        <div className="progress-line">

          <div
            className="progress-fill"
            style={{
              width: "44%",
            }}
          ></div>

        </div>

      </div>

      <div className="progress-item">

        <span>

          React Hooks

        </span>

        <div className="progress-line">

          <div
            className="progress-fill"
            style={{
              width: "63%",
            }}
          ></div>

        </div>

      </div>

    </div>

  );
}

export default WeaknessProgress;