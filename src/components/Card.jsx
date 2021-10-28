import React, { useContext, useState } from "react";
import CardCSS from "./Card.module.css";

import ModalBody from "./Kanban/Modal/ModalBody";
import { useDrag } from "react-dnd";
import { KanbanContext } from "../context/KanbanContext";

let deleteButtonExist = true;

const Card = ({ task }) => {
  const { tasks, labels } = useContext(KanbanContext);

  const [, drag] = useDrag({
    type: "Card",
    item: {
      id: task.id,
      tasks: tasks,
    },
  });

  const [openModal, setOpenModal] = useState(false);

  const currentLabel = labels.filter((label) => label.type === task.label);

  return (
    <>
      <div
        className={CardCSS.card_wrapper}
        ref={drag}
        onClick={() => setOpenModal(true)}
      >
        <h1>{task.title}</h1>
        <p>{task.body}</p>
        <div>
          <ul>
            <li>Created: {task.createdDate}</li>
            <li>Updated: {task.updatedData}</li>
          </ul>
          {task.label !== "None" && (
            <div style={{ background: currentLabel[0].backgroundColor }}>
              <h3>{task.label}</h3>
            </div>
          )}
        </div>
      </div>
      {openModal && (
        <ModalBody
          setOpenModal={setOpenModal}
          moduleName="Editing/Preview"
          deleteButtonExist={deleteButtonExist}
          task={task}
        />
      )}
    </>
  );
};

export default Card;
