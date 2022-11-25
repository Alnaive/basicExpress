const connection = require('../Config/connection.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const collection = {};
collection.mongoose = mongoose;
collection.url = connection.url;
collection.planet = require("./planet.js")(mongoose);

module.exports = collection;