import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.css";
function AddTodoModal({
  toggleModal,
  edit,
}: {
  toggleModal: () => void;
  edit: boolean;
}) {
  const handleSave = () => {};
  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <h2>{edit ? "Edit Todo" : "Add Todo"}</h2>
          <button onClick={toggleModal}>
            <FontAwesomeIcon icon={faX} color="white" />
          </button>
        </div>
        <hr />
        <div className="modal-content flex gap column">
          <div className="flex column">
            <label htmlFor="description">Description</label>
            <input type="text" id="description" className="input-full-width" />
          </div>
          <div className="flex gap">
            <div className="flex column half-width">
              <label htmlFor="date">Date</label>
              <input type="date" id="date" className="input-full-width" />
            </div>
            <div className="flex column half-width">
              <label htmlFor="priority">Priority</label>
              <select
                name="priority"
                className="input-full-width"
                id="priority"
              >
                <option value="1">High</option>
                <option value="2">Medium</option>
                <option value="3">Low</option>
              </select>
            </div>
          </div>
          <div className="flex gap center margin">
            <button className="btn" onClick={handleSave}>
              {edit ? "Save" : "Create"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddTodoModal;
