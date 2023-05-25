const User = require('../model/User');

const getAllUsers = async (req, res) => {
    const users = await User.find();
    res.json(users);
};

const createUser = async (req, res) => {
    const newUser = new User(req.body);
    await newUser.save();
    res.json(newUser);
};

const updateUser = async (req, res) => {
    const updateUser = await User.updateOne({_id: req.body.id}, {
        name: req.body.name,
        age: req.body.age
    });
    res.json(updateUser);
};

const deleteUser = async (req, res) => {
    const deleteUser = await User.deleteOne({_id: req.body.id});
    res.json(deleteUser);
};


const testQuery = async (req, res) => {
    console.log(req.body);
    res.json({success: "Body Test"});
}

module.exports = {
    getAllUsers,
    createUser,
    updateUser,
    deleteUser,
    testQuery
}