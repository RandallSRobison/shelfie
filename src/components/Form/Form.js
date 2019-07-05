import React, { Component } from 'react'
import './Form.css'

class Form extends Component {
  constructor(){
    super()

    this.state = {
      name: '',
      price: 0,
      image: ''
    }
  }

handleChange = e => {
  const {value, name} = e.target;
  this.setState({
    [name]: value
  })
}

addPart = e => {
  // console.log('hit');
  e.preventDefault();

  const {name, price, image} = this.state

  let newProduct = {
    name,
    price,
    image
  }

  this.props.addPart(newProduct)
  this.props.getProducts()

  this.setState({
    name: '',
    price: 0,
    image: ''
  })
}

cancel = e => {
  console.log('hit ');
  e.preventDefault()

  this.setState({
    name: '',
    price: 0,
    image: ''
  })
}

  render() {
    return (
      <div className='main'>
        <form className='form'>
          <div className='input-column'>
            <input type="text" className='input-fields' placeholder='image url' onChange={this.handleChange}/>
            <input type="text" className='input-fields' placeholder='product name' onChange={this.handleChange}/>
            <input type="number" className='input-fields' placeholder='price' onChange={this.onChange}/>
          </div>
          <div className='button-row'>
            <button className='buttons' onClick={this.cancel}>cancel</button>
            <button className='buttons' onClick={this.addPart}>add to inventory</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
