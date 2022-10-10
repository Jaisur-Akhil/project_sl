/** @format */

var express = require('express');
// const user_data = require('./User_data');
const router = express.Router();
let user_id = require('uuid');
let user_data = require('./user_data');

router.get('/', (req, res) => {
  res.json(user_data);
});

router.get('/:id', (req, res) => {
  //id ,if exists, get user details
  const found = user_data.some((user) => user.id === parseInt(req.params.id));

  if (found) {
    res.json(user_data.filter((user) => user.id === parseInt(req.params.id)));
  } else {
    res.sendStatus(400);
  }
});

router.post('/', (req, res) => {
  //new user details template - variable, push to db .
  const newUser = {
    id: user_id.v4(),
    name: req.body.name,
    age: req.body.age,
    speciality: req.body.speciality,
  };

  if (!newUser.name || !newUser.age || !newUser.speciality) {
    res.sendStatus(400);
  }

  user_data.push(newUser);
  res.json(user_data);
});

router.put('/:id', (req, res) => {
  const found = user_data.some((user) => user.id === parseInt(req.params.id));
  console.log(found);

  if (found) {
    user_data.forEach((user) => {
      if (user.id === parseInt(req.params.id)) {
        user.name = req.body.name ? req.body.name : user.name;
        age = req.body.age ? req.body.age : user.age;
        speciality = req.body.speciality
          ? req.body.speciality
          : user.speciality;
        res.json({ msg: 'User Updated', user });
      }
    });
  }
});

router.delete('/:id', (req, res) => {
  const found = user_data.some((user) => user.id === parseInt(req.params.id));

  if (found) {
    user_data = user_data.filter((user) => user.id !== parseInt(req.params.id));
    res.json({ reqid: req.params.id, msg: 'User Deleted', user_data });
  } else {
    res.sendStatus(400);
  }
});
module.exports = router;
