import express from 'express';
const router = express.Router();

import getOrderBook from './getOrderBook';


router.use('/api', getOrderBook);
router.use('/', (req, res) => res.send('Hello World!'));

export default router;
