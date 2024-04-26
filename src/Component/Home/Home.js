import { Component } from "react";

export default  class Home extends Component{
    state={
username:"Asmaa",
userAge:22,
link:"http://www.google.com"
    }
    welcome=()=>{
        alert('hi');
    }
render(){
    return(
        <>
       <i className="fa fa-home"></i>
<div className="Layer p-5 shadow bg-light my-5 w-25 m-auto">
<h4>Name<span>{this.state.username}</span></h4>
<h4>Age<span>{this.state.userAge}</span></h4>
<a href={this.state.link} className="btn btn-primary">google</a>
<button className="btn btn-outline-warning" onClick={this.welcome}>click</button>
</div> 
</>
   )
}
}