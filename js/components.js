function createStockCard(stock) {
  const trendClass = stock.change >= 0 ? "positive" : "negative";
  const sign = stock.change >= 0 ? "+" : "";

  return `
    <div class="col-md-4">
      <div class="stock-card">
        <h4>${stock.name}</h4>
        <p class="stock-symbol">${stock.symbol}</p>
        <h3>$${stock.price}</h3>
        <p class="${trendClass}">${sign}${stock.change}%</p>
        <a href="stock.html?symbol=${stock.symbol}" class="btn btn-outline-success btn-sm">
          View Details
        </a>
      </div>
    </div>
  `;
}