import React, { Component } from "react";
import "./Form.css";

class Form extends Component {
  constructor() {
    super();

    this.state = {
      product_name: "",
      price: 0,
      image_url: ""
    };
  }

  handleChange = e => {
    const { value, name } = e.target;
    this.setState({
      [name]: value
    });
  };

  addProduct = e => {
    console.log('hit addProduct in Form');
    e.preventDefault();

    const { product_name, price, image_url } = this.state;
    console.log(product_name, price, image_url);
    let newProduct = {
      product_name,
      price,
      image_url
    };

    this.props.addProduct(newProduct);
    

    this.setState({
      product_name: "",
      price: 0,
      image_url: ""

    });
    this.props.getAll();
  };

  cancel = e => {

    this.setState({
      product_name: "",
      price: 0,
      image_url: ""
    });
  };

  render() {
    const {product_name, price, image_url} = this.state
    return (
      <div className="main">
        <form className="form">
          <div className="input-column">
            <input
            name='image_url'
              type="text"
              className="input-fields"
              placeholder="image url"
              onChange={this.handleChange}
              value={image_url}
            />
            <input
              name='product_name'
              type="text"
              className="input-fields"
              placeholder="product name"
              onChange={this.handleChange}
              value={product_name}
            />
            <input
              name='price'
              type="number"
              className="input-fields"
              placeholder="price"
              onChange={this.onChange}
              value={price}
            />
          </div>
          <div className="button-row">
            <button className="buttons" onClick={e => this.cancel(e)}>
              cancel
            </button>
            <button className="buttons" onClick={(e) => this.addProduct(e)}>
              add to inventory
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;