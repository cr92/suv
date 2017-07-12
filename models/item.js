const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

const ItemSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  price: Number,
  quantity: Number,
  url: String,
  description: String
});

const Item = Mongoose.model('item', ItemSchema);

module.exports = Item;