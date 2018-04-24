import path from 'path';
import express from 'express';
const router = express.Router();

import api from './api';


router.use('/', api);
router.use('/', (req, res) => res.sendFile(path.resolve(__dirname, '../../public/view.html')));

export default router;
