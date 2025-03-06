import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  // state가 undefined(빈괄호)면 coins.length 에러 발생(사용 불가)
  const [coins, setCoins] = useState([]);
  const [usd, setUsd] = useState(0);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  const onChange = (event) => {
    setUsd(event.target.value);
  };

  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      <div>
        <label>Enter USD to convert: </label>
        <input
          onChange={onChange}
          value={usd}
          type="number"
          placeholder="Type USD to convert"
        />
      </div>
      <div>
        <label>You can get BTC: </label>
        <input
          onChange={onChange}
          value={usd * 90726.17}
          type="number"
          placeholder="Type USD to convert"
        />
      </div>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <ul>
          {coins.map((coin) => (
            <li>
              {coin.name} ({coin.symbol}): {coin.quotes.USD.price} USD
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
