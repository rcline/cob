import express from 'express';
const router = express.Router();

import getOrderBook from './getorderbook';
import getMarketHistory from './getmarkethistory';


router.use('/api', getOrderBook);
router.use('/api', getMarketHistory);

export default router;
