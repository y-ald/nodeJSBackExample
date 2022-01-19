const RegistrationModel = require('../configs/models/registration');

async function createRegistration(registration) {
    let result;
    const newRegistration = new RegistrationModel(registration);
    result = await newRegistration.save();
    return result;
}

async function getAllRegistrations(perPage, page) {
    let result;
    result = await RegistrationModel.find().limit(perPage).skip(perPage * page).exec();
    return result;
}

async function updateRegistration(id, registration) {
    let result;
    const currentRegistration = await RegistrationModel.findById(id).exec();
    currentRegistration.set(registration);
    result = await currentRegistration.save();
    return result;
}

async function getRegistration(id) {
    let registration;
    registration = await RegistrationModel.findById(id).exec();
    return registration;
}

async function deleteRegistration(id) {
    let result;
    result = await RegistrationModel.deleteOne({_id: id}).exec();
    return result;
}

module.exports = {
    deleteRegistration: deleteRegistration,
    getRegistration: getRegistration,
    updateRegistration: updateRegistration,
    getAllRegistrations: getAllRegistrations,
    createRegistration: createRegistration
};
