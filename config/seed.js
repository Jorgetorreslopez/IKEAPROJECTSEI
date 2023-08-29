require('dotenv').config();
require('./database');

const Category = require('../models/category');
const Item = require('../models/item');

(async function() {

  await Category.deleteMany({});
  const categories = await Category.create([
    {name: 'Products', sortOrder: 10},
    {name: 'Home Accessories', sortOrder: 20},
    {name: 'Rooms', sortOrder: 30},
    {name: 'Ideas and Inspirtation', sortOrder: 40},
    {name: 'Design', sortOrder: 50},
    {name: 'Deals', sortOrder: 60},
    {name: 'College Essentials', sortOrder: 70},
  ]);

  await Item.deleteMany({});
  const items = await Item.create([
    {name: 'Furniture', category: categories[0], price: 0},
    {name: 'Matresses', category: categories[0], price: 0},
    {name: 'Appliances', category: categories[0], price: 0},
    {name: 'Home Decor', category: categories[0], price: 0},
    {name: 'Bathroom', category: categories[0], price: 0},
    {name: 'Fender Jazz Bass', category: categories[1], price: 0},
    {name: 'Tama Imperialstar Kit', category: categories[2], price: 0},
    {name: 'Pearl Roadshow Kit', category: categories[2], price: 0},
    {name: 'Moog Subsequent 37 Analog', category: categories[3], price: 0},
    {name: 'Nord Stage 4', category: categories[3], price: 0},
    {name: 'Sequential Prophet-5', category: categories[3], price: 3239.00},
    {name: 'Yamaha Cp-88', category: categories[4], price: 0},
    {name: 'Roland Phantom-8', category: categories[4], price: 0},
    {name: 'Pioneer DDJ-800', category: categories[5], price: 0},
    {name: 'Pioneer XDJ-XZ', category: categories[5], price: 0},
    {name: 'Pioneer DDJ-REV7', category: categories[5], price: 0},
    {name: 'Pioneer DJM-A9 ', category: categories[5], price: 0},
    {name: 'Ampeg VH-140 C', category: categories[6], price: 0},
    {name: 'Vader 2x12 Cabinet', category: categories[6], price: 0},
    {name: 'Mesa Boogie Dual Rectifier', category: categories[6], price: 0},
    {name: 'Hughes & Ketner Tubemeister', category: categories[6], price: 0},
    {name: 'EVH 5150 100S', category: categories[6], price: 0},
  ]);

  console.log(items)

  process.exit();

})();