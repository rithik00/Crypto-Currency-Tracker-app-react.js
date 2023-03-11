// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {currencyDetails} = props
  const {currencyName, usdValue, euroValue, currencyLogo} = currencyDetails
  return (
    <li className="row-container">
      <div className="currency-type-container">
        <img src={currencyLogo} alt={currencyName} className="logo" />
        <p className="coin-name">{currencyName}</p>
      </div>
      <div className="value-headings">
        <p className="value-1">{usdValue}</p>
        <p className="value">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
