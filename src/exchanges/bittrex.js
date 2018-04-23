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
  return fetch(url);
};

const getMarketSummaries = () => {
  const url = `${baseUrl}/getmarketsummaries`;
  return fetch(url);
};

const getMarketSummary = () => {
  const market = 'BTC-ETH';
  const url = `${baseUrl}/getmarketsummary?market=${market}`;
  return fetch(url);
};

const getOrderBook = () => {
  const market = 'BTC-ETH';
  const url = `${baseUrl}/getorderbook?market=${market}&type=both`;
  return fetch(url);
};

const getMarketHistory = () => {
  const market = 'BTC-ETH';
  const url = `${baseUrl}/getmarkethistory?market=${market}`;
  return fetch(url);
};

export {
  getCurrencies,
  getTicker,
  getMarketSummaries,
  getMarketSummary,
  getOrderBook,
  getMarketHistory,
};
