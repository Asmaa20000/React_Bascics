import React, { Component } from "react";
import Child from "../Child/Child";

export default class Parent extends Component {
  state = {
    count:0,
    productList: [
      {
        pname: "dell",
        Price: 200000,
        onSale: true,
        id: 4,
      },
      {
        pname: "samsung",
        Price: 14000,
        onSale: false,
        id: 5,
      },
      {
        pname: "Hp",
        Price: 300000,
        onSale: true,
        id: 6,
      },
      {
        pname: "toshipa",
        Price: 40000,
        onSale: false,
        id: 7,
      },
      {
        pname: "Lenovo",
        Price: 6000,
        onSale: true,
        id: 9
      },
      {
        pname: "mac",
        Price: 350000,
        onSale: true,
        id: 8,
      },
    ],
  };
  deleteProduct=(index)=>{
// alert(index);
let newProductList=[...this.state.productList]
newProductList.splice(index,1);
this.setState({productList:newProductList})
// let productList= newProductList.filter((product)=>{return product.id!==id});
// this.setState({productList:productList});
  }
  decreaseProduct=(index)=>{
    let newProductList=[...this.state.productList];
    newProductList[index].Price--;
    this.setState({productList:newProductList})
  }
 increaseProduct=(index)=>{
  let newProductList=[...this.state.productList];
  newProductList[index].Price++;
  this.setState({productList:newProductList})
  }

  render() {
    return (
      <div style={{ backgroundColor:"#72b043"}}>
        <div className="container">
          <div className="row gy-5">
            <h1 className="text=danger text-center">Our Products:</h1>
            {this.state.productList.map((product, index) => {
              return <Child  increase={this.increaseProduct}
              decrease={this.decreaseProduct} productIndex={index} delt={this.deleteProduct} info={product} key={product.id} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}
