import React from "react";
import "./Product.css";
import ReactImageMagnify from 'react-image-magnify';
import ReactSlick from "react-slick";

function Product({ id, title, image, price, rating,rating_nos }) {
  // const {
  //     rimProps,
  //     rsProps
  // } = this.props;

  
  return (
    <div className="product">
        {/* <ReactSlick
                {...{
                    dots: true,
                    infinite: true,
                    speed: 500,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }}
                {...rsProps}
            >
                {dataSource.map((src, index) => (
                    <div key={index}>
                        <ReactImageMagnify
                            {...{
                                smallImage: {
                                    alt: 'Wristwatch by Versace',
                                    isFluidWidth: true,
                                    src: src.small,
                                    srcSet: src.srcSet,
                                    sizes: '(max-width: 480px) 100vw, (max-width: 1200px) 30vw, 360px'
                                },
                                largeImage: {
                                    src: src.large,
                                    width: 1426,
                                    height: 2000
                                },
                                lensStyle: { backgroundColor: 'rgba(0,0,0,.6)' }
                            }}
                            {...rimProps}
                        />
                    </div>
                ))}
          </ReactSlick> */}
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
        <button className="basket_add" style={{float:'left'}} ><strong>Add to Basket</strong></button>
      </div>
      
    </div>
  );
}

export default Product;