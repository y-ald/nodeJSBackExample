const express = require('express');
const donationController = require('../controllers/donation');
let router = express.Router();

router.get('/', donationController.getAllDonations);

router.get('/:id', donationController.getDonationById);

router.put('/:id', donationController.updateDonation);

router.delete('/:id', donationController.deleteDonation);

router.post('/', donationController.createDonation);

module.exports = router;
