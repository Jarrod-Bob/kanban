const mockState = {
  tasks: {
    "task-1": { id: "task-1", content: "Create Kanban Board UI Layout" },
    "task-2": { id: "task-2", content: "Add Kanban Board functionality" },
    "task-3": { id: "task-3", content: "Kanban Board BE Integration" },
    "task-4": { id: "task-4", content: "Kanban board task creator" },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "To-do",
      taskIds: ["task-3", "task-4"],
    },
    "column-2": {
      id: "column-2",
      title: "In Progress",
      taskIds: ["task-1", "task-2"],
    },
    "column-3": {
      id: "column-3",
      title: "Done",
      taskIds: [],
    },
  },
  columnOrder: ["column-1", "column-2", "column-3"],
};

export default mockState;
