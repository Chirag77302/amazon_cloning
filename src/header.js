import React,{useContext} from "react";
import "./Header.css";
import { DataContext } from "./contexts/DataContext";

function  Header() {  
    const obj = useContext(DataContext);
        return (
            <nav style={{color:"white"}}>
                <div className="left dflex">
                    <a href="www.google.com" ><img className="logo" alt="logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"/><span>.in</span></a>
                    <div className="item" justify="center">
                        <p style={{fontSize:'10px'}}> Hello</p>
                        <p style={{fontSize:'12px'}}><i className="fa fa-map-marker"></i><strong>Select Your Address</strong></p>
                    </div>
                </div>
                
                <div class="searchBox dflex">
                    <div className="box">
                        <div className="dflex">
                            <button className="all" type="button">All</button>
                            <form onSubmit={obj.handleSubmit} className="dflex" >
                                <input type="text" name="tagname" value={obj.state.tagname} onChange={obj.handleChange} ></input>
                                <button className="search" type="submit"><i className="fa fa-search"></i></button>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="right dflex">
                    <div className="item dflex">
                        <i className="fa fa-flag"></i><i className="fa fa-sort-desc"></i>
                    </div>
                    <div className="item">
                        <p style={{fontSize:'10px'}} >Hello,</p>
                        <p style={{fontSize:'12px'}} ><strong>Account & Lists</strong><i className="fa fa-sort-desc"></i> </p>
                    </div>
                    <div className="item">
                        <p style={{fontSize:'10px'}} >Refund</p>
                        <p style={{fontSize:'12px'}} ><strong> & Order </strong> </p>
                    </div>
                    <div className="item dflex">
                        <i className="fas fa-cart-plus"></i><strong>Cart</strong>
                    </div>
                </div>
            </nav>

         
            );
  }

export default Header;