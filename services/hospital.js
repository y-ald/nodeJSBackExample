const HospitalModel = require('../configs/models/hospital');

async function createHospital(hospital) {
    let result;
    const newHospital = new HospitalModel(hospital);
    result = await newHospital.save();
    return result;
}

async function getAllHospitals(perPage, page) {
    let result;
    result = await HospitalModel.find().limit(perPage).skip(perPage * page).exec();
    return result;
}

async function updateHospital(id, hospital) {
    let result;
    const currentHospital = await HospitalModel.findById(id).exec();
    currentHospital.set(hospital);
    result = await currentHospital.save();
    return result;
}

async function getHospital(id) {
    let hospital;
    hospital = await HospitalModel.findById(id).exec();
    return hospital;
}

async function deleteHospital(id) {
    let result;
    result = await HospitalModel.deleteOne({_id: id}).exec();
    return result;
}

module.exports = {
    deleteHospital: deleteHospital,
    getHospital: getHospital,
    updateHospital: updateHospital,
    getAllHospitals: getAllHospitals,
    createHospital: createHospital
};
