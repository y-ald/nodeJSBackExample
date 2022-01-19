const express = require('express');
const hospitalController = require('../controllers/hospital');
let router = express.Router();

router.get('/', hospitalController.getAllHospitals);

router.get('/:id', hospitalController.getHospitalById);

router.put('/:id', hospitalController.updateHospital);

router.delete('/:id', hospitalController.deleteHospital);

router.post('/', hospitalController.createHospital);

module.exports = router;
