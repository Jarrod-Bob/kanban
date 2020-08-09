import React from "react";
import PropTypes from "prop-types";
import { DragDropContext } from "react-beautiful-dnd";
import TaskList from "./TaskList";
import { Box, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  column: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    padding: "0 30px",
    marginTop: "10px",
  },
});

const Column = (props) => {
  const classes = useStyles();
  return (
    <div>
      <DragDropContext onDragEnd={() => {}}>
        <Box className={classes.column}>
          {props.column.title}
          <TaskList tasks={props.tasks} />
        </Box>
      </DragDropContext>
    </div>
  );
};

Column.propTypes = {};

export default Column;
