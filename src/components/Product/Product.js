import React, { Component } from 'react'
import './Product.css'

class Product extends Component {
  render() {
    return (
      <>
        <div className='product'>
          <img src={this.props.product.image_url} alt='product-pic' className='image'/>
          <div className='product-details'>
            <p className='product-text'>Name:</p>
            <p className='product-text'>{this.props.product.product_name}</p>
          </div>
          <div className='product-details'>
            <p className='product-text'>Price:</p>
            <p className='product-text'>{`$${this.props.product.price}`}</p>
          </div>
        </div>
      </>
    );
  }
}

export default Product;
