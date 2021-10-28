import React, { useContext } from "react";
import HeaderOfLabels from "../../components/Labels/HeaderOfLabels";
import LabelBox from "../../components/Labels/LabelBox";
import { KanbanContext } from "../../context/KanbanContext";

const Labels = () => {
  const { labels } = useContext(KanbanContext);
  return (
    <div>
      <HeaderOfLabels />
      {labels.map((label) => {
        if (label.type === "None") {
          return null;
        }
        return <LabelBox key={label.id} label={label} />;
      })}
    </div>
  );
};

export default Labels;
