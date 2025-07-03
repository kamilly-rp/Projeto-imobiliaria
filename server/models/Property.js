import mongoose from 'mongoose';

const propertySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  price: {
    type: Number,
    required: true,
  },
  location: String,
  image: String,
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

const Property = mongoose.model('Property', propertySchema,'Residency');

export default Property;
