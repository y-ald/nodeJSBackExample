const hospitalService = require('../services/hospital');

const getAllHospitals = async (req, res) => {
    let limit = req.query.limit && req.query.limit <= 100 ? parseInt(req.query.limit) : 10;
    let page = 0;
    if (req.query) {
        if (req.query.page) {
            req.query.page = parseInt(req.query.page);
            page = Number.isInteger(req.query.page) ? req.query.page : 0;
        }
    }
    try {
        const hospitals = await hospitalService.getAllHospitals(limit, page);
        const message = 'there are hospitals';
        return res.status(200).json({
            'message': message,
            'data': hospitals
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            'code': 'SERVER_ERROR',
            'description': 'something went wrong, Please try again'
        });
    }

};

const createHospital = async (req, res) => {

    try {
        const hospital = await hospitalService.createHospital(req.body);
        const message = 'new hospital was created';
        return res.status(200).json({
            'message': message,
            'data': hospital
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            'code': 'SERVER_ERROR',
            'description': 'something went wrong, Please try again'
        });
    }

};

const getHospitalById = async (req, res) => {

    try {
        const job = await hospitalService.getHospital(req.params.id);
        const message = 'the hospital found by id : ' + req.params.id;
        return res.status(200).json({
            'message': message,
            'data': hospital
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            'code': 'SERVER_ERROR',
            'description': 'something went wrong, Please try again'
        });
    }

};

const updateHospital = async (req, res) => {

    try {
        const hospital = await hospitalService.updateHospital(req.params.id, req.body);
        const message = 'the job was updated by id : ' + req.params.id;
        return res.status(200).json({
            'message': message,
            'data': hospital
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            'code': 'SERVER_ERROR',
            'description': 'something went wrong, Please try again'
        });
    }

};

const deleteHospital = async (req, res) => {

    try {
        const hospital = await hospitalService.deleteHospital(req.params.id);
        const message = 'the hospital was deleted by id : ' + req.params.id;
        return res.status(200).json({
            'message': message,
            'data': hospital
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
    getAllHospitals: getAllHospitals,
    createHospital: createHospital,
    deleteHospital: deleteHospital,
    updateHospital: updateHospital,
    getHospitalById: getHospitalById
};
