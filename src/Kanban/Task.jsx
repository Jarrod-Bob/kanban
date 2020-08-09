import React from "react";
import PropTypes from "prop-types";
import { makeStyles, Card } from "@material-ui/core";

const useStyles = makeStyles({
  task: {
    margin: "10px 0",
  },
});

const Task = (props) => {
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.task}>{props.task.content}</Card>
    </div>
  );
};

Task.propTypes = {};

export default Task;
