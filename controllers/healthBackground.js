const healthBackgroundService = require('../services/healthBackground');

const getAllHealthBackgrounds = async (req, res) => {
    let limit = req.query.limit && req.query.limit <= 100 ? parseInt(req.query.limit) : 10;
    let page = 0;
    if (req.query) {
        if (req.query.page) {
            req.query.page = parseInt(req.query.page);
            page = Number.isInteger(req.query.page) ? req.query.page : 0;
        }
    }
    try {
        const healthBackgrounds = await healthBackgroundService.getAllHealthBackgrounds(limit, page);
        const message = 'there are healthBackgrounds';
        return res.status(200).json({
            'message': message,
            'data': healthBackgrounds
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            'code': 'SERVER_ERROR',
            'description': 'something went wrong, Please try again'
        });
    }

};

const createHealthBackground = async (req, res) => {

    try {
        const healthBackground = await healthBackgroundService.createHealthBackground(req.body);
        const message = 'new healthBackground was created';
        return res.status(200).json({
            'message': message,
            'data': healthBackground
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            'code': 'SERVER_ERROR',
            'description': 'something went wrong, Please try again'
        });
    }

};

const getHealthBackgroundById = async (req, res) => {

    try {
        const job = await healthBackgroundService.getHealthBackground(req.params.id);
        const message = 'the healthBackground found by id : ' + req.params.id;
        return res.status(200).json({
            'message': message,
            'data': healthBackground
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            'code': 'SERVER_ERROR',
            'description': 'something went wrong, Please try again'
        });
    }

};

const updateHealthBackground = async (req, res) => {

    try {
        const healthBackground = await healthBackgroundService.updateHealthBackground(req.params.id, req.body);
        const message = 'the job was updated by id : ' + req.params.id;
        return res.status(200).json({
            'message': message,
            'data': healthBackground
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            'code': 'SERVER_ERROR',
            'description': 'something went wrong, Please try again'
        });
    }

};

const deleteHealthBackground = async (req, res) => {

    try {
        const healthBackground = await healthBackgroundService.deleteHealthBackground(req.params.id);
        const message = 'the healthBackground was deleted by id : ' + req.params.id;
        return res.status(200).json({
            'message': message,
            'data': healthBackground
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
    getAllHealthBackgrounds: getAllHealthBackgrounds,
    createHealthBackground: createHealthBackground,
    deleteHealthBackground: deleteHealthBackground,
    updateHealthBackground: updateHealthBackground,
    getHealthBackgroundById: getHealthBackgroundById
};
