import React from "react";
import PropTypes from "prop-types";
import { Droppable } from "react-beautiful-dnd";
import Task from "./Task";

const TaskList = (props) => {
  return (
    <div>
      {/* <Droppable droppableId={1}>
        {(provided) => (
            <div
            className="list-content"
            {...provided.droppableProps}
            ref={provided.innerRef}
            >
            {tasks.map(item => (
            <Task key={item.id} item={item} />
            ))}
            {provided.placeholder}
            </div>
        )}
      </Droppable> */}
    </div>
  );
};

TaskList.propTypes = {};

export default TaskList;
