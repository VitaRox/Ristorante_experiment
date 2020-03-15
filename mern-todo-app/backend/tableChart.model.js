const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Establish Schema representing the table chart of the restaurant;
let Table = new Schema({
  table_number: {
    type: Number
  },
  table_waiter: {
    type: String
  },
  table_seats_quantity: {
    type: Number
  },
  table_occupied: {
    type: Boolean
  },
  table_bussed: {
    type: Boolean
  },
  table_reserved: {
    type: Boolean
  }
});

module.exports = mongoose.model('Menu', Menu);