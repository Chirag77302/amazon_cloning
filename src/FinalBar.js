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
                            <li style={{color:'grey'}} ><p>Books,Art</p></li>
                            <li style={{color:'grey'}} ><p>& Collections</p></li>
                        </ul>
                        <ul className="list">
                            <li><p><strong>Shopbop</strong></p></li>
                            <li style={{color:'grey'}} ><p>Designer</p></li>
                            <li style={{color:'grey'}} ><p>Fashion Brands</p></li>
                        </ul>
                    </Grid>
                    <Grid item xs={2}>
                        <ul className="list">
                            <li><p><strong>	Amazon Web Services</strong></p></li>
                            <li style={{color:'grey'}} ><p>Scalable Cloud</p></li>
                            <li style={{color:'grey'}} ><p>Computing Services</p></li>
                        </ul>
                        <ul className="list">
                            <li><p><strong>	Amazon Business</strong></p></li>
                            <li style={{color:'grey'}} ><p>Everything For</p></li>
                            <li style={{color:'grey'}} ><p>Your Business</p></li>
                        </ul>
                    </Grid>
                    <Grid item xs={2}>
                        <ul className="list">
                            <li><p><strong>Audible</strong></p></li>
                            <li style={{color:'grey'}} ><p>Download</p></li>
                            <li style={{color:'grey'}} ><p>Audio Books</p></li>
                        </ul>
                        <ul className="list">
                            <li><p><strong>Prime Now</strong></p></li>
                            <li style={{color:'grey'}} ><p>2-Hour Delivery</p></li>
                            <li style={{color:'grey'}} ><p>on Everyday Items</p></li>
                        </ul>
                    </Grid>
                    <Grid item xs={2}>
                        <ul className="list">
                            <li><p><strong>DPReview</strong></p></li>
                            <li style={{color:'grey'}} ><p>Digital</p></li>
                            <li style={{color:'grey'}} ><p>Photography</p></li>
                        </ul>
                        <ul className="list">
                            <li><p><strong>	Amazon Prime Music</strong></p></li>
                            <li style={{color:'grey'}} ><p>75 million songs,ad-free</p></li>
                            <li style={{color:'grey'}} ><p>Over 10 million podcast episodes</p></li>
                        </ul>
                    </Grid>
                    <Grid item xs={2}>
                        <ul className="list">
                            <li><p><strong>IMDb</strong></p></li>
                            <li style={{color:'grey'}} ><p>Movies,TV</p></li>
                            <li style={{color:'grey'}} ><p>& Celebrities</p></li>
                        </ul>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default FinalBar;