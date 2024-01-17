import { useContext, useState } from "react";
import { TaskContextApi } from "../../context/TaskContextApi";

const TaskForm = () => {
  let { addTask } = useContext(TaskContextApi);

  let [state, setState] = useState({
    title: "",
    author: "",
    description: "",
    status: false,
  });

  let { title, author, description, status } = state;

  let handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    try {
      addTask(title, author, description);
      e.target.firstChild.focus();
      setState({ title: "", author: "", description: "" });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section id="form">
      <h2>Add Task to the Basket</h2>
      <main>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              placeholder="add title"
              name="title"
              value={title}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="author">Author</label>
            <input
              type="text"
              placeholder="add auther"
              name="author"
              value={author}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              name="description"
              id="description"
              cols="30"
              rows="10"
              value={description}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="form-group">
            <button>{status === true ? "loading ..." : "add Task"}</button>
          </div>
        </form>
      </main>
    </section>
  );
};

export default TaskForm;
