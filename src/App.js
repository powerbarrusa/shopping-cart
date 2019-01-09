import React, { Component } from 'react'
import './App.css'
import CartHeader from './components/CartHeader'
import CartFooter from './components/CartFooter'
import CartItems from './components/CartItems'
import AddItem from './components/AddItem'

class App extends Component {
  constructor(){
    super()
    this.state = {
      products: [
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
      price: 0,
      total: 0,
      cartList: []
    }
  }

  quantityListener = (event) => {
    event.preventDefault()
    this.setState({
      quantity: Number(event.target.value)
    })
  }

  productListener = (event) => {
    event.preventDefault()
    this.setState({
      name: event.target.value
    })
  }

  addItem = (event) => {
    event.preventDefault()
    let result = this.state.products.filter(x => x.name === this.state.name)
    let newItem = {
      product: {
        id: this.state.cartList.length + 1,
        name: this.state.name,
        price: +result[0].priceInCents,
        subtotal: this.state.price * this.state.quantity
      },
      quantity: this.state.quantity
    }
    let prices = this.state.cartList.map(item => item.product.price)
    let total = prices.reduce((acc, cur) => {
      return acc + cur
    }, 0)
    total += newItem.product.price
    this.setState({
      cartList: [...this.state.cartList, newItem],
      total: [`$${total.toFixed(2) / 100}`]
    })
  }
  render() {
    return (
      <div>
        <CartHeader />
        <CartItems
          list={this.state.cartList}
        />
        <AddItem
          products={this.state.products}
          quantityListener={this.quantityListener}
          productListener={this.productListener}
          addItem={this.addItem}
          totalCalc={this.state.total}
        />
        <CartFooter copyright={2018}/>
      </div>
    );
  }
}

export default App;
