import React, { useContext, useEffect } from "react";
import { KanbanContext } from "../context/KanbanContext";

const SearchBox = ({ searchingValue, setSearchingValue }) => {
  const { showFilteredData, setShowFilteredData } = useContext(KanbanContext);

  useEffect(() => {
    const searchTasks = () => {
      setShowFilteredData({
        ...showFilteredData,
        searchedValue: searchingValue,
      });
    };

    const timeOut = setTimeout(() => {
      if (searchingValue) {
        searchTasks();
      }
    }, 500);
    return () => {
      clearTimeout(timeOut);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchingValue]);

  return (
    <>
      <input
        type="text"
        name="search"
        value={searchingValue}
        placeholder="Search Box"
        onChange={(e) => setSearchingValue(e.target.value)}
      />
    </>
  );
};

export default SearchBox;
