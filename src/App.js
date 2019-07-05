import React, { Component } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import axios from "axios";

class App extends Component {
  constructor() {
    super();

    this.state = {
      invList: []
    };
    this.addProduct = this.addProduct.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this)
  }

  componentDidMount() {
    console.log("hit mount");
    axios
      .get("/api/inventory")
      .then(res => {
        console.log("hit then");
        this.setState({
          invList: res.data
        });
      })
      .catch(err => console.log(err));
  }

  addProduct(product) {
    console.log('hit addProduct in App');
    axios
      .post("/api/product", product)
      .then(res => {
        this.setState({
          invList: res.data
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    console.log(this.state.invList);
    return (
      <div className="App">
        <Header />
        <Form addProduct={this.addProduct} getAll={this.componentDidMount}/>
        <Dashboard invList={this.state.invList} />
      </div>
    );
  }
}

export default App;
