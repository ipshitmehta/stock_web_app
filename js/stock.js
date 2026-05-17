const ctx = document.getElementById("stockChart");

const urlParams = new URLSearchParams(window.location.search);
const selectedSymbol = urlParams.get("symbol") || "AAPL";

let stockChart;

async function loadStockPage() {
  document.getElementById("stockSymbol").textContent = selectedSymbol;

  const history = await getStockHistory(selectedSymbol);

  if (history.length === 0) {
    document.getElementById("stockName").textContent = "No data found";
    return;
  }

  const latest = history[history.length - 1];
  const previous = history[history.length - 2];

  const changePercent = (((latest.close - previous.close) / previous.close) * 100).toFixed(2);

  document.getElementById("stockName").textContent = selectedSymbol;
  document.getElementById("stockPrice").textContent = "$" + latest.close.toFixed(2);

  const stockChange = document.getElementById("stockChange");
  stockChange.textContent = `${changePercent >= 0 ? "+" : ""}${changePercent}%`;
  stockChange.className = changePercent >= 0 ? "positive" : "negative";

  createChart(history);
}

function createChart(history) {
  const labels = history.map(item => item.date.substring(0, 10));
  const prices = history.map(item => item.close);

  if (stockChart) {
    stockChart.destroy();
  }

  stockChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: labels,
      datasets: [{
        label: `${selectedSymbol} Closing Price`,
        data: prices,
        borderWidth: 2,
        tension: 0.4
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          labels: {
            color: "#f9fafb"
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: "#9ca3af"
          }
        },
        y: {
          ticks: {
            color: "#9ca3af"
          }
        }
      }
    }
  });
}

loadStockPage();