import React, { useContext, useState } from "react";
import { v4 } from "uuid";
import ModalForLabelCSS from "./ModalForLabel.module.css";

import { KanbanContext } from "../../../context/KanbanContext";
import ColorPicker from "../../ColorPicker";
import ButtonsForLabel from "../ButtonsForLabel";
import TextInput from "../../TextInput";

const ModalForLabel = ({
  modalName,
  setOpenModal,
  deleteButtonExist = false,
  label = {},
}) => {
  const { addLabel, editLabel } = useContext(KanbanContext);

  //change Color
  const [background, setBackground] = useState("#f6e58d");
  const [openColorPicker, setOpenColorPicker] = useState(false);

  const changeColor = (color) => {
    setBackground(color);
    setOpenColorPicker(false);
  };

  // adding/editing label
  const onSubmitHandler = (e) => {
    e.preventDefault();

    let target = e.target;

    let values = {
      id: "",
      type: target.title.value,
      backgroundColor: background,
      borderColor: background,
    };

    if (target.submit.value === "Add") {
      values.id = v4();
      addLabel(values);
    } else {
      values.id = label.id;
      editLabel(values, label.type);
    }
    setOpenModal(false);
  };

  return (
    <form
      onSubmit={(e) => onSubmitHandler(e)}
      className={ModalForLabelCSS.modal_for_label_wrapper}
    >
      <h1>{modalName} Label</h1>
      <div>
        {openColorPicker && <ColorPicker changeColor={changeColor} />}
        <div className={ModalForLabelCSS.modal_for_label_body_wrapper}>
          <div
            className={ModalForLabelCSS.color_box}
            style={{ background: background }}
            onClick={() => setOpenColorPicker(true)}
          ></div>
          <TextInput initialValue={label.type} />
        </div>
      </div>
      <ButtonsForLabel
        setOpenModal={setOpenModal}
        deleteButtonExist={deleteButtonExist}
        modalName={modalName}
        labelName={label.type}
      />
    </form>
  );
};

export default ModalForLabel;
