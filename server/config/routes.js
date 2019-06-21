var products = require('../controllers/products');

module.exports = (app) => {
    // api route to display all products
    app.get('/products', (req, res) => products.index(req, res));

    // api route to create a new product
    app.post('/products', (req, res) => products.create(req, res));

    // api route to read a product by id
    app.get('/products/:prodID', (req, res) => products.read(req, res));

    // api route to update product by id
    app.put('/products/:prodID', (req, res) => products.update(req, res));

    // api route to delete product by id
    app.delete('/products/:prodID', (req, res) => products.delete(req, res));
}