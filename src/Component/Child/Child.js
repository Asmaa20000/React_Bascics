import React, { Component } from 'react'

export default class Child extends Component {
  render() {
    let {onSale,pname, Price}=this.props.info
    return (
      <div className='col-md-4 mb-4'>
        <div className='p-3 shadow bg-light position-relative'>
        <p>Product Name:{pname}</p>
        <p>Product Price:{Price}</p>
        {onSale===true?
        <span className='text-light bg-warning p-2 position-absolute top-0 end-0'>onSale</span>:""}
    
<button onClick={()=>{this.props.delt(this.props.productIndex)}}  className=' w-100 btn btn-outline-danger'>Delete</button>
     <div className="d-flex mx-auto mt-2 ">
      <button onClick={()=>{this.props.increase(this.props.productIndex)}} className='w-25 btn btn-outline-primary'>+</button> 
            <button onClick={()=>{this.props.decrease(this.props.productIndex)}} className=' w-25 mx-2 btn btn-outline-primary'>-</button> 
            </div>


        </div>
      </div>
    )
  }
}
