// Write your JS code here
import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

const CryptocurrenciesList = props => {
  const {currencyList} = props
  return (
    <div className="crypto-currencies-list-container">
      <h1 className="heading">Cryptocurrency Tracker</h1>
      <img
        src="    https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
        alt="cryptocurrency"
        className="cryptocurrency-image"
      />
      <div className="crypto-table-container">
        <div className="table-top-row">
          <div className="row-container">
            <h1 className="coin-type">Coin Type</h1>
            <div className="value-headings">
              <h1 className="value-heading1">USD</h1>
              <h1 className="value-heading">EURO</h1>
            </div>
          </div>
        </div>
        <ul className="currency-list-container">
          {currencyList.map(eachCurrency => (
            <CryptocurrencyItem
              key={eachCurrency.id}
              currencyDetails={eachCurrency}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default CryptocurrenciesList
