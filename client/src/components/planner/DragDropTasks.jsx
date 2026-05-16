function DragDropTasks() {

  const tasks = [

    "Complete React UI",

    "Practice DSA",

    "Revise MongoDB",

    "Watch AI Tutorial",

  ];

  return (

    <div className="dragdrop-card">

      <h2>

        Drag & Drop Tasks

      </h2>

      <div className="dragdrop-wrapper">

        {tasks.map((task, index) => (

          <div
            className="drag-task"
            key={index}
          >

            ☰ {task}

          </div>

        ))}

      </div>

    </div>

  );
}

export default DragDropTasks;