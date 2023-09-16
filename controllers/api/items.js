const Item = require('../../models/item');
const Favorites = require('../../models/favorites');
const User = require('../../models/user');

module.exports = {
	index,
	show,
	getFavorites,
	addToFavorites,
	removeFromFavorites
};

function jsonItem(req, res) {
	res.json(res.locals.data.todo);
}

function jsonItems(req, res) {
	res.json(res.locals.data.todos);
}

/****** R - Read ********/
async function index(req, res, next) {
	try {
		const items = await Item.find({}).sort('name').populate('category').exec();
		// re-sort based upon the sortOrder of the categories
		items.sort((a, b) => a.category.sortOrder - b.category.sortOrder);
		res.status(200).json(items);
	} catch (e) {
		res.status(400).json({ msg: e.message });
	}
}

async function show(req, res) {
	try {
		const item = await Item.findById(req.params.id);
		res.status(200).json(item);
	} catch (e) {
		res.status(400).json({ msg: e.message });
	}
}

async function getFavorites(req, res) {
	try {
		const favorites = await Favorites.find({
			user: req.user._id
		});
		console.log(favorites);
		res.status(200).json(favorites[0]);
	} catch (error) {
		res.status(400).json({ msg: error.message });
	}
}

async function addToFavorites(req, res, next) {
	const itemId = req.params.id;
	const isItemFavorite = async (itemId, favoriteItems) => {
		const foundItem = await favoriteItems.find((item) => {
			console.log(item.id === itemId);
			item.id === itemId;
		});
		if (foundItem) return true;
		console.log('FOUND ITEM', foundItem);
		return false;
	};
	try {
		const item = await Item.findById(itemId);
		console.log('ID', req.params.id, item);
		if (!item) {
			return res.status(404).json({ msg: 'Item not found' });
		}
		const user = await User.findById(req.user._id).populate('favorites');
		console.log('USER', user);
		if (!user.favorites) {
			const newFavorites = new Favorites({
				user: req.user._id,
				items: [item] // Use 'items' as per your schema
			});
			await newFavorites.save();
			console.log('NEW FAVES', newFavorites);
			user.favorites = newFavorites;
		} else {
			const favorites = await Favorites.find({
				user: req.user._id
			});
			const foundFavorite = await Favorites.findById(favorites[0]._id);
			console.log('FAVORITE ITEMS', favorites);
			console.log(itemId, favorites[0]);
			// Check if the item is already in the user's favorites to avoid duplicates
			if (isItemFavorite(itemId, favorites[0].items)) {
				favorites[0].items.addToSet(item);
				// const unique = [...new Set(favorites[0].items.map((item) => item))]
				// console.log(unique)
				foundFavorite.items = favorites[0].items;
				await foundFavorite.save();
				//console.log('FOUND FAVE', foundFavorite)
				//user.favorites.items = favorites[0].items
				//await favorites[0].save()
			} else {
				console.log('Item Already In Favorites');
				return res.status(404).json({ msg: 'Item already in favorites' });
			}
		}
		user.populate('favorites');
		await user.save();
		console.log('USER FAVE ITEMS', user.favorites.items);
		res.json(user);
	} catch (e) {
		console.error('Error:', e);
		res.status(500).json({ msg: 'Server error' });
	}
}

async function removeFromFavorites(req, res, next) {
	const itemId = req.params.id;
	const isItemFavorite = async (itemId, favoriteItems) => {
		const foundItem = await favoriteItems.find((item) => {
			console.log('IS ITEM FAVE', item.id === itemId);
			item.id === itemId;
		});
		if (foundItem) return true;
		//console.log('FOUND ITEM', foundItem);
		return false;
	};
	try {
		const item = await Item.findById(itemId);
		//console.log('ID', req.params.id, item);
		if (!item) {
			return res.status(404).json({ msg: 'Item not found' });
		}
		const user = await User.findById(req.user._id).populate('favorites');
		//console.log('USER', user);
		if (!user.favorites) {
			const newFavorites = new Favorites({
				user: req.user._id,
				items: [item] // Use 'items' as per your schema
			});
			await newFavorites.save();
			//console.log('NEW FAVES', newFavorites);
			user.favorites = newFavorites;
		} else {
			const favorites = await Favorites.find({
				user: req.user._id
			});
			const foundFavorite = await Favorites.findById(favorites[0]._id);
			//console.log('FAVORITE ITEMS', favorites);
			console.log('GIBBERISH', favorites[0]);
			favorites[0].items.pull(item);
			foundFavorite.items = favorites[0].items
			await foundFavorite.save();
		}
		user.populate('favorites');
		await user.save();
		console.log('USER FAVE ITEMS', user.favorites.items);
		res.json(user);
	} catch (e) {
		console.error('Error:', e);
		res.status(500).json({ msg: 'Server error' });
	}
}
