import React,{ useContext}  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Product from "./Product";
import { DataContext } from "./contexts/DataContext";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));


export default function NestedGrid() {
    
  const classes = useStyles();
  
   const obj = useContext(DataContext);
   const rows = [...Array( Math.ceil(obj.state.products.length / 3) )];
   const productRows = rows.map( (row, idx) => obj.state.products.slice(idx * 3, idx * 3 + 3) );
  //  console.log('product rows are : ',  productRows);

      const content = productRows.map((row, idx) => (
        <Grid container item xs={12} spacing={4}>
             <React.Fragment>
            { row.map( product => <Grid item xs={4} key={product} style={{height:'inherit'}}>
                    <Product id={product._id} title={product.title} price={product.price} rating={product.rating} image={product.image} product_category={product.product_category} rating_nos={product.rating_nos} />
                </Grid> )}
             </React.Fragment>
        </Grid> 
       )
   );


  return (
    <div className={classes.root} style={{width:"inherit"}}>
      {obj.state.products.length === 0?<h1>No Items Found !</h1>:  content }
    </div>
  );
}
