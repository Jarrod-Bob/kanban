import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Container } from "@material-ui/core";
import Column from "./Column";
import mockState from "../mock-state";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    padding: "0 30px",
  },
});

const Kanban = (props) => {
  const classes = useStyles();
  const [data, setData] = useState(mockState);

  return (
    <Container>
      <Box className={classes.root}>Jarrod's Kanban Bored</Box>
      This is my kanban board coz im bored.
      {data.columnOrder.map((columnId) => {
        const col = data.columns[columnId];
        const tasks = col.taskIds.map((taskId) => data.tasks[taskId]);

        return <Column key={col.id} column={col} tasks={tasks} />;
      })}
    </Container>
  );
};

Kanban.propTypes = {};

export default Kanban;
