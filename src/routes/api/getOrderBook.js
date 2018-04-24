import express from 'express';
import { bittrex, poloniex } from '../../exchanges';

const router = express.Router();

function combineCollections(collections, descending) {
  const combined = collections.reduce((acc, val) => acc.concat(val), []);
  return combined.sort(function (a, b) {
    if (descending) {
      return b.rate - a.rate;
    } else {
      return a.rate - b.rate;
    }
  });
}

router.get('/orderbook', (req, res, next) => {
  Promise.all([
    bittrex.getOrderBook(),
    poloniex.getOrderBook(),
  ]).then((exchanges) => {
    const buyCollection = [];
    const sellCollection = [];

    exchanges.forEach((exchange) => {
      if (exchange) {
        buyCollection.push(exchange.buy);
        sellCollection.push(exchange.sell);
      }
    });

    const data = {
      buy: combineCollections(buyCollection, true),
      sell: combineCollections(sellCollection),
    };

    res.json(data);
  }).catch(error => {
    console.log(error);
    next();
  });
});

export default router;
