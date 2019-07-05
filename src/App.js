import React, { Component } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import axios from 'axios'

class App extends Component {
  constructor() {
    super();

    this.state = {
      invList: []
    };
    this.componentDidMount = this.componentDidMount.bind(this)
    this.addPart = this.addPart.bind(this)
  }

componentDidMount() {
  axios.get('/api/inventory').then(res => {
    this.setState({
      invList: res.data
    })
  })
  .catch(err => console.log(err))
}

addPart(product) {
  axios.post('/api/product', product)
  .then(res => {
    this.setState({
      invList: res.data
    })
  })
  .catch(err => console.log(err))
}

  render() {
    return (
      <div className="App">
        <Header />
        <Form getProducts={this.componentDidMount} addPart={this.addPart}/>
        <Dashboard invList={this.state}/>
      </div>
    );
  }
}

export default App;
