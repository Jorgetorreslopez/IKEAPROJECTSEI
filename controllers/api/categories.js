const Category = require('../../models/category')


module.exports = {
    create,
    show,
    allCategories,
    update,
    destroy,
    jsonCategories,
    jsonCategory
}


// viewControllers 
// jsonCategory jsonCategories

function jsonCategory(_, res) { // "_" to replace the req param not in use
    res.json(res.locals.data.category)
}

function jsonCategories(_, res) {
    res.json(res.locals.data.categories)
}

/****** C - Create ********/
async function create(req, res, next){
    try {
        const category = await Category.create(req.body)
        res.locals.data.category = category
        next()
    } catch (e) {
        res.status(400).json({ msg: e.message})
    }
}

/****** S - Show ********/
async function show(req, res, next){
    try {
        const category = await Category.findById(req.params.id)
        res.locals.data.category = category
        next()
    } catch (e) {
        res.status(400).json({ msg: e.message })
    }
}

/****** S - Show ********/
async function allCategories(req, res, next){
    try {
        const categories = await Category.find({})
        res.locals.data.categories = categories
        next()
    } catch (e) {
        res.status(400).json({ msg: e.message })
    }
}

/****** U - Update ********/
async function update(req, res, next){
    try {
        const category = await Category.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.locals.data.category = category
        next()
    } catch (e) {
        res.status(400).json({ msg: e.message })
    }
}

/****** D - Destroy/Delete ********/
async function destroy(req, res, next){
    try {
        const category = await Category.findByIdAndDelete(req.params.id)
        res.locals.data.category = category
        next()
    } catch (e) {
        res.status(400).json({ msg: e.message })
    }
}


