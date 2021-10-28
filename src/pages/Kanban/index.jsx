import React, { useContext } from "react";
import KanbanCSS from "./Kanban.module.css";

import Column from "../../components/Column";
import Header from "../../components/Kanban/Header";
import { KanbanContext } from "../../context/KanbanContext";
import Filter from "../../components/Kanban/Filter";

const Kanban = () => {
  const { status } = useContext(KanbanContext);

  return (
    <>
      <Header />
      <Filter />
      <div className={KanbanCSS.columns_wrapper}>
        {status.map((item) => {
          return <Column status={item} key={item.id} />;
        })}
      </div>
    </>
  );
};

export default Kanban;
