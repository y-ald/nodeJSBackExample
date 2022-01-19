const HealthBackgroundModel = require('../configs/models/healthBackground');

async function createHealthBackground(healthBackground) {
    let result;
    const newHealthBackground = new HealthBackgroundModel(healthBackground);
    result = await newHealthBackground.save();
    return result;
}

async function getAllHealthBackgrounds(perPage, page) {
    let result;
    result = await HealthBackgroundModel.find().limit(perPage).skip(perPage * page).exec();
    return result;
}

async function updateHealthBackground(id, healthBackground) {
    let result;
    const currentHealthBackground = await HealthBackgroundModel.findById(id).exec();
    currentHealthBackground.set(healthBackground);
    result = await currentHealthBackground.save();
    return result;
}

async function getHealthBackground(id) {
    let healthBackground;
    healthBackground = await HealthBackgroundModel.findById(id).exec();
    return healthBackground;
}

async function deleteHealthBackground(id) {
    let result;
    result = await HealthBackgroundModel.deleteOne({_id: id}).exec();
    return result;
}

module.exports = {
    deleteHealthBackground: deleteHealthBackground,
    getHealthBackground: getHealthBackground,
    updateHealthBackground: updateHealthBackground,
    getAllHealthBackgrounds: getAllHealthBackgrounds,
    createHealthBackground: createHealthBackground
};
