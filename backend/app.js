const express = require('express');
if(process.env.NODE_ENV !== "production"){
  require('dotenv').config();
}

const mongoose = require('mongoose');
const Product = require('./models/Product.js');
const dbUrl = process.env.DB_URL
const app = express();
// 'mongodb://localhost:27017/Products'

app.use(express.json());
mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('DB connection successful!'));

// Product.insertMany(  
//   {
//     'title':'TP-Link USB WiFi Adapter for PC(TL-WN725N), N150 Wireless Network Adapter for Desktop - Nano Size WiFi Dongle',
//     'price':'449.00',
//     'tagname':['Electronics','TP-Link'],
//     'rating':'4',
//     'Company':'TP-Link',
//     'image':["https://m.media-amazon.com/images/I/51Km5DZo8zL._SX522_.jpg","https://m.media-amazon.com/images/I/51Km5DZo8zL._SL1000_.jpg"],
//     'product_category':['Electronics'],
//     'rating_nos':"138,720"
//   }
// )
// .then(res => {
//   console.log("all inserted successfully");
// })


app.get("/api/", async (req,res)=> {
    const products = await Product.find({});
    res.status(201).json(products);
    // res.send(x);
});


app.listen(3000,console.log('connected backend'));