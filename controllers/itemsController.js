const Item = require('../models/item');

module.exports = {
    create: function (req, res, next) {
        const item_info = req.body;
        Item
            .create(item_info)
            .then((item) => res.send(item))
            .catch(next);
    }
}