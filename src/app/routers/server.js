import express from 'express';

import { testData } from 'app/raw-data';

const router = express.Router();

router.get('/', (req, res) => res.send('Hello from Api Server'));
router.get('/test-data', (req, res) => res.send(testData));

module.exports = router;
