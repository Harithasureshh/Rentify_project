const express = require('express');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const router = express.Router();

router.post('/register', async (req, res) => {
  const { firstName, lastName, email, phoneNumber, password, role } = req.body;
  try {
    const user = new User({ firstName, lastName, email, phoneNumber, password, role });
    await user.save();
    res.status(201).send('User registered');
  } catch (err) {
    res.status(400).send(err.message);
  }
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user || !await bcrypt.compare(password, user.password)) {
      return res.status(400).send('Invalid credentials');
    }
    const token = jwt.sign({ id: user._id }, 'secretkey');
    res.json({ token });
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;


 
