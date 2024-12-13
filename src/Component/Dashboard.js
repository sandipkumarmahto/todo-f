import HeaderPage from "./HeaderPage";
import FooterPage from "./FooterPage";

function Dashboard() {

    return(
        <>
        <HeaderPage/>
        {/* Main Content */}
        <div className="container main-content">
          {/* Empty State (shown when no tasks) */}
          <div className="empty-state text-center" id="emptyState">
            <img
              src="https://cdn-icons-png.flaticon.com/512/6194/6194029.png"
              alt="No tasks"
              className="empty-state-image mb-4"
            />
            <h2 className="mb-3">No Tasks Yet!</h2>
            <p className="text-muted mb-4">
              Get started by creating your first task
            </p>
            <button
              className="btn btn-custom btn-lg"
              onclick="showAddTaskModal()"
            >
              <i className="fas fa-plus me-2" />
              Add Your First Task
            </button>
          </div>
          {/* Task List (shown when tasks exist) */}
          <div
            className="task-list-container"
            id="taskList"
            style={{ display: "none" }}
          >
            <div className="row mb-4">
              <div className="col-md-8">
                <h2>My Tasks</h2>
              </div>
              <div className="col-md-4 text-end">
                <button className="btn btn-custom" onclick="showAddTaskModal()">
                  <i className="fas fa-plus me-2" />
                  Add Task
                </button>
              </div>
            </div>
            {/* Task Filters */}
            <div className="row mb-4">
              <div className="col-12">
                <div className="btn-group" role="group">
                  <button
                    type="button"
                    className="btn btn-outline-secondary active"
                  >
                    All
                  </button>
                  <button type="button" className="btn btn-outline-secondary">
                    Today
                  </button>
                  <button type="button" className="btn btn-outline-secondary">
                    Upcoming
                  </button>
                  <button type="button" className="btn btn-outline-secondary">
                    Completed
                  </button>
                </div>
              </div>
            </div>
            {/* Task Cards */}
            <div className="row g-4">
              {/* Sample Task Card */}
              <div className="col-md-6 col-lg-4">
                <div className="card task-card">
                  <div className="card-body">
                    <div className="task-priority high">High Priority</div>
                    <h5 className="card-title mt-2">
                      Complete Project Proposal
                    </h5>
                    <p className="card-text text-muted">
                      Write and review the project proposal for client meeting
                    </p>
                    <div className="task-meta">
                      <span>
                        <i className="far fa-calendar me-1" />
                        Due Today
                      </span>
                      <span>
                        <i className="far fa-clock me-1" />
                        2:00 PM
                      </span>
                    </div>
                    <div className="task-actions mt-3">
                      <button className="btn btn-sm btn-outline-success">
                        <i className="fas fa-check" />
                      </button>
                      <button className="btn btn-sm btn-outline-primary">
                        <i className="fas fa-edit" />
                      </button>
                      <button className="btn btn-sm btn-outline-danger">
                        <i className="fas fa-trash" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Add Task Modal */}
        <div className="modal fade" id="addTaskModal" tabIndex={-1}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add New Task</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                />
              </div>
              <div className="modal-body">
                <form id="addTaskForm">
                  <div className="mb-3">
                    <label className="form-label">Task Title</label>
                    <input type="text" className="form-control" required="" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea
                      className="form-control"
                      rows={3}
                      defaultValue={""}
                    />
                  </div>
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label className="form-label">Due Date</label>
                      <input type="date" className="form-control" />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Due Time</label>
                      <input type="time" className="form-control" />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Priority</label>
                    <select className="form-select">
                      <option value="low">Low</option>
                      <option value="medium">Medium</option>
                      <option value="high">High</option>
                    </select>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <button type="button" className="btn btn-custom">
                  Add Task
                </button>
              </div>
            </div>
          </div>
        </div>
        <FooterPage/>
      </>
    )
}

export default Dashboard;