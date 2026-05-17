const demoStocks = [
  { name: "Apple Inc.", symbol: "AAPL", price: 192.30, change: 1.24 },
  { name: "Tesla Inc.", symbol: "TSLA", price: 178.12, change: -2.15 },
  { name: "Nvidia Corp.", symbol: "NVDA", price: 921.40, change: 3.87 }
];

const popularStocksContainer = document.getElementById("popularStocks");
const marketOverview = document.getElementById("marketOverview");

popularStocksContainer.innerHTML = demoStocks.map(createStockCard).join("");

marketOverview.innerHTML = `
  <p><strong>Germany Market:</strong> Open</p>
  <p><strong>DAX:</strong> <span class="positive">+0.82%</span></p>
  <p><strong>NASDAQ:</strong> <span class="negative">-0.31%</span></p>
`;