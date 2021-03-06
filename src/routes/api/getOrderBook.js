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
  const market = req.params.market;

  Promise.all([
    bittrex.getOrderBook(market),
    poloniex.getOrderBook(market),
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
      combined: {
        buy: combineCollections(buyCollection, true),
        sell: combineCollections(sellCollection),
      },
      exchanges: {
        bittrex: exchanges[0],
        poloniex: exchanges[1],
      },
    };

    res.json(data);
  }).catch(error => {
    console.log(error);
    next();
  });
});

export default router;
