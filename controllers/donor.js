const donorService = require('../services/donor');

const getAllDonors = async (req, res) => {
    let limit = req.query.limit && req.query.limit <= 100 ? parseInt(req.query.limit) : 10;
    let page = 0;
    if (req.query) {
        if (req.query.page) {
            req.query.page = parseInt(req.query.page);
            page = Number.isInteger(req.query.page) ? req.query.page : 0;
        }
    }
    try {
        const donors = await donorService.getAllDonors(limit, page);
        const message = 'there are donors';
        return res.status(200).json({
            'message': message,
            'data': donors
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            'code': 'SERVER_ERROR',
            'description': 'something went wrong, Please try again'
        });
    }

};

const createDonor = async (req, res) => {

    try {
        const donor = await donorService.createDonor(req.body);
        const message = 'new donor was created';
        return res.status(200).json({
            'message': message,
            'data': donor
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            'code': 'SERVER_ERROR',
            'description': 'something went wrong, Please try again'
        });
    }

};

const getDonorById = async (req, res) => {

    try {
        const job = await donorService.getDonor(req.params.id);
        const message = 'the donor found by id : ' + req.params.id;
        return res.status(200).json({
            'message': message,
            'data': donor
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            'code': 'SERVER_ERROR',
            'description': 'something went wrong, Please try again'
        });
    }

};

const updateDonor = async (req, res) => {

    try {
        const donor = await donorService.updateDonor(req.params.id, req.body);
        const message = 'the job was updated by id : ' + req.params.id;
        return res.status(200).json({
            'message': message,
            'data': donor
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            'code': 'SERVER_ERROR',
            'description': 'something went wrong, Please try again'
        });
    }

};

const deleteDonor = async (req, res) => {

    try {
        const donor = await donorService.deleteDonor(req.params.id);
        const message = 'the donor was deleted by id : ' + req.params.id;
        return res.status(200).json({
            'message': message,
            'data': donor
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
    getAllDonors: getAllDonors,
    createDonor: createDonor,
    deleteDonor: deleteDonor,
    updateDonor: updateDonor,
    getDonorById: getDonorById
};
