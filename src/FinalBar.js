import React,{Component} from "react";
import Grid from '@material-ui/core/Grid';
import './Endbar.css';

class FinalBar extends Component {

    render(){
        const style = {
            backgroundColor:"black",
            color:"white"
        } 

        return (
            <div className="FinalBar" style={style}>
                <Grid container spacing={3}>
                    <Grid item xs={0} sm={1}></Grid>
                    <Grid item xs={2}>
                        <ul className="list">
                            <li><p><strong>AbeBooks</strong></p></li>
                            <li><p>Books,Art</p></li>
                            <li><p>& Collections</p></li>
                        </ul>
                        <ul className="list">
                            <li><p><strong>Shopbop</strong></p></li>
                            <li><p>Designer</p></li>
                            <li><p>Fashion Brands</p></li>
                        </ul>
                    </Grid>
                    <Grid item xs={2}>
                        <ul className="list">
                            <li><p><strong>	Amazon Web Services</strong></p></li>
                            <li><p>Scalable Cloud</p></li>
                            <li><p>Computing Services</p></li>
                        </ul>
                        <ul className="list">
                            <li><p><strong>	Amazon Business</strong></p></li>
                            <li><p>Everything For</p></li>
                            <li><p>Your Business</p></li>
                        </ul>
                    </Grid>
                    <Grid item xs={2}>
                        <ul className="list">
                            <li><p><strong>Audible</strong></p></li>
                            <li><p>Download</p></li>
                            <li><p>Audio Books</p></li>
                        </ul>
                        <ul className="list">
                            <li><p><strong>Prime Now</strong></p></li>
                            <li><p>2-Hour Delivery</p></li>
                            <li><p>on Everyday Items</p></li>
                        </ul>
                    </Grid>
                    <Grid item xs={2}>
                        <ul className="list">
                            <li><p><strong>DPReview</strong></p></li>
                            <li><p>Digital</p></li>
                            <li><p>Photography</p></li>
                        </ul>
                        <ul className="list">
                            <li><p><strong>	Amazon Prime Music</strong></p></li>
                            <li><p>75 million songs,ad-free</p></li>
                            <li><p>Over 10 million podcast episodes</p></li>
                        </ul>
                    </Grid>
                    <Grid item xs={2}>
                        <ul className="list">
                            <li><p><strong>IMDb</strong></p></li>
                            <li><p>Movies,TV</p></li>
                            <li><p>& Celebrities</p></li>
                        </ul>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default FinalBar;