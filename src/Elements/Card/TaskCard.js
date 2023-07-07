import React from "react";

export default function TaskCard({
  data = {},
  handleEdit = (e) => {},
  handleDeleteTodo = (e) => {},
}) {
  return (
    <div className="col-md-3">
      <div class="card bg-body-secondary">
        <div className="card-body text-start">
          <h5 className="card-title">Title: {data.title}</h5>
          <p className="card-text">Description: {data.description}</p>
          <p>Status: {data.status}</p>
          <div
            className="mw-100 d-flex row-gap-2"
            role="group"
            aria-label="Basic mixed styles example"
          >
            <button
              type="button"
              className="btn btn-info w-50"
              id="editButton"
              onClick={() => handleEdit(data)}
            >
              Edit
            </button>
            <button
              type="button"
              className="btn btn-danger ms-1 w-50"
              onClick={() => handleDeleteTodo(data.title)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
