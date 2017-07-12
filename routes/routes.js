const ItemsController = require('../controllers/itemsController');

module.exports = function (App) {
    
    App.post('/api/items', ItemsController.create);
    App.get('/api/items/:id',ItemsController.readOne);
    App.get('/api/items', ItemsController.read);
    App.put('/api/items/:id', ItemsController.update);
    App.delete('/api/items/:id', ItemsController.delete);

}