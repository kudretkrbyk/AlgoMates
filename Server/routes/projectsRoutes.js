const express = require("express");
const router = express.Router();

const { getAllProjects } = require("../contollers/projectController");
router.get("/", getAllProjects);

module.exports = {
  projectsRoutes: router,
};
