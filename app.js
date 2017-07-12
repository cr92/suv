const Express = require('express');
const Mongoose = require('mongoose');
const BodyParser = require('body-parser');

const Routes = require('./routes/routes');

const App = Express();

Mongoose.Promise = global.Promise;
Mongoose.connect('mongodb://localhost/suv');

App.use(BodyParser.json());

Routes(App);

App.use(function error_handling_middleware(err, req, res, next) {
    res.status(500).send({
        error: err.message
    });
})

module.exports = App;