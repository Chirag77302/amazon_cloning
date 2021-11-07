import React,{ useContext }  from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
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
   // array of N elements, where N is the number of rows needed
   const rows = [...Array( Math.ceil(obj.state.products.length / 3) )];
   // chunk the products into the array of rows
   const productRows = rows.map( (row, idx) => obj.state.products.slice(idx * 3, idx * 3 + 3) );
   // map the rows as div.row
   console.log(productRows);

   const content = productRows.map((row, idx) => (
        <Grid container item xs={12} spacing={4}>
             <React.Fragment>
            { row.map( product => <Grid item xs={4} key={product}>
                    <Product id={product.id} title={product.title} price={product.price} rating={product.rating} image={product.image} product_category={product.product_category} />
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
