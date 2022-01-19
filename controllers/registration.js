const registrationService = require('../services/registration');

const getAllRegistrations = async (req, res) => {
    let limit = req.query.limit && req.query.limit <= 100 ? parseInt(req.query.limit) : 10;
    let page = 0;
    if (req.query) {
        if (req.query.page) {
            req.query.page = parseInt(req.query.page);
            page = Number.isInteger(req.query.page) ? req.query.page : 0;
        }
    }
    try {
        const registrations = await registrationService.getAllRegistrations(limit, page);
        const message = 'there are registrations';
        return res.status(200).json({
            'message': message,
            'data': registrations
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            'code': 'SERVER_ERROR',
            'description': 'something went wrong, Please try again'
        });
    }

};

const createRegistration = async (req, res) => {

    try {
        const registration = await registrationService.createRegistration(req.body);
        const message = 'new registration was created';
        return res.status(200).json({
            'message': message,
            'data': registration
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            'code': 'SERVER_ERROR',
            'description': 'something went wrong, Please try again'
        });
    }

};

const getRegistrationById = async (req, res) => {

    try {
        const job = await registrationService.getRegistration(req.params.id);
        const message = 'the registration found by id : ' + req.params.id;
        return res.status(200).json({
            'message': message,
            'data': registration
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            'code': 'SERVER_ERROR',
            'description': 'something went wrong, Please try again'
        });
    }

};

const updateRegistration = async (req, res) => {

    try {
        const registration = await registrationService.updateRegistration(req.params.id, req.body);
        const message = 'the job was updated by id : ' + req.params.id;
        return res.status(200).json({
            'message': message,
            'data': registration
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            'code': 'SERVER_ERROR',
            'description': 'something went wrong, Please try again'
        });
    }

};

const deleteRegistration = async (req, res) => {

    try {
        const registration = await registrationService.deleteRegistration(req.params.id);
        const message = 'the registration was deleted by id : ' + req.params.id;
        return res.status(200).json({
            'message': message,
            'data': registration
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
    getAllRegistrations: getAllRegistrations,
    createRegistration: createRegistration,
    deleteRegistration: deleteRegistration,
    updateRegistration: updateRegistration,
    getRegistrationById: getRegistrationById
};
