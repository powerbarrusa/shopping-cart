import React, { Component } from 'react'
import './App.css'
import CartHeader from './CartHeader'
import CartFooter from './CartFooter'
import CartItems from './CartItems'
import AddItem from './AddItem'



class App extends Component {

  constructor(props){
    super()
    this.state = {
      addItemsList: [
        { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 },
        { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 },
        { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 },
        { id: 43, name: 'Small Aluminum Keyboard', priceInCents: 2500 },
        { id: 44, name: 'Practical Copper Plate', priceInCents: 1000 },
        { id: 45, name: 'Awesome Bronze Pants', priceInCents: 399 },
        { id: 46, name: 'Intelligent Leather Clock', priceInCents: 2999 },
        { id: 47, name: 'Ergonomic Bronze Lamp', priceInCents: 40000 },
        { id: 48, name: 'Awesome Leather Shoes', priceInCents: 3990 },
      ], 
      quantity: 0,
      name: "",
      price: "",
      cartList: []
    }
  }

  quantityListener = (event) => {
    event.preventDefault()
    this.setState({
      quantity: event.target.value
    })
  }

  productListener = (event) => {
    event.preventDefault()
    this.setState({
      name: event.target.value
    })
  }

  newLineItem = (event) => {
    event.preventDefault()
    
  }
  
  render() {

    const cartItemsList = [
      { id: 1, product: { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 }, quantity: 1 },
      { id: 2, product: { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 }, quantity: 2 },
      { id: 3, product: { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 }, quantity: 1 },
    ]
    console.log("state", this.state)
    return (
      <div>
        <CartHeader />
        <CartItems
          list={cartItemsList}
          productToAdd={this.state.name}
        />
        <AddItem
          itemsToAdd={this.state.addItemsList}
          quantityListener={this.quantityListener}
          productListener={this.productListener}
        />
        <CartFooter copyright={"2018"}/>
      </div>
    );
  }
}

export default App;
