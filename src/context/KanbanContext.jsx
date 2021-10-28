import React, { createContext, useState } from "react";
import { labelTypes } from "../data/labelTypes";

const KanbanContext = createContext();

const status = [
  {
    id: 0,
    type: "Backlog",
    backgroundColor: "#ff7979",
    borderColor: "black",
  },
  {
    id: 1,
    type: "InProgress",
    backgroundColor: "#7ed6df",
    borderColor: "#ffbe76",
  },
  {
    id: 2,
    type: "Done",
    backgroundColor: "#badc58",
    borderColor: "#ffbe76",
  },
];

const KanbanContextProvider = (props) => {
  const [tasks, setTasks] = useState([]);
  const [labels, setLabels] = useState(labelTypes);
  const [showFilteredData, setShowFilteredData] = useState({
    enabled: false,
    sortType: "",
    searchedValue: "",
  });

  const addTask = (values) => {
    setTasks([...tasks, values]);
  };

  function deleteTaskFromState(id) {
    let tempData = [...tasks];
    let filterData = tempData.filter((item) => item.id !== id);
    setTasks(filterData);
  }

  function editItemToData(id, values) {
    let tempData = [...tasks];
    let index = tempData.findIndex((item) => item.id === id);
    tempData[index] = values;
    setTasks(tempData);
  }

  function addLabel(values) {
    setLabels([...labels, values]);
  }

  function editLabel(values, labelName) {
    let tempData = [...labels];
    // eslint-disable-next-line array-callback-return
    tempData.map((label, i, array) => {
      if (label.id === values.id) {
        array[i] = values;
      }
    });
    setLabels(tempData);

    let tempTasks = [...tasks];
    // eslint-disable-next-line array-callback-return
    tempTasks.map((task) => {
      if (task.label === labelName) {
        task.label = values.type;
      }
    });
    setTasks(tempTasks);
  }

  function deleteLabel(labelName) {
    let tempData = [...labels];
    tempData = tempData.filter((item) => item.type !== labelName);
    setLabels(tempData);

    //change tasks label type into None
    let tasksData = [...tasks];
    // eslint-disable-next-line array-callback-return
    tasksData.map((task) => {
      if (task.label === labelName) {
        task.label = "None";
      }
    });
    setTasks(tasksData);
  }

  //taskInfo contains { id: number, tasks: [] }
  const dropTask = (taskInfo, columnStatus) => {
    let tempData = [...taskInfo.tasks];
    let findIndexOfTask = tempData.findIndex((task) => task.id === taskInfo.id);

    //if dropable task has same type as column where it is being droped, nothing should change
    if (tempData[findIndexOfTask].status === columnStatus.type) {
      return null;
    }
    tempData[findIndexOfTask].status = columnStatus.type;

    let droppedTask = tempData[findIndexOfTask];
    //move task to the top of array
    tempData = tempData.filter((item) => item.id !== taskInfo.id);
    tempData.unshift(droppedTask);

    setTasks([...tempData]);
  };

  return (
    <KanbanContext.Provider
      value={{
        tasks,
        labels,
        status,
        showFilteredData,
        addTask,
        editItemToData,
        deleteTaskFromState,
        addLabel,
        deleteLabel,
        editLabel,
        dropTask,
        setShowFilteredData,
      }}
    >
      {props.children}
    </KanbanContext.Provider>
  );
};

export { KanbanContext, KanbanContextProvider };
