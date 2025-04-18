const Contact = require("../models/contact");
const User = require("../models/users");
const Projects = require("../models/projects");

async function populate() {
  try {
    await Contact.bulkCreate([
      {
        name: "Deneme isim",
        email: "deneme@gmail.com",
        message: "deneme mesaj",
        subject: "deneme konusu",
      },
    ]);

    await Projects.bulkCreate([
      {
        title: "deneme isim",
        tag: "deneme frontend",
        description: "deneme açıklama",
        image: "1.jpeg",
        liveview: true,
        github: true,
      },
    ]);
  } catch (error) {
    console.error("Error syncing tables:", error);
  }
}

module.exports = populate;
