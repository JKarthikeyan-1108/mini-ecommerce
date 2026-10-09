const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connectDatabase = require('./config/connectDatabase'); 

// IMPORTANT: Make sure this path matches the exact name of your product model file!
const Product = require('./models/productModel'); 
const products = require('./data/products.json');

// Load your environment variables (like your MongoDB URI)
dotenv.config({ path: 'config/config.env' });

// Connect to your MongoDB database
connectDatabase();

const seedProducts = async () => {
    try {
        // Clear out any old data first to avoid duplicates
        await Product.deleteMany(); 
        console.log('Old products deleted!');

        // Insert the data from your JSON file
        await Product.insertMany(products);
        console.log('All products successfully added to MongoDB!');

        process.exit();
    } catch (error) {
        console.error('Error with seeder:', error.message);
        process.exit(1);
    }
};

seedProducts();