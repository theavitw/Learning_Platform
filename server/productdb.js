

const coonect = require('./db/connect');
const product = require('./model/product');


const json = require('./data.json');

const start = async () => {
    try {
        await coonect;
        await product.deleteMany({});
        await product.insertMany(json);
        console.log('done');
    }
    catch (err) {
        console.log(err);

    }
}

start();
