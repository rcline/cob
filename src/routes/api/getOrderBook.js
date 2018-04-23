import express from 'express';
import { bittrex, poloniex } from '../../exchanges';

const router = express.Router();


router.get('/orderbook', (req, res, next) => {

  Promise.all([
    bittrex.getOrderBook(),
    poloniex.getOrderBook(),
  ]).then((values) => {
    const bittrexData = values[0];
    const poloniexData = values[1];

    res.json({
      bittrex: bittrexData,
      poloniex: poloniexData,
    });
  }).catch(error => {
    console.log(error);
    next();
  });
});

export default router;
