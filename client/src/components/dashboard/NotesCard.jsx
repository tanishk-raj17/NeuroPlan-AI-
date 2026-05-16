import {
  StickyNote,
  Plus,
} from "lucide-react";

export default function NotesCard() {

  return (

    <div className="notes-card">

      <div className="card-header">

        <h2>
          Smart Notes
        </h2>

        <StickyNote size={20} />

      </div>

      <div className="notes-list">

        <div className="note-item">

          <h4>
            React Revision
          </h4>

          <p>
            Revise hooks and
            context API tonight.
          </p>

        </div>

        <div className="note-item">

          <h4>
            DSA Practice
          </h4>

          <p>
            Solve 3 recursion
            questions before sleep.
          </p>

        </div>

      </div>

      <button className="add-note-btn">

        <Plus size={18} />

        Add New Note

      </button>

    </div>
  );
}