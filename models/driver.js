const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PointsSchema = new Schema({
  type: { type: String, default: 'Point'},
  coordinates: {type: [Number], index: '2dshpere '} 
});

const DriverSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  driving: {
    type: Boolean,
    default: false
  },
  position: PointsSchema

});

const Driver = mongoose.model('driver', DriverSchema);

module.exports = Driver;