const Item = require('../models/item');

module.exports = {
    create: function (req, res, next) {
        const item_info = req.body;
        Item
            .create(item_info)
            .then((item) => res.send(item))
            .catch(next);
    },

    read: function (req, res, next) {
        Item
            .find({})
            .then((items) => {
                console.log(items);
                res.send(items)
            })
            .catch(next);
    },

    readOne: function (req, res, next) {
        Item
            .find({
                _id: req.params.id
            })
            .then((items) => {
                console.log(items);
                res.send(items)
            })
            .catch(next);
    },

    update: function (req, res, next) {
        const item_id = req.params.id;
        const item_info = req.body;
        Item
            .findByIdAndUpdate({
                _id: item_id
            }, item_info)
            .then(() => Item.findById({
                _id: item_id
            }))
            .then((item) => res.send(item))
            .catch(next);
    },

    delete: function (req, res, next) {
        const item_id = req.params.id;
        Item
            .findByIdAndRemove({
                _id: item_id
            })
            .then((item) => res.status(204).send(item))
            .catch(next);
    }
}