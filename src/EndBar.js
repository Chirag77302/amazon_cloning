import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
// import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
// import NativeSelect from '@material-ui/core/NativeSelect';
import './Endbar.css';
import LanguageIcon from '@material-ui/icons/Language';

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

const useStyles2 = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

function EndBar(){
    const classes = useStyles();
    const classes2 = useStyles2();
    const [state, setState] = React.useState({
        age: '',
        name: 'hai',
      });
    
      const handleChange = (event) => {
        const name = event.target.name;
        setState({
          ...state,
          [name]: event.target.value,
        });
      };


        return (
            <div className='EndBar'>
                <Grid container spacing={3}>
                    <Grid item xs={0} sm={2}>
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <ul className="list"  >
                            <h4>Get to Know Us</h4>
                            <li>About Us</li>
                            <li>Careers</li>
                            <li>Press Releases</li>
                            <li>Amazon Careers</li>
                            <li>Gift a Smile</li>
                        </ul>
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <ul className="list"  >
                            <h4>Connect with Us</h4>
                            <li>Facebook</li>
                            <li>Twitter</li>
                            <li>Instagram</li>
                        </ul>
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <ul className="list">
                            <h4>Make Money with Us</h4>
                            <li>Sell On Amazon</li>
                            <li>Sell Under Amazon Aceelerator</li>
                            <li>Become an Affiliate</li>
                            <li>Fulfillment by Amazon</li>
                            <li>Advertise Your Products</li>
                            <li>Amazon Pay on Merchants</li>
                        </ul>
                    </Grid>

                    <Grid item xs={12} sm={2}>
                        <ul className="list">
                            <h4>Make Money with Us</h4>
                            <li>Sell On Amazon</li>
                            <li>Sell Under Amazon Aceelerator</li>
                            <li>Become an Affiliate</li>
                            <li>Fulfillment by Amazon</li>
                            <li>Advertise Your Products</li>
                            <li>Amazon Pay on Merchants</li>
                        </ul>
                    </Grid>
                    <Grid item xs={0} sm={2}></Grid>
                </Grid>

                <hr></hr>

                <div className="ending_patah" style={{textAlign:'center'}}>
                    <img className="img_bottom" alt="logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"/>
                    <FormControl variant="outlined" className={classes2.formControl}  >
                        <InputLabel htmlFor="outlined-age-native-simple" style={{color:"grey"}} ><LanguageIcon></LanguageIcon> Language</InputLabel>
                        <Select
                        native
                        value={state.age}
                        onChange={handleChange}
                        label="Age"
                        inputProps={{
                            name: 'age',
                            id: 'outlined-age-native-simple',
                        }}
                        >
                        <option aria-label="None" value="" />
                        <option value={10}>Ten</option>
                        <option value={20}>Twenty</option>
                        <option value={30}>Thirty</option>
                        </Select>
                    </FormControl>
                    <Grid container spacing={3}>
                        {/* <Grid item xs={0} sm={2}></Grid> */}
                        <Grid item xs={12} sm={12}>
                            <h5>Australia  Brazil  Canada  China  France  Germany  Italy  Japan  Mexico  Netharlands  Poland  Singapore  Spain  Turkey  United Arab Emirates  United</h5>
                            <h5>Kingdom  United States</h5>
                        </Grid>
                        <Grid item xs={0} sm={2}></Grid>
                    </Grid>
                </div>

            </div>
        )
}

export default EndBar;