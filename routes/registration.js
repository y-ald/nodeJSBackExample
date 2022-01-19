const express = require('express');
const registrationController = require('../controllers/registration');
let router = express.Router();

router.get('/', registrationController.getAllRegistrations);

router.get('/:id', registrationController.getRegistrationById);

router.put('/:id', registrationController.updateRegistration);

router.delete('/:id', registrationController.deleteRegistration);

router.post('/', registrationController.createRegistration);

module.exports = router;
