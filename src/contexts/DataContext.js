import React,{Component} from "react";
import { createContext } from "react";
import { data } from "../data";

export const DataContext = createContext();
console.log(data);

export class DataProvider extends Component{
    constructor(props){
        super(props);
        this.state = {
            product_category:"",
            tagname:"",
            products:data.map((p)=>(p))
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.updateState = this.updateState.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        this.updateState();
        // let added = [];
        // try{
        //         e.preventDefault();
        //         const res = await fetch('data.json');
        //         const x = await res.json();
        //         console.log(x.data);
        //         for(var i=0;i<x.data.length;i++){
        //             if(x.data[i].Company ===this.state.product_category && x.data[i].title === this.state.tagname)added.push({name:x.data[i].title,id:x.data[i].id});
        //         }
        //     }catch(error){
        //         console.log(error);
        //     }
    }

    handleChange(evt){
        this.setState({
            [evt.target.name]:evt.target.value
        });
    }

    handleClick(value){
        // value.toLowerCase();
        // console.log(value);
        // console.log(this.state.products);
        this.setState({
            tagname:"",
            product_category:value,
            products:[]
        },() => this.updateState());

        // this.handleSubmit();
    }

    updateState(){
        let added = [];
        // e.preventDefault();
        if(this.state.product_category === '' && this.state.tagname===''){
            added = data.filter((p) => (p));
        }
        else if(this.state.product_category===''){
            added = data.filter((p) => (p.tagname === this.state.tagname));
        }
        else if(this.state.tagname === ''){
            added = data.filter((p) => (p.product_category === this.state.product_category));
        }
        else {
            added = data.filter((p) => (p.product_category === this.state.product_category && p.tagname === this.state.tagname));
        }

        console.log(added);
        this.setState({
            products:[...added],
        },() => {console.log(this.state)});
    }

    render(){
        return (
            <DataContext.Provider value={{state:{...this.state},handleChange:this.handleChange,handleSubmit:this.handleSubmit,handleClick:this.handleClick}}>
                {this.props.children}
            </DataContext.Provider>
        );
    }
}