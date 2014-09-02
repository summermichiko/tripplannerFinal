var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/tripplannerFinal');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'mongodb connection error:'));

var Schema = mongoose.Schema;

var placeSchema = new Schema({
  address: String,
  city: String,
  state: String,
  location: [Number, Number]
});

var thingtodoSchema = new Schema({
	name: String,
	place: [placeSchema],
  img: String,
  description: String
});

var restaurantSchema = new Schema({
  name: String,
  description: String,
  place: [placeSchema],
  img: String,
  price: Number
});

    // // store an img in binary in mongo
    // var a = new A;
    // a.img.data = fs.readFileSync(imgPath);
    // a.img.contentType = 'image/png';
    // a.save(function (err, a) {
    //   if (err) throw err;

exports.Place = mongoose.model('Place', placeSchema);
exports.ThingToDo = mongoose.model('ThingToDo', thingtodoSchema);
exports.Restaurant = mongoose.model('Restaurant', restaurantSchema);














