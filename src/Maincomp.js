import React, { useContext } from "react";
import { Route } from "react-router-dom";
import { DataContext } from "./contexts/DataContext";
import Header from "./header";
import SubHeader from "./SubHeader";
import EndBar from "./EndBar";
import FinalBar from "./FinalBar";
import ProductCard from "./ProductCard";
import Home from "./Home";
import Error from "./Error";
import Spinner from './Spinner.gif';


function MainComp(){
    const obj = useContext(DataContext);
    const stile = {
        margin:'100px'
    }
    return (
        <div>
            {obj.state.isloading?<img src={Spinner} style={stile} alt='x'></img>:
            <>
                {window.location.pathname === '/'?
                    <>
                        <Header />
                        <SubHeader />
                    </>:
                    <></>
                }
                <Route exact path="/" ><Home /></Route>
                <Route exact path="/product/:id" render={routeProps => (<ProductCard {...routeProps} />)} ></Route>
                <Route path='/error' render={routeProps => (<Error />)} ></Route>
                <EndBar />
                <FinalBar />
            </>
            }
        </div>
    )
}

export default MainComp;