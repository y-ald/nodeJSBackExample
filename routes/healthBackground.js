const express = require('express');
const healthBackgroundController = require('../controllers/healthBackground');
let router = express.Router();

router.get('/', healthBackgroundController.getAllHealthBackgrounds);

router.get('/:id', healthBackgroundController.getHealthBackgroundById);

router.put('/:id', healthBackgroundController.updateHealthBackground);

router.delete('/:id', healthBackgroundController.deleteHealthBackground);

router.post('/', healthBackgroundController.createHealthBackground);

module.exports = router;
