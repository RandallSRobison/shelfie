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
      <h2>Well holy crap; my bad dudes. I don't know what went wrong. It's a real mystery. My programmer probably messed up... and here I thought he was getting better. How stupid I feel.</h2>
    )
    return (
      <>
        <section className='all-products-container'>
          {invArr}
        </section>
      </>
    );
  }
}

export default Dashboard;
