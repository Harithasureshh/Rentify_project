const express = require('express');
const Property = require('../models/Property');
const router = express.Router();

router.post('/', async (req, res) => {
  const { owner, location, area, bedrooms, bathrooms, amenities } = req.body;
  try {
    const property = new Property({ owner, location, area, bedrooms, bathrooms, amenities });
    await property.save();
    res.status(201).send('Property listed');
  } catch (err) {
    res.status(400).send(err.message);
  }
});

router.get('/', async (req, res) => {
  try {
    const properties = await Property.find();
    res.json(properties);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const property = await Property.findById(req.params.id);
    res.json(property);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const property = await Property.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(property);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await Property.findByIdAndDelete(req.params.id);
    res.send('Property deleted');
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;