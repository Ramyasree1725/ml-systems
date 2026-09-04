const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/metricsController');

router.get('/', ctrl.list);
router.get('/:id', ctrl.get);
router.post('/', ctrl.create);
router.put('/:id', ctrl.update);
router.delete('/:id', ctrl.remove);
router.get('/search/:q', ctrl.search);
router.get('/export/json', ctrl.export);
router.get('/stats/summary', ctrl.stats);

module.exports = router;
