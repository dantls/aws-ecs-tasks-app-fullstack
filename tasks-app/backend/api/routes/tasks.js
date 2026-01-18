module.exports = (app) => {
  const controller = require("../controllers/tasks")();

  // English routes
  app.route("/api/tasks").get(controller.findAll).post(controller.create);
  app.route("/api/tasks/:uuid").get(controller.find).delete(controller.delete);
  app.route("/api/tasks/update_priority/:uuid").put(controller.update_priority);

  // Portuguese routes (for backward compatibility)
  app.route("/api/tarefas").get(controller.findAll).post(controller.create);
  app.route("/api/tarefas/:uuid").get(controller.find).delete(controller.delete);
  app.route("/api/tarefas/update_priority/:uuid").put(controller.update_priority);
};
