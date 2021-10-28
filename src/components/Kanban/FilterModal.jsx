import React, { useContext, useState, useEffect } from "react";
import FilterModalCSS from "./FilterModal.modal.css";
import styled from "@emotion/styled";

import { KanbanContext } from "../../context/KanbanContext";

const FilterModal = ({ setOpenModal }) => {
  const { showFilteredData, setShowFilteredData } = useContext(KanbanContext);

  const [sortType, setSortType] = useState("");
  const [enableFilter, setEnableFilter] = useState(showFilteredData.enabled);

  useEffect(() => {
    if (!sortType) {
      return null;
    }

    let sortValues = {
      enabled: enableFilter,
      sortType: sortType,
      searchedValue: showFilteredData.searchedValue,
    };

    setShowFilteredData(sortValues);
    setOpenModal(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortType, enableFilter]);

  return (
    <div className={FilterModalCSS.data_filter_modal_wrapper}>
      <CheckBox
        type="checkbox"
        checked={enableFilter}
        onChange={() => setEnableFilter(!enableFilter)}
      />
      <button onClick={() => setSortType("ascending")}>
        Start Date Selector
      </button>
      <button onClick={() => setSortType("descending")}>
        End Date Selector
      </button>
    </div>
  );
};

const CheckBox = styled.input`
  position: relative;
  border-bottom: 1px dotted black;

  &:before {
    content: "Checkbox to enable data filter";
    visibility: hidden;
    opacity: 0;
    width: 140px;
    background-color: black;
    color: #fff;
    text-align: center;
    border-radius: 5px;
    padding: 5px 0;
    transition: opacity 1s ease-in-out;

    position: absolute;
    z-index: 1;
    left: 0;
    top: 2em;
  }

  &:hover:before {
    opacity: 1;
    visibility: visible;
  }
`;

export default FilterModal;
