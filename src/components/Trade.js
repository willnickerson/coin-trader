import React, { Component, PropTypes } from 'react';
import { getPrice, getCurrencies, getHistoricalPrices } from '../api';
const Chart = require('react-d3-basic').Chart;
const LineChart = require('react-d3-basic').LineChart;

class Trade extends Component {
  state = {
    currency: 'USD',
    base: 'BTC',
    price: 'sell',
    amount: null,
    currencies: [],
    priceData: null
  };

  componentDidMount() {
    this.calcPrice();
    getHistoricalPrices(this.state.currency)
      .then(data => {
        this.setState({
          priceData: data.bpi
        })
      })
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
    const { base, currency, amount, currencies, priceData } = this.state;
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

        { priceData ? <PriceChart priceData={priceData} /> : <p>no data</p>}
      </div>
    );
  }
}

export default Trade;


const PriceChart = (props) => {
  const margins = {left: 100, right: 100, top: 50, bottom: 50},
  chartSeries = [
    {
      field: 'BMI',
      name: 'BMI',
      color: '#ff7f0e'
    }
  ],
  x = d => d.index

  const priceData = Object.keys(props.priceData).map(key => {
    return { date: key, price: props.priceData[key] };
  })
 
  return (

    <div>
      <h3>Price Data</h3>
      <p>get react-d3 working</p>
      <table className="price-table">
        <tr>
          <td>date</td>
          <td>price</td>
        </tr>
        {priceData.map(({ date, price}) => (
          <tr>
            <td>{date}</td>
            <td>{price}</td>
          </tr>
        ))}
      </table>
    </div>
    //   <Chart
    //     title={"Bitcoin Price"}
    //     width={500}
    //     height={300}
    //     margins= {margins}
    //     >
    //     <LineChart
    //       margins= {margins}
    //       title={"Bitcoin Price"}
    //       data={priceData}
    //       width={500}
    //       height={300}
    //       chartSeries={chartSeries}
    //       x={x}
    //       xScale={"time"}
    //     />
    //   </Chart>
    // , document.getElementById('line-garbage')
  );
};

PriceChart.propTypes = {
  priceData: PropTypes.arrayOf(PropTypes.object)
}
