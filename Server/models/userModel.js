const Kullanici = require("../models/users");

const getUserByUsername = async (username) => {
  console.log("Getting user by username: model", username);
  const user = await Kullanici.findOne({ where: { username: username } });
  return user;
};

const createUser = async (username, hashedPassword) => {
  console.log("Creating user: model", username, hashedPassword);
  await Kullanici.create({
    username: username,
    userpassword: hashedPassword,
  });
  console.log("burası geldi");
};

module.exports = {
  getUserByUsername,
  createUser,
};
