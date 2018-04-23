import fetch from 'node-fetch';

/**
 * Bittrex
 * https://bittrex.com/api/{version}/{method}?param=value
 *
 * ex: https://bittrex.com/api/v1.1/public/getorderbook?market=BTC-LTC&type=both
 */


const baseUrl = 'https://bittrex.com/api/v1.1/public';

const getCurrencies = () => {
  const url = `${baseUrl}/getcurrencies`;
  fetch(url);
};

const getTicker = () => {
  const url = `${baseUrl}/getticker`;
  return fetch(url)
    .then(response => {
      return response.json();
    });
};

const getMarketSummaries = () => {
  const url = `${baseUrl}/getmarketsummaries`;
  return fetch(url)
    .then(response => {
      return response.json();
    });
};

const getMarketSummary = () => {
  const market = 'BTC-ETH';
  const url = `${baseUrl}/getmarketsummary?market=${market}`;
  return fetch(url)
    .then(response => {
      return response.json();
    });
};

const getOrderBook = () => {
  const market = 'BTC-ETH';
  const url = `${baseUrl}/getorderbook?market=${market}&type=both`;
  return fetch(url)
    .then(response => {
      return response.json().then(json => {
        return {
          'buy': json.result.buy.map((order) => {
            return [order.Rate, order.Quantity];
          }),
          'sell': json.result.sell.map((order) => {
            return [order.Rate, order.Quantity];
          }),
        };
      });
    });
};

const getMarketHistory = () => {
  const market = 'BTC-ETH';
  const url = `${baseUrl}/getmarkethistory?market=${market}`;
  return fetch(url)
    .then(response => {
      return response.json().then(json => {
        return [
          json.result.map((order) => {
            return {
              id: order.Id, // 231733061,
              date: order.TimeStamp, // "2018-04-23T04:59:23.567",
              type: order.OrderType.toLowerCase(), // "SELL",
              // FillType: "PARTIAL_FILL",
              rate: order.Price, // 0.0713,
              amount: order.Quantity, // 0.06275747,
              total: order.Total, // 0.0044746,
            };
          }),
        ];
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
