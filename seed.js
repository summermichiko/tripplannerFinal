models = require('./models');
var Place = models.Place,
    Restaurant = models.Restaurant,
    ThingToDo = models.ThingToDo;
 
var mongoose = require('mongoose');
console.log("Inserting data");

 
var place = new Place({address: "1585 Kapiolani Blvd", city: "Honolulu", state: "HI", location: [21.291542, -157.84054]});
Restaurant.create({name: "Shokudo Restaurant", place: [place], description: "Try their famous Honey Toast!", img: "/images/shokudo.jpg" });
 
var place = new Place({address: "515 N Kuakini St", city: "Honolulu", state: "HI", location: [21.32401, -157.857935]});
Restaurant.create({name: "Liliha Bakery", place: [place], description: "The cocoa puffs are to die for!", img: "/images/liliha.jpg" });
 
var place = new Place({address: "151 Hekili St", city: "Kailua", state: "HI", location: [21.391697, -157.74128]});
Restaurant.create({name: "Boots and Kimos", place: [place], description: "Try the MacNut pancakes!", img: "/images/boots.jpg" });
 
var place = new Place({address: "3308 Kanaina Ave", city: "Honolulu", state: "HI", location: [21.275936, -157.814551]});
Restaurant.create({name: "Rainbow Drive-In", place: [place], description: "The biggest plate lunch you'll find!", img: "/images/rainbow.jpg" });
 
var place = new Place({address: "726 Kapahulu Ave", city: "Honolulu", state: "HI", location: [21.280196, -157.814187]});
Restaurant.create({name: "Ono's", place: [place], description: "Authentic Hawaiian food!", img: "/images/onos.jpg" });
 
var place = new Place({address: "99-084 Kauhale St A2", city: "Aiea", state: "HI", location: [21.379443, -157.931136]});
Restaurant.create({name: "Young's Kal Bee", place: [place], description: "Meat Jun!!!", img: "/images/youngs.jpg" });
 
var place = new Place({address: "1010 University Ave B4", city: "Honolulu", state: "HI", location: [21.29273, -157.822014]});
Restaurant.create({name: "Bubbies Ice Cream", place: [place], description: "Tons of mochi ice cream flavors!", img: "/images/bubbies.jpg" });
 
var place = new Place({address: "83 N King St", city: "Honolulu", state: "HI", location: [21.311473, -157.863583]});
Restaurant.create({name: "The Pig and the Lady", place: [place], description: "Say hi to chef Brandon Lee!", img: "/images/pig.jpg" });
 
var place = new Place({address: "1960 Kapiolani Blvd #109", city: "Honolulu", state: "HI", location: [21.290116, -157.832862]});
Restaurant.create({name: "Phuket Thai", place: [place], description: "Try the Pad Kee Mao!", img: "/images/pucket.jpg" });
 
var place = new Place({address: "330 N School St", city: "Honolulu", state: "HI", location: [21.319947, -157.858478]});
Restaurant.create({name: "Shimazu Store", place: [place], description: "Go for the big cone on a hot day!", img: "/images/shimazu.jpg" });
 
var place = new Place({address: "578 N Vineyard Blvd", city: "Honolulu", state: "HI", location: [21.320957, -157.862609]});
Restaurant.create({name: "Moon Garden", place: [place], description: "Family style Chinese food!", img: "/images/moon.jpg" });
 
var place = new Place({address: "1824 S King St", city: "Honolulu", state: "HI", location: [21.295947, -157.832041]});
Restaurant.create({name: "Gyotaku", place: [place], description: "Family style Japanese Food!", img: "/images/gyotaku.jpg" });
 
var place = new Place({address: "918 Gulick Ave #1", city: "Honolulu", state: "HI", location: [21.333259, -157.879627]});
Restaurant.create({name: "Nanding's Bakery", place: [place], description: "You can't just eat one Spanish roll!", img: "/images/nanding.jpg" });
 
var place = new Place({address: "738 Umi St", city: "Honolulu", state: "HI", location: [21.334006, -157.882545]});
Restaurant.create({name: "Samurai Inc", place: [place], description: "Local ice cakes!", img: "/images/samurai.jpg" });
 
var place = new Place({address: "505 Kalihi St", city: "Honolulu", state: "HI", location: [21.325917, -157.880106]});
Restaurant.create({name: "Chun Wah Kam", place: [place], description: "Manapua, pork hash, and half moon!", img: "/images/chun.jpg" });
 
 
 
var place = new Place({address: "Kailua Rd", city: "Kailua", state: "HI", location: [21.393092, -157.715435]});
ThingToDo.create({name: "Lanikai Beach", place: [place], description: "The finest sand on the island!", img: "/images/lanikai.jpg" });
 
var place = new Place({address: "Maunawili Rd", city: "Kailua", state: "HI", location: [21.358004, -157.763675]});
ThingToDo.create({name: "Maunawili Trailhead", place: [place], description: "Where Jason Mraz filmed 'I'm Yours'", img: "/images/maunawili.jpg" });
 
var place = new Place({address: "Kalakaua Ave & Pau St", city: "Honolulu", state: "HI", location: [21.2854952, -157.8328551]});
ThingToDo.create({name: "Walk the Waikiki Strip", place: [place], description: "Check out the street performers!", img: "/images/waikiki.jpg" });
 
var place = new Place({address: "Kokonani St", city: "Honolulu", state: "HI", location: [21.287216, -157.68185]});
ThingToDo.create({name: "Koko Head Hike", place: [place], description: "All 1,048 stairs to the top!", img: "/images/kokohead.jpg" });
 
var place = new Place({address: "Manoa Rd", city: "Honolulu", state: "HI", location: [21.331155, -157.801609]});
ThingToDo.create({name: "Manoa Falls", place: [place], description: "A relaxing hike to a waterfall.", img: "/images/manoa.jpg" });
 
var place = new Place({address: "", city: "Honolulu", state: "HI", location: [21.3666963, -157.7935449]});
ThingToDo.create({name: "Pali Lookout", place: [place], description: "Overlooking the East Side of Oahu!", img: "/images/pali.jpg" });
 
var place = new Place({address: "8801 Kalanianaole Hwy", city: "Honolulu", state: "HI", location: [21.285604, -157.673282]});
ThingToDo.create({name: "Sandy Beach Park", place: [place], description: "Best spot to body surf!", img: "/images/sandys.jpg" });
 
var place = new Place({address: "62-595 Kamehameha Hwy", city: "Honolulu", state: "HI", location: [21.59474, -158.103272]});
ThingToDo.create({name: "Anahulu River", place: [place], description: "Standup Paddle surrounded by turtles in the river!", img: "/images/haleiwa.jpg" });
 
var place = new Place({address: "", city: "Honolulu", state: "HI", location: [21.6429581, -158.0670594]});
ThingToDo.create({name: "Waimea Bay", place: [place], description: "Jump off the rock!", img: "/images/waimean.jpg" });
 
var place = new Place({address: "", city: "Honolulu", state: "HI", location: [21.3983802, -157.7278529]});
ThingToDo.create({name: "Kailua Beach", place: [place], description: "Kayak to the Mokulua Islands!", img: "/images/kayak.jpg" });
 
var place = new Place({address: "55-370 Kamehameha Hwy", city: "Honolulu", state: "HI", location: [21.640875, -157.921053,17]});
ThingToDo.create({name: "Polynesian Culture Center", place: [place], description: "Ha: the Breath of Life!", img: "/images/pcc.jpg" });
 
var place = new Place({address: "64-1550 Kamehameha Hwy", city: "Honolulu", state: "HI", location: [21.525876, -158.037819]});
ThingToDo.create({name: "Dole Plantation", place: [place], description: "Fresh Pineaple Ice Cream!", img: "/images/dole.jpg" });
 
var place = new Place({address: "304 S King St", city: "Honolulu", state: "HI", location: [21.306757, -157.85877]});
ThingToDo.create({name: "Iolani Palace", place: [place], description: "Learn about the history of Hawaii.", img: "/images/iolani.jpg" });
 
var place = new Place({address: "99-500 Salt Lake Blvd", city: "Honolulu", state: "HI", location: [21.3699664, -157.927449]});
ThingToDo.create({name: "Swap Meet", place: [place], description: "Bargain for anything and everything.", img: "/images/swap.jpg" });
 
var place = new Place({address: "1450 Ala Moana Blvd", city: "Honolulu", state: "HI", location: [21.29122,-157.843029]});
ThingToDo.create({name: "Ala Moana Shopping Center", place: [place], description: "The island's largest shopping mall.", img: "/images/alamoana.jpg" });
 
console.log("Finished inserting data");
console.log("Control-C to quit");




