var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create the counters schema with an _id field and a seq field
var CounterSchema = Schema({
    _id: {type: String, required: true},
    seq: { type: Number, default: 0 }
});

// create a model from that schema
var counter = mongoose.model('counter', CounterSchema);

// create a schema for our links
var urlSchema = new Schema({
  _id: {type: Number, index: true},
  long_url: String,
  created_at: Date
});

var Url = mongoose.model('Url', urlSchema);

module.exports = Url;