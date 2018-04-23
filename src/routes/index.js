import express from 'express';
const router = express.Router();

import api from './api';


router.use('/', api);
router.use('/', (req, res) => res.send('Catchall'));

export default router;
