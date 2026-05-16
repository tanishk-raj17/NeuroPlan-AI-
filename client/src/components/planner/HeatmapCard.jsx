function HeatmapCard() {

  const boxes = new Array(35).fill(0);

  return (

    <div className="heatmap-card">

      <h2>

        Productivity Heatmap

      </h2>

      <div className="heatmap-grid">

        {boxes.map((item, index) => (

          <div
            className="heat-box"
            key={index}
          ></div>

        ))}

      </div>

    </div>

  );
}

export default HeatmapCard;