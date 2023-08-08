
const user = require('../model/product');
const getProducts = async (req, res) => {
    try {
        const products = await user.find({});
        res.json(products);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}
module.exports = getProducts;
