import React, { useContext, useEffect, useState } from "react";
import ColumnCSS from "./Column.module.css";

import Card from "./Card";
import { useDrop } from "react-dnd";
import { KanbanContext } from "../context/KanbanContext";
import { ascending, decending } from "../utils/sortDataByDate";
import { searchItem } from "../utils/searchItem";

const Column = ({ status }) => {
  const { tasks, dropTask, showFilteredData } = useContext(KanbanContext);

  //filtered Tasks
  const [currentTasks, setCurrentTasks] = useState([]);

  useEffect(() => {
    let filterData = [...tasks];
    filterData = filterData.filter((task) => {
      return task.status === status.type;
    });

    if (showFilteredData.enabled) {
      if (showFilteredData.sortType === "ascending") {
        filterData = ascending(filterData);
      } else {
        filterData = decending(filterData);
      }
    }

    if (showFilteredData.searchedValue) {
      filterData = searchItem(filterData, showFilteredData.searchedValue);
    }

    setCurrentTasks(filterData);
  }, [tasks, status.type, showFilteredData]);

  //Drop task
  const [, drop] = useDrop(() => ({
    accept: "Card",
    drop: (item, monitor) => dropTask(item, status),
    // collect: (monitor) => ({
    //   isOver: !!monitor.isOver(),
    // }),
  }));

  return (
    <div className={ColumnCSS.status_column_wrapper}>
      <h1>{status.type}</h1>
      <div
        ref={drop}
        className={ColumnCSS.column_main_div}
        style={{ background: status.backgroundColor }}
      >
        {currentTasks.map((task) => {
          return <Card task={task} key={task.title} />;
        })}
      </div>
    </div>
  );
};

export default Column;
