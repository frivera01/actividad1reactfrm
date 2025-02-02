// models/Product.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  brand: { type: String, required: true },
  model: { type: String, required: true }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
