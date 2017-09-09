import React, { Component } from 'react';
import { getPrice, getCurrencies } from './api';

class Trade extends Component {
  state = {
    currency: 'USD',
    base: 'BTC',
    price: 'sell',
    amount: null,
    currencies: []
  };

  componentDidMount() {
    this.calcPrice();
  }

  calcPrice = () => {
    const { base, currency, price } = this.state;
    getPrice(base, currency, price)
      .then(data => {
        this.setState({
          amount: data.amount
        })
      })

    getCurrencies()
      .then(data => {
        this.setState({
          currencies: data
        })
      })
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value }, this.calcPrice);
  }

  render() {
    const { base, currency, amount, currencies } = this.state;
    const baseToString = () => {
      if(base === 'BTC' ) return 'Bitcoin';
      if(base === 'ETH') return 'Etherium';
    }

    return (
      <div>
        Trade
        <select name='currency' value={ currency } onChange={ this.handleChange }>
          { currencies.map(currency => (
            <option key={currency.id} value={currency.id}>
              {currency.name}
            </option>
          ))}
        </select>

        <select name='base' value={ base } onChange={ this.handleChange }>
          <option value='BTC'>Bitcoin</option>
          <option value='ETH'>Etherium</option>
        </select>

        { amount && <h3>${amount} {currency}/{baseToString()}</h3> }
      </div>
    );
  }
}

export default Trade;