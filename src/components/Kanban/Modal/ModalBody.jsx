import React, { useContext } from "react";
import Modal from "../../Modal";
import { KanbanContext } from "../../../context/KanbanContext";
import KanbanModalHeader from "./KanbanModalHeader";
import Buttons from "../../Buttons";
import DropDown from "../../DropDown";
import Textarea from "../../Textarea";
import { v4 } from "uuid";

const ModalBody = ({
  setOpenModal,
  moduleName,
  deleteButtonExist = false,
  task = {},
}) => {
  const { status, labels, addTask, editItemToData } = useContext(KanbanContext);

  //add task to global state or edit task into it.
  const afterSubmit = (e) => {
    e.preventDefault();
    const target = e.target;

    let newDate = new Date().toLocaleString();

    const values = {
      id: "",
      title: target.title.value,
      body: target.body.value,
      status: target.status.value,
      label: target.labels.value,
      createdDate: "",
      updatedData: newDate,
    };

    //if values key createdDate has a truthy value it means that we are editing it so updatedDate will change and createdDate won't.
    if (task.createdDate) {
      values.createdDate = task.createdDate;
      values.id = task.id;
      editItemToData(task.id, values);
    } else {
      values.createdDate = newDate;
      values.id = v4();
      addTask(values);
    }

    setOpenModal(false);
  };

  return (
    <Modal>
      <form onSubmit={(e) => afterSubmit(e)}>
        <KanbanModalHeader initialValue={task.title} moduleName={moduleName} />
        <Textarea initialValue={task.body} />
        <DropDown initialValue={task.status} data={status} name="status" />
        <DropDown initialValue={task.label} data={labels} name="labels" />
        <Buttons
          setOpenModal={setOpenModal}
          deleteButtonExist={deleteButtonExist}
          id={task.id}
        />
      </form>
    </Modal>
  );
};

export default ModalBody;
