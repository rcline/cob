import express from 'express';
import { bittrex, poloniex } from '../../exchanges';

const router = express.Router();

function combineCollections(collections) {
  const combined = collections.reduce((acc, val) => acc.concat(val), []);
  return combined.sort(function (a, b) {
    return b.date - a.date;
  });
}

router.get('/markethistory', (req, res, next) => {
  Promise.all([
    bittrex.getMarketHistory(),
    poloniex.getMarketHistory(),
  ]).then((exchanges) => {
    const data = combineCollections(exchanges);

    res.json(data);
  }).catch(error => {
    console.log(error);
    next();
  });
});

export default router;
