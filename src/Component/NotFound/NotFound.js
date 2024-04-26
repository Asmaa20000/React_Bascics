import React, { Component } from 'react'
import img from '../../Assets/imgs/NotFound.jpg'
import img2 from '../../Assets/imgs/Notfound2.jpg'

export default class NotFound extends Component {
  render() {
    return (
      <div className=' vh-100 d-flex justify-content-center align-items-center'>
       <img src={img2} className='w-50'/>
      </div>
    )
  }
}
