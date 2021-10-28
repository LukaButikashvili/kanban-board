import React, { useContext } from "react";
import ButtonsForLabelCSS from "./ButtonsForLabel.module.css";

import { KanbanContext } from "../../context/KanbanContext";

const ButtonsForLabel = ({
  setOpenModal,
  deleteButtonExist,
  labelName = "",
  modalName,
}) => {
  const { deleteLabel } = useContext(KanbanContext);

  return (
    <div className={ButtonsForLabelCSS.buttons_wrapper}>
      <button
        className={ButtonsForLabelCSS.cancel_button}
        onClick={() => setOpenModal(false)}
      >
        Cancel
      </button>
      {deleteButtonExist && (
        <button
          className={ButtonsForLabelCSS.delete_button}
          onClick={() => deleteLabel(labelName)}
        >
          Delete
        </button>
      )}
      <input
        id="add-button"
        type="submit"
        name="submit"
        value={modalName === "New" ? "Add" : "Edit"}
      />
    </div>
  );
};

export default ButtonsForLabel;
