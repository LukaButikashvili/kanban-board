import React, { useState } from "react";
import { Link } from "react-router-dom";
import HeaderOfLabelsCSS from "./HeaderOfLabels.module.css";

import Modal from "../Modal";
import ModalForLabel from "./Modal/ModalForLabel";

const HeaderOfLabels = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <div className={HeaderOfLabelsCSS.headerOfLabels_wrapper}>
        <div>
          <button onClick={() => setOpenModal(true)}>Add Label</button>
          <Link to="/">
            <button>Home</button>
          </Link>
        </div>
      </div>
      {openModal && (
        <Modal>
          <ModalForLabel modalName="New" setOpenModal={setOpenModal} />
        </Modal>
      )}
    </>
  );
};

export default HeaderOfLabels;
