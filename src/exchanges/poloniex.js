import fetch from 'node-fetch';

/**
 * Poloniex
 * https://poloniex.com/public?command=returnTicker{method}&param=value
 *
 * ex: https://poloniex.com/public?command=returnOrderBook&currencyPair=BTC_NXT&depth=10
 */


const baseUrl = 'https://poloniex.com/public';

const getCurrencies = () => {
  const url = `${baseUrl}?command=returnCurrencies`;
  return fetch(url)
    .then(response => {
      return response.json();
    });
};

const getTicker = () => {
  const url = `${baseUrl}?command=returnTicker`;
  return fetch(url)
    .then(response => {
      return response.json();
    });

};

const getMarketSummaries = () => {

};

const getMarketSummary = () => {

};

const getOrderBook = () => {
  const market = 'BTC_ETH';
  const url = `${baseUrl}?command=returnOrderBook&currencyPair=${market}&depth=100`;
  return fetch(url)
    .then(response => {
      return response.json();
    });
};

// https://poloniex.com/public?command=returnTradeHistory&currencyPair=BTC_NXT&start=1410158341&end=1410499372
const getMarketHistory = () => {
  const market = 'BTC_ETH';
  const url = `${baseUrl}?command=returnTradeHistory&currencyPair=${market}&depth=100`;
  return fetch(url)
    .then(response => {
      return response.json();
    });
};

export {
  getCurrencies,
  getTicker,
  getMarketSummaries,
  getMarketSummary,
  getOrderBook,
  getMarketHistory,
};
