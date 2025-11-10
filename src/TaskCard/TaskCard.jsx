import React from "react";

const TaskCard = ({ task, handleResolve }) => {
  const { title } = task;
  return (
    <div className="p-4 shadow bg-white rounded space-y-5">
      <h3 className="text-[18px] font-medium">{title}</h3>
      <button
        onClick={() => handleResolve(task)}
        className="btn bg-[#02A53B] w-full text-white text-base font-semibold"
      >
        Complete
      </button>
    </div>
  );
};

export default TaskCard;
