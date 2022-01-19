const donationService = require('../services/donation');

const getAllDonations = async (req, res) => {
    let limit = req.query.limit && req.query.limit <= 100 ? parseInt(req.query.limit) : 10;
    let page = 0;
    if (req.query) {
        if (req.query.page) {
            req.query.page = parseInt(req.query.page);
            page = Number.isInteger(req.query.page) ? req.query.page : 0;
        }
    }
    try {
        const donations = await donationService.getAllDonations(limit, page);
        const message = 'there are donations';
        return res.status(200).json({
            'message': message,
            'data': donations
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            'code': 'SERVER_ERROR',
            'description': 'something went wrong, Please try again'
        });
    }

};

const createDonation = async (req, res) => {

    try {
        const donation = await donationService.createDonation(req.body);
        const message = 'new donation was created';
        return res.status(200).json({
            'message': message,
            'data': donation
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            'code': 'SERVER_ERROR',
            'description': 'something went wrong, Please try again'
        });
    }

};

const getDonationById = async (req, res) => {

    try {
        const job = await donationService.getDonation(req.params.id);
        const message = 'the donation found by id : ' + req.params.id;
        return res.status(200).json({
            'message': message,
            'data': donation
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            'code': 'SERVER_ERROR',
            'description': 'something went wrong, Please try again'
        });
    }

};

const updateDonation = async (req, res) => {

    try {
        const donation = await donationService.updateDonation(req.params.id, req.body);
        const message = 'the job was updated by id : ' + req.params.id;
        return res.status(200).json({
            'message': message,
            'data': donation
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            'code': 'SERVER_ERROR',
            'description': 'something went wrong, Please try again'
        });
    }

};

const deleteDonation = async (req, res) => {

    try {
        const donation = await donationService.deleteDonation(req.params.id);
        const message = 'the donation was deleted by id : ' + req.params.id;
        return res.status(200).json({
            'message': message,
            'data': donation
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            'code': 'SERVER_ERROR',
            'description': 'something went wrong, Please try again'
        });
    }

};

module.exports = {
    getAllDonations: getAllDonations,
    createDonation: createDonation,
    deleteDonation: deleteDonation,
    updateDonation: updateDonation,
    getDonationById: getDonationById
};
