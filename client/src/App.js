import React, { Component } from 'react';
import GroceryForm from './components/GroceryForm';
import GroceryList from './components/GroceryList';

class App extends Component {
  state = { groceries: [] }

  componentDidMount() {
    fetch('/api/products')
      .then( res => res.json() )
      .then( groceries => this.setState({ groceries }) )
  }

  addProduct = (name) => {
    const product = { name };
    fetch('/api/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(product)
    }).then( res => res.json() )
      .then( grocery => {
        const { groceries } = this.state;
        this.setState({ groceries: [...groceries, grocery] });
    })
   
  }


  updateGrocery = (id) => {
    fetch(`/api/products/${id}`, { method: 'PUT' })
      .then( res => res.json() )
      .then( product => {
        const groceries = this.state.groceries.map( t => {
          if (t.id === id)
            return product
          return t;
      });
  
      this.setState({ groceries });
    })
  }

  deleteGrocery = (id) => {
    fetch(`/api/products/${id}`, { method: 'DELETE' })
      .then( () => {
        const { groceries } = this.state;
        this.setState({ groceries: groceries.filter( t => t.id !== id ) })
      })
   }
   
  render() {
    return (
      <div className="container">
        <GroceryForm addProduct={this.addProduct} />
        <GroceryList
          groceries={this.state.groceries}
          updateGrocery={this.updateGrocery}
          deleteGrocery={this.deleteGrocery}
        />
      </div>
    );
  }
}

export default App;
