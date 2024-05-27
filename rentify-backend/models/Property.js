const mongoose = require('mongoose');

const PropertySchema = new mongoose.Schema({
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  location: String,
  area: Number,
  bedrooms: Number,
  bathrooms: Number,
  amenities: [String],
  likes: { type: Number, default: 0 },
});

module.exports = mongoose.model('Property', PropertySchema);