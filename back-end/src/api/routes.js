const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const { tasksController } = require('../controllers');

const routes = express();
routes.use(cors({
  origin: '*'
}));


routes.get("/tasks", tasksController.getAllTasks);

routes.post("/task", tasksController.addTask);
routes.get("/task/:id", tasksController.getTask);
routes.delete("/task/:id", tasksController.rmTask);
routes.put("/task/:id", tasksController.putTask);

routes.post("/debug", tasksController.resetTasks);

module.exports = routes;
