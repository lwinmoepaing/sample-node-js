const users = [
  {
    id: 1,
    name: "John",
  },
  {
    id: 2,
    name: "Anonymous",
  },
];

const getAllUsers = (req, res) => {
    res.render('home', {users});
};

const createUser = (req, res) => {
    users.push({
      id: Math.random(),
      name: Math.random(),
    });

    res.json(users);
};

module.exports = {
    getAllUsers,
    createUser,
}