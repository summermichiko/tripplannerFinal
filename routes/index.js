var express = require('express');
var router = express.Router();
var models = require('../models');

/* GET home page. */
// router.get('/', function(req, res, next) {
// 	models.Hotel.find({}, function(err, hotels) {
// 		if(err) return next(err);
// 		models.ThingToDo.find({}, function(err, thingstodo) {
// 			if(err) return next(err);
// 			models.Restaurant.find({}, function(err, restaurants) {
// 				if(err) return next(err);
// 				res.render('index', { hotels: hotels, thingstodo: thingstodo, restaurants: restaurants });
// 			});
// 		});
// 	});
// });
// another way to write the code below

var thingToDoFinder = function(req, res, next) {
		models.ThingToDo.find({}, function(err, thingstodo) {
			if(err) return next(err);
			res.locals.thingstodo = thingstodo;
			next();
		});
	};

var restaurantFinder = function(req, res, next) {
		models.Restaurant.find({}, function(err, restaurants) {
			if(err) return next(err);
			res.locals.restaurants = restaurants;
			next();
		});
	};

router.get('/', [
	thingToDoFinder,
	restaurantFinder,
	function(req, res, next) {
		res.render('index');
	}
]);

module.exports = router;








