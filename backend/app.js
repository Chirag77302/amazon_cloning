const express = require('express');
if(process.env.NODE_ENV !== "production"){
  require('dotenv').config();
}

const mongoose = require('mongoose');
const Product = require('./models/Product.js');
const dbUrl = process.env.DB_URL || 'mongodb://localhost:27017/Products';
const app = express();

app.use(express.json());
mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('DB connection successful!'));

app.get("/api/", async (req,res)=> {
    const products = await Product.find({});
    res.status(201).json(products);
});


app.listen(3000,console.log('connected backend'));