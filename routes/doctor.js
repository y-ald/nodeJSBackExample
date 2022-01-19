const express = require('express');
const doctorController = require('../controllers/doctor');
let router = express.Router();

router.get('/', doctorController.getAllDoctors);

router.get('/:id', doctorController.getDoctorById);

router.put('/:id', doctorController.updateDoctor);

router.delete('/:id', doctorController.deleteDoctor);

router.post('/', doctorController.createDoctor);

module.exports = router;
