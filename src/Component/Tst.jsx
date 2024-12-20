import HeaderPage from "./HeaderPage";
import FooterPage from "./FooterPage";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import apiClient from "../Service/ApiConfig";

function Dashboard() {
  const [task, setTask] = useState();
  const [taskData, setTaskData] = useState([]);
  const [hasTasks, setHasTasks] = useState(false);
  const { isLogined, user } = useContext(AuthContext);
  const [showModal, setShowModal] = useState(false);
  const handleOpen = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  useEffect(() => {
    apiClient
      .get("/task/getTasks")
      .then((res) => {
        setTaskData(res.data);
        console.log(taskData);
        setHasTasks(true);
        // alert("task found")
      })
      .catch((err) => {
        console.log(err);
        alert("something problem in getting task");
      });
  }, []);
  console.log(taskData);

  const addTask = () => {
    apiClient
      .post("task/addTask", task)
      .then(() => {
        console.log("task added successfully");
      })
      .catch((err) => {
        console.log(err);
        alert("could not add the task pls try again");
        // console.log("could not add the task pls try again")
      });
  };
  function inputHandler(e) {
    setTask({ ...task, [e.target.name]: e.target.value });
  }

  return (
    <>
      <HeaderPage />
      {/* Main Content */}
      <div className="container main-content">
      {!hasTasks ? (
          <div className="empty-state text-center" id="emptyState">
            <img
              src="https://cdn-icons-png.flaticon.com/512/6194/6194029.png"
              alt="No tasks"
              className="empty-state-image mb-4"
            />
            <h2 className="mb-3">No Tasks Yet!</h2>
            <p className="text-muted mb-4">Get started by creating your first task</p>
            <button className="btn btn-custom btn-lg" onClick={() => setShowModal(true)}>
              <i className="fas fa-plus me-2"></i>Add Your First Task
            </button>
          </div>
        ) : (
          <div className="task-list-container">
            <div className="row mb-4">
              <div className="col-md-8">
                <h2>My Tasks</h2>
              </div>
              <div className="col-md-4 text-end">
                <button className="btn btn-custom" onClick={() => setShowModal(true)}>
                  <i className="fas fa-plus me-2"></i>Add Task
                </button>
              </div>
            </div>
            <div className="row g-4">
              {/* {taskData.map((task, index) => ( */}
              {taskData.map((task, index) => (
                <div key={index} className="col-md-6 col-lg-4">
                  <div className="card task-card">
                    <div className="card-body">
                      <div className={`task-priority ${task.priority}`}>{task.priority} Priority</div>
                      <h5 className="card-title mt-2">{task.title}</h5>
                      <p className="card-text text-muted">{task.description}</p>
                      <div className="task-meta">
                        <span>
                          <i className="far fa-calendar me-1"></i>
                          {task.dueDate}
                        </span>
                        <span>
                          <i className="far fa-clock me-1"></i>
                          {task.dueTime}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        
      </div>

      {/* Add Task Modal */}
      {showModal && (
        <div className="modal show" style={{ display: "block" }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add New Task</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleClose}
                ></button>
              </div>
              <div className="modal-body">
                <form id="addTaskForm" onSubmit={addTask}>
                  <div className="mb-3">
                    <label className="form-label">Task Title</label>
                    <input
                      type="text"
                      className="form-control"
                      name="title"
                      value={task?.title}
                      onChange={inputHandler}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea
                      className="form-control"
                      rows="3"
                      name="description"
                      value={task?.description}
                      onChange={inputHandler}
                    ></textarea>
                  </div>
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label className="form-label">Due Date</label>
                      <input
                        type="date"
                        className="form-control"
                        name="dueDate"
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Due Time</label>
                      <input
                        type="time"
                        className="form-control"
                        name="dueTime"
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Priority</label>
                    <select
                      className="form-select"
                      name="priority"
                      value={task?.priority}
                      onChange={inputHandler}
                    >
                      <option value="low">Low</option>
                      <option value="medium">Medium</option>
                      <option value="high">High</option>
                    </select>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={handleClose}
                    >
                      Cancel
                    </button>
                    <button type="submit" className="btn btn-custom">
                      Add Task
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      <FooterPage />
    </>
  );
}

export default Dashboard;
