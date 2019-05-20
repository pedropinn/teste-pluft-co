const mongoose = require('mongoose');
const Restaurant = mongoose.model('Restaurant');

module.exports = {
    async index(req, res) {
        const {
            page = 1
        } = req.query;
        const restaurants = await Restaurant.paginate({}, {
            page,
            limit: 5
        });
        return res.json(restaurants);
    },

    async show(req, res) {
        const restaurant = await Restaurant.findById(req.params.id);
        return res.json(restaurant);
    },

    async store(req, res) {
        const restaurant = await Restaurant.create(req.body);
        return res.json(restaurant);
    },

    async update(req, res) {
        const restaurant = await Restaurant.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        })
        return res.json(restaurant);
    },

    async destroy(req, res) {
        await Restaurant.findByIdAndRemove(req.params.id);

        return res.send();
    },


};