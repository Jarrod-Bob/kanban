import React from "react";
import PropTypes from "prop-types";
import { DragDropContext } from "react-beautiful-dnd";
import TaskList from "./TaskList";

const Column = (props) => {
  return (
    <div>
      <DragDropContext onDragEnd={() => {}}>
        <TaskList />
      </DragDropContext>
    </div>
  );
};

Column.propTypes = {};

export default Column;
