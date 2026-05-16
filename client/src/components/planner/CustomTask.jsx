function CustomTask() {

  return (

    <div className="custom-task-card">

      <h2>

        Add Custom Task

      </h2>

      <input
        type="text"
        placeholder="Enter your task..."
        className="custom-task-input"
      />

      <button className="custom-task-btn">

        Add Task

      </button>

    </div>

  );
}

export default CustomTask;