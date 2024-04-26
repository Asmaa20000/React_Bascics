import React, { Component } from 'react'

export default class Portfolio extends Component {
    state={
        Count:5
    }
    ChangeCount=()=>{
this.state.Count++;
this.setState({Count:this.state.Count});
    }
  render() {
    return (
      <div className=' text-center'>
        <p>{this.state.Count}</p>
        <button className='btn btn-danger' onClick={this.ChangeCount}>Change Count</button>
      </div>
    )
  }
}
