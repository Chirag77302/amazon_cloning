import React, { useContext } from "react";
// import SearchIcon from "@material-ui/icons/Search";
// import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Drawer } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
// import { withThemeCreator } from "@material-ui/styles";
import MenuIcon from '@material-ui/icons/Menu';
import './Subheader.css';
import { DataContext } from "./contexts/DataContext";

const useStyles = makeStyles({
    list: {
      width: 250,
    },
    fullList: {
      width: 'auto',
    },
  });
  

function SubHeader() {  
    const classes = useStyles();
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <div
        className={clsx(classes.list, {
            [classes.fullList]: anchor === 'top' || anchor === 'bottom',
        })}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
        >
        <List>
            {['Laptops', 'Clothing', 'Television', 'Earphones','Washing Machine'].map((text, index) => (
            <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
            </ListItem>
            ))}
        </List>
        <Divider />
        <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
            </ListItem>
            ))}
        </List>
        </div>
    );
    
    const obj = useContext(DataContext);
    // console.log(obj);
  return (
    <div className="header" style={{backgroundColor:"#232f3e"}} >
                    
        <div className="header__nav">
            
            <div>
                {['left'].map((anchor) => (
                    <React.Fragment key={anchor}>
                    <Button onClick={toggleDrawer(anchor, true)} style={{color:'white'}}><MenuIcon fontSize="large"></MenuIcon></Button>
                    <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                        {list(anchor)}
                    </Drawer>
                    </React.Fragment>
                ))}
            </div>
            
            <div className="header__option">
                <Button onClick={() => obj.handleClick('')} style={{color:'white'}}>All</Button>
            </div>
            
            <div className="header__option">
                <Button onClick={() => obj.handleClick('Electronics')} style={{color:'white'}}>Electronics</Button>
            </div>
        
            <div className="header__option">
                <Button onClick={() => obj.handleClick('Clothing')} style={{color:'white'}}>Fashion</Button>
            </div>
            
            <div className="header__option">
                <Button onClick={() => obj.handleClick('Washing Machine')} style={{color:'white'}}>Washing Machines</Button>
            </div>

            <div className="header__option">
                <Button onClick={() => obj.handleClick('Books')} style={{color:'white'}}>Books</Button>
            </div>
            
            <div className="header__option">
                <Button style={{color:'white'}}>Mobiles</Button>
            </div>

            <div className="header__option">
                <Button style={{color:'white'}}>BestSellers</Button>
            </div>

            <div className="header__option">
                <Button  style={{color:'white'}}>Customer Service</Button>
            </div>

            <div className="header__option">
                <Button  style={{color:'white'}}>Home & Kitchen</Button>
            </div>

            <div className="header__option">
                <Button  style={{color:'white'}}>Amazon Pay</Button>
            </div>

            {/* <div className="header__optionBasket">
                <ShoppingBasketIcon />
                <span className="header__optionLineTwo header__basketCount">
                0
                </span>
            </div> */}

            <div className="header__option">
                <Button  style={{color:'white'}}>Today's Deals</Button>
            </div>

            <div className="header__option">
                <Button  style={{color:'white'}}>New Releases</Button>
            </div>

        </div>

    </div>

    );
}

export default SubHeader;