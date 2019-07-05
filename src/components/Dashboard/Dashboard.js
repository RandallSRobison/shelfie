import React, { Component } from 'react'
import Product from '../Product/Product'
import './Dashboard.css'

class Dashboard extends Component {
  render() {
    const invArr = this.props.invList.length ? (
      this.props.invList.map(product => (
        <Product product={product} key={product.id}/>
      ))
    ) : (
      <h2>Cannot find any items.</h2>
    )
    return (
        <section className='all-products-container'>
          {invArr}
        </section>
    );
  }
}

export default Dashboard;
