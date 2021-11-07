import React from "react";
import "./Product.css";
import { Grid } from "@material-ui/core";

function Product({ id, title, image, price, rating }) {

  return (
    <div className="product">
      {/* <div className="product__info"> */}
        <img src={image} alt="" />
      {/* </div> */}

      <div className="product_infoo">
        <h4>{title}</h4>
        <p className="product__price">
          <span>Price : </span>  <small>₹</small> <span className="price">{price}</span>
        </p>
        <div className="product__rating">
            {[...Array(parseInt(rating,10))].map(star => {
              return <i className="fa fa-star starcheck"></i>
            })}
        </div>
        <button className="basket_add"><strong>Add to Basket</strong></button>
      </div>
      
    </div>
  );
}

export default Product;