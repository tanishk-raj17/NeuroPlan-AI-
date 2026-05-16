function WeaknessHeatmap() {

  const boxes =
    new Array(42).fill(0);

  return (

    <div className="weakness-heatmap">

      <h2>

        Weakness Heatmap

      </h2>

      <div className="heatmap-grid">

        {boxes.map((_, index) => (

          <div
            className="heatmap-box"
            key={index}
          ></div>

        ))}

      </div>

    </div>

  );
}

export default WeaknessHeatmap;