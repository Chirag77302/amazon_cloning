import React,{Component} from "react";
import { createContext } from "react";
import axios from 'axios';

export const DataContext = createContext();
var d = [];
// console.log('entered');

export class DataProvider extends Component{
    constructor(props){
        super(props);
        this.state = {
            product_category:"",
            tagname:"",
            products:[],
            isloading:true
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.updateState = this.updateState.bind(this);
    }

    async componentDidMount(){
        d = await axios.get('https://guarded-peak-43217.herokuapp.com/api/');
        // console.log('d is : ',d);
        this.setState({
            products:d.data.map((p)=>(p)),
            isloading:false
        })
    }

    handleSubmit(e){
        e.preventDefault();
        this.updateState();
    }

    handleChange(evt){
        this.setState({
            [evt.target.name]:evt.target.value
        });
    }

    updateStatebtn(){

        let added = [];
        if(this.state.product_category === '')added = d.data.filter((p) => (p));
        else added = d.data.filter((p) => (p.product_category.indexOf(this.state.product_category)>-1));
        console.log("added products are : ",  added);
        this.setState({
            products:[...added],
        },() => {console.log('current state is ',this.state)});

    }

    handleClick(value){
        // value.toLowerCase();
        // console.log(value);
        // console.log(this.state.products);
        // <Redirect to='/'></Redirect>
        this.setState({
            tagname:"",
            product_category:value,
            products:[]
        },() => {this.updateStatebtn()});

    }

    updateState(){
        let added = [];
        added = d.data.filter((p) => (p.tagname.indexOf(this.state.tagname.toLowerCase())>-1));    
        console.log("added products are : ",  added);
        this.setState({
            products:[...added],
        },() => {console.log('current state is ',this.state)});
    }

    render(){
        return (
            <DataContext.Provider value={{state:{...this.state},handleChange:this.handleChange,handleSubmit:this.handleSubmit,handleClick:this.handleClick}}>
                {this.props.children}
            </DataContext.Provider>
        );
    }
}