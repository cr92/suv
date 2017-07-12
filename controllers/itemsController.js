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
}