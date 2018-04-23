import express from 'express';
import { bittrex } from '../exchanges';

const router = express.Router();


router.get('/orderbook', (req, res, next) => {
  bittrex.getOrderBook()
    .then(response => {
      response.json().then(json => {
        res.json(json);
      });
    })
    .catch(error => {
      console.log(error);
      next();
    });
});

export default router;
