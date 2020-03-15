const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Establish Schema representing the dishes on the restaurant's menu;
let Dish = new Schema({
    dish_ingredient1: {
        type: String
    },
    dish_ingredient2: {
        type: String
    },
    dish_ingredient3: {
        type: String
    },
    dish_ingredient4: {
        type: String
    },
    dish_responsible: {
        type: String
    },
    dish_priority: {
        type: String
    },
    dish_completed: {
        type: Boolean
    }
});

module.exports = mongoose.model('Menu', Menu);