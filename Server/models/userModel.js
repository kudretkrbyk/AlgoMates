const Kullanici = require("../models/users");

const getUserByUsername = async (username) => {
  console.log("Getting user by username: model", username);
  const user = await Kullanici.findOne({ where: { username: username } });
  return user;
};

const createUser = async (userName, hashedPassword) => {
  console.log("Creating user: model", userName, hashedPassword);
  await Kullanici.create({
    username: userName,
    userpassword: hashedPassword,
  });
  console.log("burası geldi");
};

module.exports = {
  getUserByUsername,
  createUser,
};
