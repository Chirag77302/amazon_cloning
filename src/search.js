import React,{Component} from 'react';
// import axios from 'axios';

class Search extends Component{

    constructor(props){
        super(props);
        this.state = {
            product_category:"",
            tagname:"",
            products:[
                {name:"washing machine",id:1},
                {name:"sony tv",id:1}
            ]
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    async handleSubmit(e){
        let added = [];
        try{
                e.preventDefault();
                const res = await fetch('data.json');
                const x = await res.json();
                console.log(x.data);
                for(var i=0;i<x.data.length;i++){
                    if(x.data[i].Company ===this.state.product_category && x.data[i].title === this.state.tagname)added.push({name:x.data[i].title,id:x.data[i].id});
                }
            }catch(error){
                console.log(error);
            }

            this.setState({
                products:[...added],
                product_category:"",
                tagname:""
            })
    }

    handleChange(evt){
        this.setState({
            [evt.target.name]:evt.target.value
        });
    }


    render(){
        const res = this.state.products.map(p => (
            <li>`{p.name} and {p.id}`</li>
        ));
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Enter Company :</label>
                    <input type="text" name="product_category" value={this.state.product_category} onChange={this.handleChange} ></input>
                    <label>Enter name : </label>
                    <input type="text" name="tagname" value={this.state.tagname} onChange={this.handleChange}/>
                    <button>Submit</button>
                </form>
                <ul>
                    {res}
                </ul>   
            </div>
        )
    }
}

export default Search;