import React, { useContext } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ReactImageMagnify from 'react-image-magnify';
import './ProductCard.css';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Redirect } from "react-router";
import { DataContext } from "./contexts/DataContext";
import { typography } from '@material-ui/system';
// import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

function ProductCard(props){
        const classes = useStyles();
        const style = {
            fontSize:'16px',
            fontWeight:'500'
        }
        const style2 = {
            color:'#007616',
            margin:'2px'
        }
        const [anchorEl, setAnchorEl] = React.useState(null);
        const handleClick = (event) => {
            setAnchorEl(event.currentTarget);
        };

        const handleClose = () => {
            setAnchorEl(null);
        };

        const obj = useContext(DataContext);
        let x = obj.state.products.filter(obj => {return obj._id === props.match.params.id})
        // console.log('props are :',props);
        // console.log("x is :",x);
        return ( 
            <div className="product_card">
                {typeof x[0]==='undefined'?<Redirect to='/error'/>:
                    
                    <Grid container spacing={2}>
                        <Grid item xs={0} sm={1}></Grid>
                        <Grid item xs={12} sm={4}>
                            <Paper className={classes.paper}>
                                <ReactImageMagnify {...{
                                        smallImage: {
                                            alt: 'Wristwatch by Ted Baker London',
                                            isFluidWidth: true,
                                            src: x[0].image[0]
                                        },
                                        largeImage: {
                                            src: x[0].image[1],
                                            width: 1500,
                                            height: 2200
                                        },
                                        lensStyle: {
                                            background: 'https://m.media-amazon.com/images/G/31/apparel/rcxgs/tile._CB483369979_.gif',
                                            border: '1px solid #ccc'
                                        },
                                        shouldUsePositiveSpaceLens: true,
                                        enlargedImageContainerDimensions: {
                                            width: '150%',
                                            height: '120%'
                                        }
                                    }} />
                            </Paper>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Paper className={classes.paper}>
                                <div className="product_content">
                                    <h1 style={{color:'black'}}>{x[0].title}</h1>
                                    <a className="spacing anchor_tag" style={{'color':'#007185'}} href='www.google.com'>Visit the {x[0].Company} store</a>
                                    <div className="product__rating">
                                        {[...Array(parseInt(x[0].rating,10))].map(star => {
                                        return <i className="fa fa-star starcheck"></i>
                                        })}
                                        <p className="number_of_ratings">   {x[0].rating_nos} ratings</p>
                                    </div>
                                    <hr className="style-three"></hr>
                                    <div>
                                        <p className='spacing'><span style={style}> Deal Price: </span><span className="available_price">₹ {x[0].price}</span></p>
                                    </div>
                                    <div>
                                        <p className='spacing'><span style={style}>Your Save: </span>  <span className="product_price"> ₹4,000.00 (40%) </span></p>
                                    </div>
                                    <div>
                                        <p style={{fontSize:'17px',color:'black'}}><strong>EMI </strong>starts at ₹282. No Cost EMI available</p>
                                    </div>
                                    <div>
                                        <ul className='product_list'>
                                            <li><img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2BJREFUeNq0WMGxm0AMBY/vIaccg4+5QQXBFcTuwK7gmwr8fwWQCkwHnw5MByanHE2OOYV0EMnz5JH372L2mzCjWQPaXa309CQcBBNc9ZdPO5Lk0XXCCQzJaDiS9CSL1c/f/XvXmnls6LoOGCOSnWN+NMZzs7Enp/FsGkX3zzTEJC8kLcmensUWnTPJ6d5ecw8vxjCqoXGLsDyRdCQlSYNwFSRr0lvhdzx2Ax9j2IBvJCuctEVocuCkIQNqfk8jeyGBwey1D64QemMGV0ebrmlcwhu8WUPPKqWTY+R3/Dyl9xymv1N75nLR4hyOBZ1+g9Dodx09T/G79V17PiJrEodRleN565mVvcyZG6jfB//3OjqM5HC22jMNjGHQfbfMaT3JcAdM8bzaovKZZAMs3nqGsUALVFBo6b52EZhK2U5lk2lIIfyDzVpD52CA/g2Ac6RuYTsNDDkZ3MGYSpVOojxcDmBnA8/V1tTGCTlEMTBkA/OFcUk3hMGJAcwD+Gc7UKcKxV2DPFMKu8ITtks2+WGhfja4HAjzBjo1U4HTGCiecbLeAWJ+XpDuEeHogLcM9y2wEgwcpAdTH3UtC1UMeaFMsgnMaTtZonQbbNwpLKX3CA8GFMBngDXK0OCXypYdI9L4FQvz3NKzFyqkjs2Q7+K+X+9orjYwpPExROod5NIPhWrBvcEd9QhDYtWnLDC/UOHObWUDibFTEbm0JaFF4QkAZoX1UMhUq8B6NTdgMKiGQZGJIWDuiHcdKKC5ySbeFKAVApPFXIbcpDE2iXG/VhyyMqbKuhzWhRji4pkrwk0eMIBnprHoJvDyV4OT5NAldDOzRZ1ZYnmPyiPVhF9ZFmOJk/9ByFtkqK1r1Exs9czeaCVdvbCUhNY4dY6NXlDnlrZ1EJoGxJe9+W6Cy84CKscCV+/4cBG8mVgOdUBVT01j7jVXS22QJxeNWntuFMjGUamLiTq95UBffdNc9TZj6FTBQI3qLI1VLM35UKgf/VS5boaKfVJZZTZf/PX5PNCCPGxMpD5VM9UGZEbTJO0HY+SEUjO5Ma/SvyD2qf7wR9iklfyI9BZOepraGCl8FwoHJkq0qDsF8hz4kNJSDZUVr/9nEHc+cWUBa6Q6wwA6W0f5iF0fflP+WSReefjPon8CDABsv8NYms+x0wAAAABJRU5ErkJggg==' alt="" /><span style={{color:'#B12704'}}><strong> Save Extra </strong></span> <span className='li_content'> with 2 offers </span> </li>
                                            <li><span style={{color:'#B12704'}}><strong>No Cost EMI: </strong></span> <span className='li_content'> Avail No Cost EMI on select cards for orders above ₹3000 Details </span></li>
                                            <li><span style={{color:'#B12704'}}><strong> Partner Offers: </strong> </span>  <span className='li_content'>Get GST invoice and save up to 28% on business purchases. Sign up for free</span></li>
                                        </ul>
                                    </div>
                                    <div className="product_buttons">
                                        <div className='card_buttons'>
                                            <img src='https://images-na.ssl-images-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-cod._CB485937110_.png' alt="Pay on Delivery" ></img>
                                            <typography>
                                                <div align={'center'}>
                                                    <p style={{'color':'#007185'}} >Pay On</p> 
                                                    <p style={{'color':'#007185'}}>Delivery</p>
                                                </div>
                                            </typography>
                                        </div>
                                        <div className='card_buttons'>
                                            <img src='https://images-na.ssl-images-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-returns._CB484059092_.png' alt="7 days replacement"></img>
                                            <typography>
                                                <div align={'center'}>
                                                    <p style={{'color':'#007185'}}>Returnable</p>
                                                </div>
                                            </typography>
                                        </div>
                                        <div className='card_buttons'>
                                            <img src='https://images-na.ssl-images-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-amazon-delivered._CB485933725_.png' alt="Amazon Delivered"></img>
                                            <typography>
                                                <div align={'center'}>
                                                    <p style={{'color':'#007185'}}>Amazon</p>
                                                    <p style={{'color':'#007185'}}>Delivered</p>
                                                </div>
                                            </typography>
                                        </div>
                                        <div className='card_buttons'>
                                            <img src='https://images-na.ssl-images-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-warranty._CB485935626_.png' alt="1 Year Warranty"></img>
                                            <typography>
                                                <div align={'center'}>
                                                    <p style={{'color':'#007185'}}>No-Contact</p>
                                                    <p style={{'color':'#007185'}}> Delivery</p>
                                                </div>
                                            </typography>
                                        </div>
                                    </div>
                                </div>
                                <hr className="style-three"></hr>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} sm={2}>
                        <Paper className={classes.paper}>
                            <div className="product_content">
                                <div><p className='spacing'><span className="available_price">₹ {x[0].price}</span></p></div>
                                <div><p className='spacing'><span className='product_sidebar_span'>Free Delivery: </span>  <span style={{fontSize:'15px'}} ><strong> Wednesday, November 17 </strong> </span></p></div>
                                <div><p className='spacing'><span className='product_sidebar_span'>Fastest Delivery: </span>  <span style={{fontSize:'15px'}} ><strong> Monday, November 15 </strong></span></p></div>
                                <div><p style={{fontSize:'15px',color:'black'}}>Order within 7 hrs and 54 mins</p></div>
                                <h2 style={style2}>In Stock</h2>
                                <p className='end_para'>Sold by <span style={{color:'#007185'}}> {x[0].Company} Private Ltd </span> and <span style={{color:'#007185'}}> Fulfilled by Amazon. </span> </p>
                                <div style={{margin:'10px 0px 10px 0px'}}>
                                    <p style={{fontSize:'22px'}}>Quantity: </p>
                                    <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                                        1
                                    </Button>
                                    <Menu
                                        id="simple-menu"
                                        anchorEl={anchorEl}
                                        keepMounted
                                        open={Boolean(anchorEl)}
                                        onClose={handleClose}
                                    >
                                        <MenuItem onClick={handleClose}>2</MenuItem>
                                        <MenuItem onClick={handleClose}>3</MenuItem>
                                        <MenuItem onClick={handleClose}>4</MenuItem>
                                    </Menu>
                                </div>
                                <div style={{margin:'20px'}} ><button className='product_card_btns'>Add To Cart</button></div>
                                <div style={{margin:'20px'}}><button className='product_card_btns col'>Buy Now</button></div>
                            </div>
                        </Paper>
                        </Grid>

                    </Grid>
                }
            </div>
        )

}

export default ProductCard;