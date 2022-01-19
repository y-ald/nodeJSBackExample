const express = require('express');
const donorController = require('../controllers/donor');
let router = express.Router();

router.get('/', donorController.getAllDonors);

router.get('/:id', donorController.getDonorById);

router.put('/:id', donorController.updateDonor);

router.delete('/:id', donorController.deleteDonor);

router.post('/', donorController.createDonor);

module.exports = router;
