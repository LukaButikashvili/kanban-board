import React, { useState } from "react";
import DataFilterCSS from "./DataFilter.module.css";

import FilterModal from "./Kanban/FilterModal";
import Modal from "./Modal";

const DateFilter = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <button
        className={DataFilterCSS.data_filter_button}
        onClick={() => setOpenModal(true)}
      >
        Data Filter
      </button>
      {openModal && (
        <Modal>
          <FilterModal setOpenModal={setOpenModal} />
        </Modal>
      )}
    </>
  );
};

export default DateFilter;
