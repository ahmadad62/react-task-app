import React, { useState } from "react";

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert("Please enter a text");
      return;
    }
    onAdd({ text, day, reminder });
    setDay("");
    setReminder("");
    setText("");
  };

  return (
    <div>
      <form className="add-form" onSubmit={onSubmit}>
        {/* <h1>Create New Task</h1> */}
        <div className="form-control">
          <label>
            New Task
            <input
              name="Task"
              type="Text"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </label>
        </div>
        <div className="form-control">
          <label>
            Date
            <input
              name="day"
              type="date"
              value={day}
              onChange={(e) => setDay(e.target.value)}
            />
          </label>
        </div>
        <div className="form-control form-control-check">
          <input
            checked={reminder}
            value={reminder}
            name="reminder"
            type="checkbox"
            onChange={(e) => setReminder(e.currentTarget.checked)}
          />
          <label>Remind Me</label>
        </div>

        <div>
          <input type="submit" value="Add Task" className="btn btn-block" />
        </div>
      </form>
    </div>
  );
};

export default AddTask;
