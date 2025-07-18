
async function fetchData() {
  const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd');
  const data = await res.json();
  const tbody = document.querySelector("#crypto-table tbody");
  tbody.innerHTML = "";
  data.slice(0, 10).forEach(coin => {
    const row = `<tr>
      <td>${coin.name} (${coin.symbol.toUpperCase()})</td>
      <td>$${coin.current_price.toLocaleString()}</td>
      <td style="color: ${coin.price_change_percentage_24h >= 0 ? 'lightgreen' : 'red'}">
        ${coin.price_change_percentage_24h.toFixed(2)}%
      </td>
    </tr>`;
    tbody.innerHTML += row;
  });
}
fetchData();
setInterval(fetchData, 60000); // update every 1 minute
