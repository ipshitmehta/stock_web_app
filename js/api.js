const API_KEY = "7bdcf6738f05ae24071154a2d33fd1f0";
const BASE_URL = "http://api.marketstack.com/v1";

async function getStockHistory(symbol) {
  try {
    const response = await fetch(
      `${BASE_URL}/eod?access_key=${API_KEY}&symbols=${symbol}&limit=30`
    );

    const data = await response.json();

    if (!data.data || data.data.length === 0) {
      throw new Error("No stock data found");
    }

    return data.data.reverse();
  } catch (error) {
    console.error("API Error:", error);
    return [];
  }
}