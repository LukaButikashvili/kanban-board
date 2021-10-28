import React, { useState } from "react";
import LabelBoxCSS from "./LabelBox.module.css";

import Modal from "../../components/Modal";
import ModalForLabel from "./Modal/ModalForLabel";

const LabelBox = ({ label }) => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <div
        onClick={() => setOpenModal(true)}
        className={LabelBoxCSS.label_box_wrapper}
      >
        <div
          style={{
            background: label.backgroundColor,
          }}
        ></div>
        <h1>{label.type}</h1>
      </div>
      {openModal && (
        <Modal>
          <ModalForLabel
            modalName="Edit"
            deleteButtonExist={openModal}
            setOpenModal={setOpenModal}
            label={label}
          />
        </Modal>
      )}
    </>
  );
};

export default LabelBox;
