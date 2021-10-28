import React, { useContext, useState } from "react";
import FilterCSS from "./Filter.module.css";

import DateFilter from "../DateFilter";
import SearchBox from "../SearchBox";
import { KanbanContext } from "../../context/KanbanContext";

const Filter = () => {
  const { setShowFilteredData } = useContext(KanbanContext);
  const [searchingValue, setSearchingValue] = useState("");

  return (
    <div className={FilterCSS.filter_wrapper}>
      <SearchBox
        searchingValue={searchingValue}
        setSearchingValue={setSearchingValue}
      />
      <DateFilter />
      <button
        className={FilterCSS.clear_filter_button}
        onClick={() => {
          setSearchingValue("");
          setShowFilteredData({
            enabled: false,
            sortType: "",
            searchedValue: "",
          });
        }}
      >
        Clear Filter
      </button>
    </div>
  );
};

export default Filter;
