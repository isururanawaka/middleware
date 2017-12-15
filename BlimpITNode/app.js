const express = require('express');
const app = express();
var users = require('./routes/users');
var products = require('./routes/products');
var mongoAdapter = require('./mongoAdapter');
mongoAdapter.openConnection();
app.configure(function (req) {
    app.use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
        res.header("Access-Control-Allow-Headers", "X-Requested-With,authorization,Access-Control-Allow-Origin,entityid,Content-Type");
        next();
    });
    app.use(express.bodyParser());
});
app.all('/*', function (req, res, next) {
    if ('OPTIONS' === req.method) {
        res.send(200);
    }    else {
       next()
    }
});
app.post('/users', users.addUsers);
app.get('/products', products.getProducts);
app.post('/products', products.addProducts);

app.listen(3000, function () {
    console.log("BlimpITNode listening on port - 3000");
});