import React,{Component} from "react";
import { Link } from "react-router-dom";
import './Error.css'

class Error extends Component{
    render(){
        return(
            <div className='error_page'>
                <h1 className='Error_heading'>404!</h1>
                <h2 className='error_subheading'>Undesired Route</h2>
                <h4>Unfortunately the page you were looking for could not be found</h4>
                <button className='error_button'><Link to='/' className='error_link'>Back To Home Page</Link></button>                
            </div>
        )
    }

}

export default Error;

