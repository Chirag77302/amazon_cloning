import React,{Component, useContext} from "react";
import "./Header.css";
import { DataContext } from "./contexts/DataContext";

function  Header() {  
    const obj = useContext(DataContext);
        return (
            <nav style={{color:"white"}}>
                <div className="left dflex">
                    <a href="" ><img className="logo" alt="logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"/><span>.in</span></a>
                    <div className="item">
                        <p style={{fontSize:'14px'}} > Hello</p>
                        <p style={{fontSize:'18px'}}><i className="fa fa-map-marker"></i><strong>Select Your Address</strong></p>
                    </div>
                </div>
                
                <div class="searchBox dflex">
                    <div className="box">
                        <div className="dflex">
                            <button className="all" type="button">
                                All <i className="fa fa-sort-desc"></i>
                            </button>
                            <form onSubmit={obj.handleSubmit} >
                                <input type="text" name="tagname" value={obj.state.tagname} onChange={obj.handleChange} ></input>
                                <button className="search" type="submit"><i className="fa fa-search"></i></button>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="right dflex">
                    <div className="item">
                        <i className="fa fa-flag"></i><i className="fa fa-sort-desc"></i>
                    </div>
                    <div className="item">
                        <p style={{fontSize:'14px'}} >Hello,</p>
                        <p style={{fontSize:'18px'}} ><strong>Account & Lists</strong><i className="fa fa-sort-desc"></i></p>
                    </div>
                    <div className="item">
                        <p style={{fontSize:'14px'}} >Refund</p>
                        <p style={{fontSize:'18px'}} ><strong> & Order </strong> </p>
                    </div>
                    <div className="item">
                        <i className="fas fa-cart-plus fa-2x"></i><strong>Cart</strong>
                    </div>
                </div>
            </nav>

            // <div className="header">
            
            //     <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"/>
            
            //     <div className="header__search">
            //         {/* <form onSubmit={obj.handleSubmit}> */}
            //             <input type="text" name="product_category" value={obj.state.product_category} onChange={obj.handleChange} className="header__searchInput" />
            //             <button>
            //             <SearchIcon className="header__searchIcon" />
            //             </button>
            //         {/* </form> */}
            //     </div>

            //     <div className="header__nav">
                    
            //         <div className="header__option">
            //             <span className="header__optionLineOne">Hello Guest</span>
            //             <span className="header__optionLineTwo">Sign In</span>
            //         </div>
                    

                    
            //         <div className="header__option">
            //             <span className="header__optionLineOne">Returns</span>
            //             <span className="header__optionLineTwo">& Orders</span>
            //         </div>
                    
                    

            //         <div className="header__option">
            //         <span className="header__optionLineOne">Your</span>
            //         <span className="header__optionLineTwo">Prime</span>
            //         </div>

                    
            //         <div className="header__optionBasket">
            //             <ShoppingBasketIcon />
            //             <span className="header__optionLineTwo header__basketCount">
            //             0
            //             </span>
            //         </div>
            //     </div>

            // </div>

            );
  }

export default Header;