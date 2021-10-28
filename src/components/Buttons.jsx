import React, { useContext } from "react";
import ButtonsCSS from "./Buttons.module.css";

import { KanbanContext } from "../context/KanbanContext";

const Buttons = ({ setOpenModal, deleteButtonExist = false, id }) => {
  const { deleteTaskFromState } = useContext(KanbanContext);

  return (
    <div className={ButtonsCSS.buttons_wrapper}>
      <button
        className={ButtonsCSS.cancel_button}
        onClick={() => setOpenModal(false)}
      >
        Cancel
      </button>
      {deleteButtonExist && (
        <button
          className={ButtonsCSS.delete_button}
          onClick={() => deleteTaskFromState(id)}
        >
          Delete
        </button>
      )}
      <input
        id="add-button"
        type="submit"
        name={deleteButtonExist ? "Edit" : "Add"}
        value={deleteButtonExist ? "Edit" : "Add"}
      />
    </div>
  );
};

export default Buttons;
