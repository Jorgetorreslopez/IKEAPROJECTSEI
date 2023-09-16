require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI);
const db = mongoose.connection;

db.on('connected', () => {
	console.log(`MONGO: ${db.name} ON AT ${db.host}`);
});

// const Category = require('../models/category');
// const Item = require('../models/item');
// db.on('connected', () => {

// (async function () {
// 	await Category.deleteMany({});
// 	const categories = await Category.create([
// 		{ name: 'Entertainment', sortOrder: 10 },
// 		{ name: 'Furniture', sortOrder: 20 },
// 		{ name: 'Home Decor', sortOrder: 30 },
// 		{ name: 'Appliances', sortOrder: 40 },
// 		{ name: 'Kitchen', sortOrder: 50 },
// 		{ name: 'Bedroom', sortOrder: 60 },
// 		{ name: 'Bathroom', sortOrder: 70 }
// 	]);

// 	await Item.deleteMany({});
// 	const items = await Item.create([
// 		{
// 			name: 'FÖRNUFTIG Pinball Machine',
// 			emojiURL: 'https://i.imgur.com/OwRzclM.jpg',
// 			category: categories[0],
// 			price: 274.99,
// 			rating: 8 / 10
// 		},
// 		{
// 			name: 'GRILLSKÄR Pool Table',
// 			emojiURL: 'https://i.imgur.com/beK4Yy5.jpg',
// 			category: categories[0],
// 			price: 849.0,
// 			rating: 8 / 10
// 		},
// 		{
// 			name: 'DÄNKA Juke Box ',
// 			emojiURL: 'https://i.imgur.com/Ujj6ti7.jpg',
// 			category: categories[0],
// 			price: 99.99,
// 			rating: 7 / 10
// 		},
// 		{
// 			name: 'PROPPMÄTT Piano',
// 			emojiURL: 'https://i.imgur.com/JICCSdW.png',
// 			category: categories[0],
// 			price: 998.99,
// 			rating: 9 / 10
// 		},
// 		{
// 			name: 'LOBBÄK Acrylic Chess Table',
// 			emojiURL: 'https://i.imgur.com/Vr81QEz.jpg',
// 			category: categories[0],
// 			price: 59.99,
// 			rating: 6 / 10
// 		},
// 		{
// 			name: 'KASKER Disco Ball',
// 			emojiURL: 'https://i.imgur.com/D8Q1pSD.jpg',
// 			category: categories[0],
// 			price: 47.98,
// 			rating: 9 / 10
// 		},
// 		{
// 			name: 'MORABO Sofa',
// 			emojiURL: 'https://i.imgur.com/VJNA2ip.jpg',
// 			category: categories[1],
// 			price: 1349.0,
// 			rating: 6 / 10
// 		},
// 		{
// 			name: 'LILLTRÄSK Lawn Chair',
// 			emojiURL: 'https://i.imgur.com/sWdKN15.jpg',
// 			category: categories[1],
// 			price: 49.0,
// 			rating: 4 / 10
// 		},
// 		{
// 			name: 'GRÅSALA Table/Chair Set',
// 			emojiURL: 'https://i.imgur.com/p9kmYyU.jpeg',
// 			category: categories[1],
// 			price: 159.99,
// 			rating: 5 / 10
// 		},
// 		{
// 			name: 'BESTÅ TV Storage',
// 			emojiURL: 'https://i.imgur.com/Rdpsvov.jpg',
// 			category: categories[1],
// 			price: 1175.0,
// 			rating: 8 / 10
// 		},
// 		{
// 			name: 'JÄRVFJÄLLET Gaming Chair',
// 			emojiURL: 'https://i.imgur.com/LZQZ4qH.jpg',
// 			category: categories[1],
// 			price: 369.99,
// 			rating: 8 / 10
// 		},
// 		{
// 			name: 'SMÅSTAD Child Toy Storage',
// 			emojiURL: 'https://i.imgur.com/md7BMzi.jpg',
// 			category: categories[1],
// 			price: 99.99,
// 			rating: 4 / 10
// 		},
// 		{
// 			name: 'BJÖRKSTA Marble Scultpture',
// 			emojiURL: 'https://i.imgur.com/0a42EAP.jpg',
// 			category: categories[2],
// 			price: 84.99,
// 			rating: 8 / 10
// 		},
// 		{
// 			name: 'MÖLLEKULLA Picture Frame',
// 			emojiURL: 'https://i.imgur.com/SQJhEXv.jpg',
// 			category: categories[2],
// 			price: 45.89,
// 			rating: 4 / 10
// 		},
// 		{
// 			name: 'BERÄKNA Glass Vase',
// 			emojiURL: 'https://i.imgur.com/8tXB1G0.jpg',
// 			category: categories[2],
// 			price: 15.99,
// 			rating: 6 / 10
// 		},
// 		{
// 			name: 'LILJETRÄD Animal Figurine',
// 			emojiURL: 'https://i.imgur.com/8JFkoBB.jpg',
// 			category: categories[2],
// 			price: 14.99,
// 			rating: 8 / 10
// 		},
// 		{
// 			name: 'TÄTING Wooden Sailboat',
// 			emojiURL: 'https://i.imgur.com/p3Nh1GM.jpg',
// 			category: categories[2],
// 			price: 24.99,
// 			rating: 3 / 10
// 		},
// 		{
// 			name: 'HEDERVÄRD Candle Holder',
// 			emojiURL: 'https://i.imgur.com/eIRc8Z7.jpg',
// 			category: categories[2],
// 			price: 9.99,
// 			rating: 9 / 10
// 		},
// 		{
// 			name: 'SÄRKLASSIG Induction Cooktop',
// 			emojiURL: 'https://i.imgur.com/UPjJNbQ.jpg',
// 			category: categories[3],
// 			price: 829.0,
// 			rating: 7 / 10
// 		},
// 		{
// 			name: 'ALMARÖD Washer & Dryer',
// 			emojiURL: 'https://i.imgur.com/1E4sTQc.jpg',
// 			category: categories[3],
// 			price: 1429.99,
// 			rating: 7 / 10
// 		},
// 		{
// 			name: 'VILLKORLIG Dishwasher',
// 			emojiURL: 'https://i.imgur.com/BmmthZx.jpg',
// 			category: categories[3],
// 			price: 999.0,
// 			rating: 6 / 10
// 		},
// 		{
// 			name: 'STJÄRNSTATUS French Door Refrigerator',
// 			emojiURL: 'https://i.imgur.com/rFbsblm.jpg',
// 			category: categories[3],
// 			price: 2699.0,
// 			rating: 8 / 10
// 		},
// 		{
// 			name: 'TÄNGBY Self-clean Wall Oven',
// 			emojiURL: 'https://i.imgur.com/ervMjjW.jpg',
// 			category: categories[3],
// 			price: 1499.0,
// 			rating: 8 / 10
// 		},
// 		{
// 			name: 'GRILLSKÄR Air Fryer',
// 			emojiURL: 'https://i.imgur.com/AdJZhi8.jpg',
// 			category: categories[3],
// 			price: 149.0,
// 			rating: 9 / 10
// 		},
// 		{
// 			name: 'FÖRHÖJA Kitchen Island',
// 			emojiURL: 'https://i.imgur.com/EMXlBak.jpg',
// 			category: categories[4],
// 			price: 179.98,
// 			rating: 4 / 10
// 		},
// 		{
// 			name: 'KLAMPENBORG Kitchen Mat',
// 			emojiURL: 'https://i.imgur.com/XZdTMEN.jpg',
// 			category: categories[4],
// 			price: 25.99,
// 			rating: 6 / 10
// 		},
// 		{
// 			name: 'SEKTION Wall Cabinet',
// 			emojiURL: 'https://i.imgur.com/37FBWSK.jpg',
// 			category: categories[4],
// 			price: 116.0,
// 			rating: 7 / 10
// 		},
// 		{
// 			name: 'SÄLJAN Wood Countertop',
// 			emojiURL: 'https://i.imgur.com/PAVy9sr.jpg',
// 			category: categories[4],
// 			price: 79.0,
// 			rating: 7 / 10
// 		},
// 		{
// 			name: 'BOVIGGEN Kitchen Sink',
// 			emojiURL: 'https://i.imgur.com/772x4ZH.jpg',
// 			category: categories[4],
// 			price: 329.0,
// 			rating: 5 / 10
// 		},
// 		{
// 			name: 'ÄLMAREN Kitchen Faucet',
// 			emojiURL: 'https://i.imgur.com/oKFH0jF.jpg',
// 			category: categories[4],
// 			price: 129.0,
// 			rating: 6 / 10
// 		},
// 		{
// 			name: 'MYRBACKA Memory Foam Mattress',
// 			emojiURL: 'https://i.imgur.com/nxa1iRy.jpg',
// 			category: categories[5],
// 			price: 699.0,
// 			rating: 9 / 10
// 		},
// 		{
// 			name: 'KRISTRUP Alarm Clock',
// 			emojiURL: 'https://i.imgur.com/K2OzkIZ.jpg',
// 			category: categories[5],
// 			price: 27.99,
// 			rating: 1 / 10
// 		},
// 		{
// 			name: 'LUNDTRAV Cat Pillow',
// 			emojiURL: 'https://i.imgur.com/ItIlBT4.jpg',
// 			category: categories[5],
// 			price: 24.99,
// 			rating: 11 / 10
// 		},
// 		{
// 			name: 'MALM King Bed Frame',
// 			emojiURL: 'https://i.imgur.com/OPMKkB7.jpg',
// 			category: categories[5],
// 			price: 349.0,
// 			rating: 9 / 10
// 		},
// 		{
// 			name: 'KULLEN 2 Drawer Night Stand',
// 			emojiURL: 'https://i.imgur.com/TIgMyev.jpg',
// 			category: categories[5],
// 			price: 49.99,
// 			rating: 8 / 10
// 		},
// 		{
// 			name: 'ÄNGSLILJA Bed Bench',
// 			emojiURL: 'https://i.imgur.com/3zk41Fv.jpg',
// 			category: categories[5],
// 			price: 89.99,
// 			rating: 4 / 10
// 		},
// 		{
// 			name: 'RÄTTVIKEN Bathroom Sink',
// 			emojiURL: 'https://i.imgur.com/8VFyFNZ.jpg',
// 			category: categories[6],
// 			price: 160.0,
// 			rating: 5 / 10
// 		},
// 		{
// 			name: 'GODMORGON Bamboo Bath Mat',
// 			emojiURL: 'https://i.imgur.com/Fod55Ax.jpg',
// 			category: categories[6],
// 			price: 24.99,
// 			rating: 7 / 10
// 		},
// 		{
// 			name: 'BROGRUND Rainfall Shower Head',
// 			emojiURL: 'https://i.imgur.com/MzAUTmy.jpg',
// 			category: categories[6],
// 			price: 29.99,
// 			rating: 9 / 10
// 		},
// 		{
// 			name: 'RUNSKÄR Toilet with Bidet',
// 			emojiURL: 'https://i.imgur.com/JryMqRv.jpg',
// 			category: categories[6],
// 			price: 499.0,
// 			rating: 11 / 10
// 		},
// 		{
// 			name: 'RÄGRUND Towel Bar',
// 			emojiURL: 'https://i.imgur.com/obQmuXe.jpg',
// 			category: categories[6],
// 			price: 19.99,
// 			rating: 3 / 10
// 		},
// 		{
// 			name: 'BJÄLVEN Bath Robe',
// 			emojiURL: 'https://i.imgur.com/QkG08Bq.jpg',
// 			category: categories[6],
// 			price: 70.0,
// 			rating: 9 / 10
// 		}
// 	]);
// 	console.log(items);
// 	process.exit();
// })();
// })
