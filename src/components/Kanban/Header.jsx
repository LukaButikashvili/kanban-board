import React, { useState } from "react";
import { Link } from "react-router-dom";
import HeaderCSS from "./Header.module.css";

import ModalBody from "./Modal/ModalBody";

const Header = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <div className={HeaderCSS.header_wrapper}>
        <div>
          <h1>Kanban Board</h1>
        </div>
        <div className={HeaderCSS.header_buttons_div}>
          <Link to="/Labels">
            <button>Labels</button>
          </Link>
          <button onClick={() => setOpenModal(true)}>Add Tasks</button>
        </div>
      </div>
      {openModal && (
        <ModalBody setOpenModal={setOpenModal} moduleName="New Task" />
      )}
    </>
  );
};

export default Header;
