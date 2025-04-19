require("dotenv").config(); // En üstte olsun
const express = require("express");
const sequelize = require("./config/db.js");
const dummyData = require("./data/dummy-data");

const authRoutes = require("./routes/authRoutes.js");
const { projectsRoutes } = require("./routes/projectsRoutes.js");
const { contactRoutes } = require("./routes/contactRoutes.js");

const app = express();

app.use(express.json());

app.use("/api", authRoutes);
app.use("/api/projects", projectsRoutes);
app.use("/api/contact", contactRoutes);

(async () => {
  await sequelize.sync({ alter: true });
  //await dummyData();
})();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
