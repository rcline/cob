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
      return response.json().then(json => {
        return {
          'buy': json.bids.map((order) => {
            return {
              rate: parseFloat(order[0]),
              amount: order[1],
              exchange: 'poloniex',
            };
          }),
          'sell': json.asks.map((order) => {
            return {
              rate: parseFloat(order[0]),
              amount: order[1],
              exchange: 'poloniex',
            };
          }),
        };
      });
    });
};

// https://poloniex.com/public?command=returnTradeHistory&currencyPair=BTC_NXT&start=1410158341&end=1410499372
const getMarketHistory = () => {
  const market = 'BTC_ETH';
  const url = `${baseUrl}?command=returnTradeHistory&currencyPair=${market}`;
  return fetch(url)
    .then(response => {
      return response.json().then(json => {
        return json.slice(0, 100).map((order) => {
            return {
              // globalTradeID": 364253389,
              id: order.tradeID, // 42976537,
              date: (new Date(order.date)).getTime(), // "2018-04-23 04:59:57",
              type: order.type, // "sell",
              rate: parseFloat(order.rate), // "0.07128901",
              amount: parseFloat(order.amount), // "0.08711866",
              total: parseFloat(order.total), // "0.00621060"
              exchange: 'poloniex',
            };
          });
      });
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
