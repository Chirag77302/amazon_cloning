import React from "react";
import "./Product.css";
// import ReactImageMagnify from 'react-image-magnify';
// import ReactSlick from "react-slick";
import { Link } from "react-router-dom";


function Product({ id, title, image, price, rating,rating_nos }) {

  const link = '/product/' +  id;
  console.log(link);
  return (
    <div className="product">
        <img src={image} alt="" />

      <div className="product_infoo">
        <h4 style={{textAlign:'start'}}>{title}</h4>
        <p className="product__price" >
          <span>Price : </span>  <small>₹</small> <span className="price">{price}</span>
        </p>
        <div className="product__rating">
            {[...Array(parseInt(rating,10))].map(star => {
              return <i className="fa fa-star starcheck"></i>
            })}
            <p className="number_of_ratings">{rating_nos} ratings</p>
        </div>
        <div style={{textAlign:'start'}}>
            <span className="oct-acs-pc-badge">DEAL OF THE DAY</span>
            <span className="oct-acs-pc-badge-skew"></span>
        </div>
        <Link exact to = {link} >
          <button className="basket_add" style={{float:'left',cursor:'pointer'}} ><strong>Add to Basket</strong></button>
        </Link>
      </div>
      
    </div>
  );
}

export default Product;